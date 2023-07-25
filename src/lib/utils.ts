import { cache } from 'react'

import { type ClassValue, clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'
import type { StudentSchedule, StudentScheduleLesson } from '~/types'

import { studentScheduleSchema } from './validations/schedule'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToTimeStr(date: string) {
  return dayjs(date).format('HH:mm')
}

type ScheduleHorary = StudentScheduleLesson & {
  weekday: number
}

export const tabulateSchedule = cache((schedules: StudentSchedule) => {
  const schedulesParsed = studentScheduleSchema.parse(schedules)

  const horariesMap = new Map<string, ScheduleHorary[]>()

  schedulesParsed.forEach((schedule) => {
    schedule.forEach((lesson) => {
      const key = `${dateToTimeStr(lesson.startsAt)}-${dateToTimeStr(
        lesson.endsAt,
      )}`
      const prevHoraries = horariesMap.get(key)
      const lessonHorary: ScheduleHorary = {
        ...lesson,
        weekday: dayjs(lesson.startsAt).day(),
      }

      horariesMap.set(
        key,
        prevHoraries ? [...prevHoraries, lessonHorary] : [lessonHorary],
      )
    })
  })

  return horariesMap
})

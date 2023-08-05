import { cache } from 'react'

import { type ClassValue, clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

import {
  type Schedule,
  type ScheduleLesson,
  studentScheduleSchema,
} from './validations/schedule'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToStr(date: string) {
  return dayjs(date).format('DD/MM/YY')
}

export function dateToTimeStr(date: string) {
  return dayjs(date).format('HH:mm')
}

type ScheduleHorary = ScheduleLesson & {
  weekday: number
}

export const tabulateSchedule = cache((schedules: Schedule) => {
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

  return Array.from(horariesMap).sort((a, b) => {
    const aStartTime = dayjs(`2023/01/01 ${a[0].split('-')[0]}`)
    const bStartTime = dayjs(`2023/01/01 ${b[0].split('-')[0]}`)

    return aStartTime.isBefore(bStartTime) ? -1 : 1
  })
})

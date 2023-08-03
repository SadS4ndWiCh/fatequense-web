import { memo } from 'react'

import { Clock2, User } from 'lucide-react'

import { dateToTimeStr } from '~/lib/utils'
import type { Schedule, ScheduleLesson } from '~/lib/validations/schedule'

import { Badge } from '../ui/badge'

type Props = {
  schedules: Schedule
}

type ScheduleDayProps = {
  lessons: ScheduleLesson[]
}

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

function ScheduleDay({ lessons }: ScheduleDayProps) {
  if (lessons.length === 0)
    return (
      <div className="w-full text-center p-7 border border-dashed rounded-md">
        <p>Sem aula</p>
      </div>
    )

  return (
    <ol className="space-y-2">
      {lessons.map((lesson, i) => (
        <li
          key={`lesson-${lesson.cod}-${i}`}
          className="p-4 rounded-md space-y-1 bg-zinc-100 dark:bg-slate-900"
        >
          <div className="flex items-center text-xs">
            <Clock2 className="mr-2 w-4 h-4" />
            <time dateTime={lesson.startsAt}>
              {dateToTimeStr(lesson.startsAt)}
            </time>
            <span className="mx-1">-</span>
            <time dateTime={lesson.endsAt}>{dateToTimeStr(lesson.endsAt)}</time>
          </div>

          <p>{lesson.discipline?.name}</p>
          <p className="flex items-center text-sm dark:text-slate-300">
            <User className="mr-2 w-5 h-5" />
            <span>{lesson.discipline?.teacherName}</span>
          </p>
        </li>
      ))}
    </ol>
  )
}

function MobileStudentScheduleUnmemoized({ schedules }: Props) {
  const todayWeekday = new Date().getDay() - 1

  return (
    <ol className="space-y-4 md:hidden">
      {schedules.map((lessons, i) => (
        <li key={`schedule-day-${i}`} className="space-y-2">
          <header className="flex items-center justify-between w-full">
            <h3 className="text-lg font-bold">{WEEKDAYS[i]}</h3>
            {todayWeekday === i && <Badge>Hoje</Badge>}
          </header>

          <ScheduleDay lessons={lessons} />
        </li>
      ))}
    </ol>
  )
}

export const MobileStudentSchedule = memo(MobileStudentScheduleUnmemoized)

import { notFound } from 'next/navigation'

import dayjs from 'dayjs'
import { PartyPopper } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentSchedules } from '~/lib/student'

function formatHour(datetime: string) {
  return dayjs(datetime).format('HH:mm')
}

export async function StudentTodaySchedule() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const schedules = (await getStudentSchedules(user.accessToken)) ?? []
  const today = dayjs().day() - 1

  const todaySchedules = today >= 0 ? schedules[today] : []

  if (todaySchedules.length === 0) {
    return (
      <div className="w-[280px]">
        <div className="mb-4 w-fit rounded-md bg-red-50 p-4 dark:bg-red-600">
          <PartyPopper className="h-5 w-5 text-red-600 dark:text-red-50" />
        </div>

        <h2 className="text-xl font-bold">Hoje não tem aula</h2>
        <p>Curta o dia de hoje, pois aqui tem folguinha</p>
      </div>
    )
  }

  return (
    <div className="w-[280px]">
      <ul>
        {todaySchedules.map((schedule) => (
          <li
            key={schedule.startsAt}
            className="relative max-w-[280px] border-l border-l-zinc-300 pb-4 pl-6 before:absolute before:left-0 before:top-0 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-zinc-300 before:content-['']"
          >
            <time dateTime={schedule.startsAt} className="text-sm">
              às {formatHour(schedule.startsAt)}
            </time>
            <div className="mt-2 rounded-md bg-zinc-50 p-4 dark:bg-gray-900">
              <span className="text-sm">{schedule.cod}</span>
              <p className="truncate">{schedule.discipline?.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

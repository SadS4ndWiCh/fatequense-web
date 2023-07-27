import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentSchedules } from '~/lib/student'
import { tabulateSchedule } from '~/lib/utils'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { DisciplineHoverCard } from './discipline-hover-card'

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export async function StudentScheduleCalendar() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const schedules = (await getStudentSchedules({ user })) ?? []

  if (schedules.every((day) => day.length === 0))
    return (
      <div className="max-w-lg mx-auto">
        <div className="my-4 text-center">
          <h2 className="font-semibold text-xl">Horários não encontrados</h2>
          <p>
            Aparentemente você está em férias ou ainda não se matriculou nas
            matérias!
          </p>
        </div>

        <div className="space-y-2 rounded-md bg-yellow-50 p-4 border-2 border-transparent dark:border-yellow-500 text-yellow-600 dark:bg-transparent dark:text-yellow-500">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Atenção</span>
          </div>

          <p>
            Caso não tenha seja nenhuma das opções acima, lembre-se que esse
            site pode apresentar problemas a qualquer momento, mas estaremos
            tentando resolver o mais rápido possível
          </p>
        </div>
      </div>
    )

  const tabulatedSchedule = tabulateSchedule(schedules)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Horário</TableHead>
          {WEEKDAYS.map((weekday) => (
            <TableHead key={weekday} className="text-center">
              {weekday}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {tabulatedSchedule &&
          tabulatedSchedule.map((horary, y) => (
            <TableRow key={`${horary[0]}-${y}`}>
              <TableCell>{horary[0]}</TableCell>

              {Array.from({ length: 6 }, (_, x) => (
                <TableCell
                  key={`${horary[0]}-${x}${y}`}
                  className="text-center"
                >
                  <DisciplineHoverCard
                    lesson={horary[1].find(
                      (lesson) => lesson.weekday - 1 === x,
                    )}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

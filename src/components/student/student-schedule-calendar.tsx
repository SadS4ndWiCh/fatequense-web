import { memo } from 'react'

import { StudentSchedule } from '~/types'

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

type Props = {
  schedules: StudentSchedule
}

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

function StudentScheduleCalendarUnmemoized({ schedules }: Props) {
  const tabulatedSchedule = tabulateSchedule(schedules)

  return (
    <Table className="hidden md:table">
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

export const StudentScheduleCalendar = memo(StudentScheduleCalendarUnmemoized)

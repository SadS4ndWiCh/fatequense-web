import { memo } from 'react'

import {
  Calendar,
  Check,
  Hourglass,
  Lock,
  Puzzle,
  Star,
  Watch,
  X,
} from 'lucide-react'
import {
  StudentSchoolGradeDiscipline,
  StudentSchoolGrade as TStudentSchoolGrade,
} from '~/types'

import { cn } from '~/lib/utils'

import { TextTooltip } from '../text-tooltip'

type Props = {
  schoolGrade: TStudentSchoolGrade
}

type DisciplineStatusProps = Pick<StudentSchoolGradeDiscipline, 'status'>

type DisciplineHistoryDetailProps = {
  discipline: StudentSchoolGradeDiscipline
}

const statusComp = {
  approved: {
    icon: Check,
    label: 'Aprovado',
  },
  attending: {
    icon: Hourglass,
    label: 'Cursando',
  },
  dismissed: {
    icon: X,
    label: 'Reprovado',
  },
  'not-attended': {
    icon: Lock,
    label: 'Não cursado',
  },
} as const

function DisciplineStatus({ status }: DisciplineStatusProps) {
  const Status = statusComp[status]

  return (
    <TextTooltip text={Status.label}>
      <div
        className={cn(
          'flex items-center justify-center w-6 h-6 rounded-full p-1',
          {
            'bg-green-50 text-green-600 dark:bg-green-500 dark:text-green-50':
              status === 'approved',
            'bg-yellow-50 text-yellow-600 dark:bg-yellow-500 dark:text-yellow-50':
              status === 'attending',
            'bg-red-50 text-red-600 dark:bg-red-500 dark:text-red-50':
              status === 'dismissed',
            'bg-zinc-100 text-zinc-600 dark:bg-slate-500 dark:text-slate-50':
              status === 'not-attended',
          },
        )}
      >
        <Status.icon className="h-4 w-4" />
        <p className="sr-only">{Status.label}</p>
      </div>
    </TextTooltip>
  )
}

function DisciplineHistoryDetail({ discipline }: DisciplineHistoryDetailProps) {
  return (
    <li className="flex space-x-2 p-4">
      <DisciplineStatus status={discipline.status} />
      <div>
        <div className="text-xs dark:text-slate-300 space-x-2 divide-x ">
          <p>{discipline.code}</p>
        </div>
        <p>{discipline.name}</p>
        {discipline.status !== 'not-attended' && (
          <div className="flex gap-2 items-center mt-2 text-xs">
            <TextTooltip text="Frequência">
              <div className="flex items-center">
                <Puzzle className="mr-1 w-4 h-4" />
                <p>{discipline.frequency}%</p>
                <p className="sr-only">Frequência</p>
              </div>
            </TextTooltip>

            <TextTooltip text="Média final">
              <div className="flex items-center">
                <Star className="mr-1 w-4 h-4" />
                <p>{discipline.grade}</p>
                <p className="sr-only">Média final</p>
              </div>
            </TextTooltip>

            <TextTooltip text={`${discipline.workload} aulas por semana`}>
              <div className="flex items-center">
                <Watch className="mr-1 w-4 h-4" />
                <p>{discipline.workload}</p>
                <p className="sr-only">Carga horária</p>
              </div>
            </TextTooltip>

            {discipline.period && (
              <TextTooltip
                text={`${discipline.period % 10}º Semestre de ${Math.floor(
                  discipline.period / 10,
                )}`}
              >
                <div className="flex items-center">
                  <Calendar className="mr-1 w-4 h-4" />
                  <p>{discipline.period}</p>
                  <p className="sr-only">Período</p>
                </div>
              </TextTooltip>
            )}
          </div>
        )}
      </div>
    </li>
  )
}

function StudentSchoolGradeUnmemoized({ schoolGrade }: Props) {
  return (
    <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {schoolGrade.map((grade) => (
        <section key={`semester-${grade.semester}`}>
          <header className="sticky top-[4.5rem] flex items-center justify-between md:top-0 p-4 rounded-md bg-zinc-100 dark:bg-slate-900">
            <h2>{grade.semester}º Semestre</h2>
            <small className="text-xs dark:text-slate-300">
              {grade.disciplines.length} Matérias
            </small>
          </header>

          <ul className="divide-y">
            {grade.disciplines.map((discipline) => (
              <DisciplineHistoryDetail
                key={`discipline-${discipline.code}`}
                discipline={discipline}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export const StudentSchoolGrade = memo(StudentSchoolGradeUnmemoized)

import { memo } from 'react'

import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentDisciplines, getStudentPartialAbsences } from '~/lib/student'
import { cn } from '~/lib/utils'
import type { Discipline } from '~/lib/validations/discipline'
import type { PartialAbsences } from '~/lib/validations/partial-absences'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

type AbsencesProps = {
  partialAbsence: PartialAbsences[0]
  discipline?: Discipline
}

function Absences({ partialAbsence, discipline }: AbsencesProps) {
  const currentAbsences = partialAbsence.totalAbsences
  const totalAbsencesAllowed = discipline?.totalAbsencesAllowed
  const absencesPercentage = totalAbsencesAllowed
    ? currentAbsences / totalAbsencesAllowed
    : 0

  return (
    <div
      className={cn('w-fit rounded-full px-3 py-1', {
        'bg-green-50 text-green-600 dark:bg-green-500 dark:text-green-50':
          absencesPercentage < 0.5,
        'bg-yellow-50 text-yellow-600 dark:bg-yellow-500 dark:text-yellow-50':
          absencesPercentage >= 0.5 && absencesPercentage < 1,
        'bg-red-50 text-red-600 dark:bg-red-500 dark:text-red-50':
          absencesPercentage >= 1,
      })}
    >
      <span>{currentAbsences}</span>
      {discipline && (
        <span className="ml-1 text-xs">
          /{discipline?.totalAbsencesAllowed ?? '-'}
        </span>
      )}
    </div>
  )
}

async function StudentPartialAbsencesUnmemoized() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const partialAbsences = (await getStudentPartialAbsences({ user })) ?? []
  const allDisciplines = (await getStudentDisciplines({ user })).reduce(
    (prev, curr) => prev.set(curr.code, curr),
    new Map<string, Discipline>(),
  )

  if (partialAbsences.length === 0) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="my-4 text-center">
          <h2 className="font-semibold text-xl">Faltas não encontradas</h2>
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
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sigla</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead className="text-center">Faltas</TableHead>
          <TableHead className="text-center">Presenças</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {partialAbsences.map((partialAbsence) => (
          <TableRow key={partialAbsence.cod}>
            <TableCell>{partialAbsence.cod}</TableCell>
            <TableCell>{partialAbsence.disciplineName}</TableCell>
            <TableCell className="flex justify-center">
              <Absences
                partialAbsence={partialAbsence}
                discipline={allDisciplines.get(partialAbsence.cod)}
              />
            </TableCell>
            <TableCell className="text-center">
              {partialAbsence.totalPresences}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const StudentPartialAbsences = memo(StudentPartialAbsencesUnmemoized)

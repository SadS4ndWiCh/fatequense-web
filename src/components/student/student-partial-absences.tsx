import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentPartialAbsences } from '~/lib/student'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export async function StudentPartialAbsences() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const partialAbsences = (await getStudentPartialAbsences({ user })) ?? []

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
            <TableCell className="text-center">
              {partialAbsence.totalAbsences}
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

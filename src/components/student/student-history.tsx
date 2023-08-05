import { notFound } from 'next/navigation'

import { Check, Hourglass, X } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentHistory } from '~/lib/student'
import { cn } from '~/lib/utils'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export async function StudentHistory() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const data = (await getStudentHistory(user.accessToken)) ?? []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sigla</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead className="text-center">Média Final</TableHead>
          <TableHead className="text-center">Frequência</TableHead>
          <TableHead className="text-center">Aprovado</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((history, i) => (
          <TableRow key={`${history.cod}-${i}`}>
            <TableCell>{history.cod}</TableCell>
            <TableCell>{history.disciplineName}</TableCell>
            <TableCell className="text-center">{history.finalGrade}</TableCell>
            <TableCell className="text-center">
              {history.presenceFrequency * 100}%
            </TableCell>
            <TableCell>
              <div
                className={cn(
                  'flex h-6 w-6 mx-auto items-center justify-center rounded-full p-1',
                  {
                    'bg-green-50 text-green-600 dark:bg-green-500 dark:text-green-50':
                      history.isApproved,
                    'bg-yellow-50 text-yellow-600 dark:bg-yellow-500 dark:text-yellow-50':
                      history.description === 'Em Curso',
                    'bg-red-50 text-red-600 dark:bg-red-500 dark:text-red-50':
                      !history.isApproved && history.description !== 'Em Curso',
                  },
                )}
              >
                {history.isApproved ? (
                  <Check className="h-4 w-4" />
                ) : history.description === 'Em Curso' ? (
                  <Hourglass className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

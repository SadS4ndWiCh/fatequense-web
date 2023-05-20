import { notFound } from 'next/navigation';

import { Check, Hourglass, X } from 'lucide-react';

import { getCurrentUser } from '~/lib/session';
import { getStudentHistory } from '~/lib/student';
import { cn } from '~/lib/utils';

export async function StudentHistoryTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const data = (await getStudentHistory({ user })) ?? [];

  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Sigla</th>
            <th className="px-6 py-3">Disciplina</th>
            <th className="px-6 py-3">Média Final</th>
            <th className="px-6 py-3">Frequência</th>
            <th className="px-6 py-3">Aprovado</th>
          </tr>
        </thead>

        <tbody>
          {data.map((history, i) => (
            <tr
              key={`${history.cod}-${i}`}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {history.cod}
              </td>
              <td className="px-6 py-4">{history.disciplineName}</td>
              <td className="px-6 py-4">{history.finalGrade}</td>
              <td className="px-6 py-4">{history.presenceFrequency * 100}%</td>
              <td className="px-6 py-4">
                <div
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-full p-1',
                    {
                      'bg-green-50 text-green-600': history.isApproved,
                      'bg-yellow-50 text-yellow-600':
                        history.description === 'Em Curso',
                      'bg-red-50 text-red-600':
                        !history.isApproved &&
                        history.description !== 'Em Curso',
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

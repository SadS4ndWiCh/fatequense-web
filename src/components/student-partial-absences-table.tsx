import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { getStudentPartialAbsences } from "~/lib/student";

export async function StudentPartialAbsencesTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const partialAbsences = (await getStudentPartialAbsences({ user })) ?? [];

  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Sigla</th>
            <th className="px-6 py-3">Disciplina</th>
            <th className="px-6 py-3">Faltas</th>
            <th className="px-6 py-3">Presenças</th>
          </tr>
        </thead>

        <tbody>
          {partialAbsences.map((partialAbsence) => (
            <tr
              key={partialAbsence.cod}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {partialAbsence.cod}
              </td>
              <td className="px-6 py-4">{partialAbsence.disciplineName}</td>
              <td className="px-6 py-4">{partialAbsence.totalAbsences}</td>
              <td className="px-6 py-4">{partialAbsence.totalPresences}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

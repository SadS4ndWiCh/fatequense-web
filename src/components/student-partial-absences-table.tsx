import { PartialAbsences } from "~/lib/validators/partial-absences";

const partialAbsences: PartialAbsences = [
  {
    cod: "ISO200",
    disciplineName: "Sistemas Operacionais II",
    totalAbsences: 4,
    totalPresences: 25,
    lessons: [],
  },
  {
    cod: "IBD002",
    disciplineName: "Banco de Dados",
    totalAbsences: 4,
    totalPresences: 36,
    lessons: [],
  },
];

export function StudentPartialAbsencesTable() {
  return (
    <div className="w-full relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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

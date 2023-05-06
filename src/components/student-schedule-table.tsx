import { notFound } from "next/navigation";

import { tabulateSchedule } from "~/lib/utils";
import { DisciplineHoverCard } from "./discipline-hover-card";
import { getStudentSchedules } from "~/lib/student";
import { getCurrentUser } from "~/lib/session";

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export async function StudentScheduleTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const schedules = (await getStudentSchedules({ user })) ?? [];
  const tabulatedSchedule = tabulateSchedule(schedules);

  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3"></th>

            {WEEKDAYS.map((weekday) => (
              <th key={weekday} className="px-6 py-3">
                {weekday}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tabulatedSchedule &&
            Array.from(tabulatedSchedule).map((horary, y) => (
              <tr
                key={`${horary[0]}-${y}`}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {horary[0]}
                </td>

                {Array.from({ length: 6 }, (_, x) => (
                  <td key={`${horary[0]}-${x}${y}`} className="px-6 py-4">
                    {/* {horary[1][x]?.cod} */}
                    {/* {horary[1].find((lesson) => lesson.weekday - 1 === x)?.cod} */}
                    <DisciplineHoverCard
                      lesson={horary[1].find(
                        (lesson) => lesson.weekday - 1 === x
                      )}
                    />
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

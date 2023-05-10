import { notFound } from "next/navigation";

import { tabulateSchedule } from "~/lib/utils";
import * as Table from "./ui/table";
import { DisciplineHoverCard } from "./discipline-hover-card";
import { getStudentSchedules } from "~/lib/student";
import { getCurrentUser } from "~/lib/session";

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export async function StudentScheduleTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const schedules = (await getStudentSchedules({ user })) ?? [];
  const tabulatedSchedule = Array.from(tabulateSchedule(schedules));

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.Column></Table.Column>
          {WEEKDAYS.map((weekday) => (
            <Table.Column key={weekday}>{weekday}</Table.Column>
          ))}
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {tabulatedSchedule &&
          tabulatedSchedule.map((horary, y) => (
            <Table.Row
              key={`${horary[0]}-${y}`}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Data className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {horary[0]}
              </Table.Data>

              {Array.from({ length: 6 }, (_, x) => (
                <Table.Data key={`${horary[0]}-${x}${y}`} className="px-6 py-4">
                  <DisciplineHoverCard
                    lesson={horary[1].find(
                      (lesson) => lesson.weekday - 1 === x
                    )}
                  />
                </Table.Data>
              ))}
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
}

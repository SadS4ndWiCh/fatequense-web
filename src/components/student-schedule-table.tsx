import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { getStudentSchedules } from "~/lib/student";
import { tabulateSchedule } from "~/lib/utils";

import { DisciplineHoverCard } from "./discipline-hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export async function StudentScheduleTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const schedules = (await getStudentSchedules({ user })) ?? [];
  const tabulatedSchedule = Array.from(tabulateSchedule(schedules));

  return (
    <Table>
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
  );
}

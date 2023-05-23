import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { getStudentPartialAbsences } from "~/lib/student";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export async function StudentPartialAbsencesTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const partialAbsences = (await getStudentPartialAbsences({ user })) ?? [];

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
  );
}

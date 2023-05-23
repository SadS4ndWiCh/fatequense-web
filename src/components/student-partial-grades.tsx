import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { getStudentPartialGrades } from "~/lib/student";
import { cn } from "~/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function Grade({ grade }: { grade: number }) {
  return (
    <span
      className={cn("rounded-full px-3 py-1", {
        "bg-green-50 text-green-600 dark:bg-green-600 dark:text-green-50":
          grade >= 6,
        "bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-50": grade < 6,
      })}
    >
      {grade}
    </span>
  );
}

export async function StudentPartialGrades() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const partialGrades = (await getStudentPartialGrades({ user })) ?? [];
  const sortedExamsGrades = partialGrades.map((grade) => {
    const sorted = grade.examsDates.sort((a, b) =>
      a.title > b.title ? 1 : -1,
    );
    return {
      ...grade,
      examsDates: sorted.length === 0 ? [null, null, null] : sorted,
    };
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sigla</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead className="text-center">P1</TableHead>
          <TableHead className="text-center">P2</TableHead>
          <TableHead className="text-center">P3</TableHead>
          <TableHead className="text-center">Média</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {sortedExamsGrades.map((grade, i) => (
          <TableRow key={grade.cod}>
            <TableCell>{grade.cod}</TableCell>
            <TableCell>{grade.disciplineName}</TableCell>
            {grade.examsDates.map((exams) => (
              <TableCell
                key={`${grade.cod}-${exams?.title}`}
                className="text-center"
              >
                {/* {exams?.grade} */}
                <Grade grade={exams?.grade || 0} />
              </TableCell>
            ))}
            <TableCell className="text-center">
              {/* <span
                className={cn("rounded-full px-3 py-1", {
                  "bg-green-50 text-green-600 dark:bg-green-600 dark:text-green-600":
                    grade.averageGrade >= 6,
                  "bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-50":
                    grade.averageGrade < 6,
                })}
              >
                {grade.averageGrade}
              </span> */}
              <Grade grade={grade.averageGrade} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { getStudentPartialGrades } from "~/lib/student";
import { cn, dateFormat } from "~/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AlertCircle } from "lucide-react";

function Grade({ grade }: { grade: number }) {
  return (
    <span
      className={cn("w-fit rounded-full px-3 py-1", {
        "bg-green-50 text-green-600 dark:bg-green-500 dark:text-green-50":
          grade >= 6,
        "bg-red-50 text-red-600 dark:bg-red-500 dark:text-red-50": grade < 6,
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

  if (partialGrades.length === 0) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="my-4 text-center">
          <h2 className="font-semibold text-xl">Notas não encontradas</h2>
          <p>Aparentemente você está em férias ou ainda não se matriculou nas matérias!</p>
        </div>

        <div className="space-y-2 rounded-md bg-yellow-50 p-4 border-2 border-transparent dark:border-yellow-500 text-yellow-600 dark:bg-transparent dark:text-yellow-500">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Atenção</span>
          </div>

          <p>
            Caso não tenha seja nenhuma das opções acima, lembre-se que esse site pode apresentar
            problemas a qualquer momento, mas estaremos tentando resolver o mais rápido possível
          </p>
        </div>
      </div>
    )
  }

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
        {sortedExamsGrades.map((grade) => (
          <TableRow key={grade.cod}>
            <TableCell>{grade.cod}</TableCell>
            <TableCell>{grade.disciplineName}</TableCell>
            {grade.examsDates.map((exams, i) => (
              <TableCell
                key={`${grade.cod}-${exams?.title || i}`}
                className="text-center"
              >
                <div className="flex flex-col gap-2 items-center">
                  <Grade grade={exams?.grade || 0} />

                  {exams?.startsAt && (
                    <time dateTime={exams.startsAt} className="text-xs">
                      {dateFormat(exams.startsAt)}
                    </time>
                  )}
                </div>
              </TableCell>
            ))}
            <TableCell className="text-center">
              <Grade grade={grade.averageGrade} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

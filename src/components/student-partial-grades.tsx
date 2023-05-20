import { notFound } from 'next/navigation';

import { getCurrentUser } from '~/lib/session';
import { getStudentPartialGrades } from '~/lib/student';
import { cn } from '~/lib/utils';

import * as Table from './ui/table';

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
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.Column>Sigla</Table.Column>
          <Table.Column>Disciplina</Table.Column>
          <Table.Column>P1</Table.Column>
          <Table.Column>P2</Table.Column>
          <Table.Column>P3</Table.Column>
          <Table.Column>Média</Table.Column>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {sortedExamsGrades.map((grade, i) => (
          <Table.Row
            key={grade.cod}
            className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Data className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
              {grade.cod}
            </Table.Data>
            <Table.Data>{grade.disciplineName}</Table.Data>
            {grade.examsDates.map((exams) => (
              <Table.Data key={`${grade.cod}-${exams?.title}`}>
                {exams?.grade}
              </Table.Data>
            ))}
            <Table.Data>
              <span
                className={cn('rounded-full px-3 py-1', {
                  'bg-green-50 text-green-600': grade.averageGrade >= 6,
                  'bg-red-50 text-red-600': grade.averageGrade < 6,
                })}
              >
                {grade.averageGrade}
              </span>
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

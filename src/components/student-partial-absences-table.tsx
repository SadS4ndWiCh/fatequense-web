import { notFound } from 'next/navigation';

import { getCurrentUser } from '~/lib/session';
import { getStudentPartialAbsences } from '~/lib/student';

import * as Table from './ui/table';

export async function StudentPartialAbsencesTable() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const partialAbsences = (await getStudentPartialAbsences({ user })) ?? [];

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.Column>Sigla</Table.Column>
          <Table.Column>Disciplina</Table.Column>
          <Table.Column>Faltas</Table.Column>
          <Table.Column>Presenças</Table.Column>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {partialAbsences.map((partialAbsence) => (
          <Table.Row
            key={partialAbsence.cod}
            className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Data className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
              {partialAbsence.cod}
            </Table.Data>
            <Table.Data>{partialAbsence.disciplineName}</Table.Data>
            <Table.Data>{partialAbsence.totalAbsences}</Table.Data>
            <Table.Data>{partialAbsence.totalPresences}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

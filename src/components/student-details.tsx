import { notFound } from "next/navigation";

import { Award, Rocket, Wine } from "lucide-react";

import { getCurrentUser } from "~/lib/session";
import { getStudentProfile } from "~/lib/student";

import * as DetailCard from "./detail-card";

export async function StudentDetails() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const profile = await getStudentProfile({ user });

  return (
    <section className="flex flex-col gap-6 lg:flex-row">
      <DetailCard.Root>
        <DetailCard.Header>
          <DetailCard.HeaderIcon className="bg-blue-50 dark:bg-blue-500">
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-50" />
          </DetailCard.HeaderIcon>
          <DetailCard.HeaderContent>
            <h2 className="font-medium">Rendimento no curso</h2>
            <p className="text-sm">Média de nota do curso todo</p>
          </DetailCard.HeaderContent>
        </DetailCard.Header>
        <DetailCard.Content>
          <span className="text-lg font-bold">{profile?.averageGrade}</span>
        </DetailCard.Content>
      </DetailCard.Root>
      <DetailCard.Root>
        <DetailCard.Header>
          <DetailCard.HeaderIcon className="bg-green-50 dark:bg-green-500">
            <Rocket className="h-5 w-5 text-green-600 dark:text-green-50" />
          </DetailCard.HeaderIcon>
          <DetailCard.HeaderContent>
            <h2 className="font-medium">Progressão do curso</h2>
            <p className="text-sm">Porcentagem de conclusão do curso</p>
          </DetailCard.HeaderContent>
        </DetailCard.Header>

        <DetailCard.Content>
          <span className="text-lg font-bold">
            {profile?.progression ?? 0}%
          </span>
        </DetailCard.Content>
      </DetailCard.Root>
      <DetailCard.Root>
        <DetailCard.Header>
          <DetailCard.HeaderIcon className="bg-fuchsia-50 dark:bg-fuchsia-500">
            <Wine className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-50" />
          </DetailCard.HeaderIcon>
          <DetailCard.HeaderContent>
            <h2 className="font-medium">Cursados</h2>
            <p className="text-sm">Semestres efetivamente cursados</p>
          </DetailCard.HeaderContent>
        </DetailCard.Header>

        <DetailCard.Content>
          <span className="text-lg font-bold">
            {profile?.college.currentSemester - 1}
          </span>
        </DetailCard.Content>
      </DetailCard.Root>
    </section>
  );
}

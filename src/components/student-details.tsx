import { notFound } from "next/navigation";
import { Award, Rocket, Wine } from "lucide-react";

import { getCurrentUser } from "~/lib/session";
import { getStudentProfile } from "~/lib/student";

export async function StudentDetails() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const profile = await getStudentProfile({ user });

  return (
    <section className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="h-fit w-fit rounded-md bg-blue-50 p-4">
            <Award className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-medium">Rendimento no curso</h2>
            <p className="text-sm">Média de nota do curso todo</p>
          </div>
        </div>

        <span className="text-lg font-bold">{profile?.averageGrade}</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="h-fit w-fit rounded-md bg-green-50 p-4">
            <Rocket className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h2 className="font-medium">Progressão do curso</h2>
            <p className="text-sm">Porcentagem de conclusão do curso</p>
          </div>
        </div>

        <span className="text-lg font-bold">{profile?.progression ?? 0}%</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="h-fit w-fit rounded-md bg-fuchsia-50 p-4">
            <Wine className="h-5 w-5 text-fuchsia-600" />
          </div>
          <div>
            <h2 className="font-medium">Cursados</h2>
            <p className="text-sm">Semestres efetivamente cursados</p>
          </div>
        </div>

        <span className="text-lg font-bold">
          {profile?.college.currentSemester}
        </span>
      </div>
    </section>
  );
}

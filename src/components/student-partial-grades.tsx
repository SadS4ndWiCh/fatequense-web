import { notFound } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { GradeCard } from "./grade-card";
import { getStudentPartialGrades } from "~/lib/student";

export async function StudentPartialGrades() {
  const user = await getCurrentUser();
  if (!user) notFound();

  const partialGrades = (await getStudentPartialGrades({ user })) ?? [];

  return (
    <div className="grid grid-cols-4 gap-2">
      {partialGrades.map((grade) => (
        <GradeCard key={`${grade.cod}`} data={grade} />
      ))}
    </div>
  );
}

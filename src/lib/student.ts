import { Session } from "next-auth";
import { historySchema } from "./validators/history";
import { partialAbsencesSchema } from "./validators/partial-absences";
import { partialGradesSchema } from "./validators/partial-grades";
import { profileSchema } from "./validators/profile";
import { schedulesSchema } from "./validators/schedule";

type Props = {
  user: Session["user"];
};

export async function getStudentProfile({ user }: Props) {
  const profileResponse = await fetch("http://localhost:3333/student/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  if (!profileResponse.ok) return null;

  const { profile } = await profileResponse.json();

  return profileSchema.parse(profile);
}

export async function getStudentHistory({ user }: Props) {
  const historyResponse = await fetch("http://localhost:3333/student/history", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  if (!historyResponse.ok) return null;

  const { history } = await historyResponse.json();

  return historySchema.parse(history);
}

export async function getStudentSchedules({ user }: Props) {
  const scheduleResponse = await fetch(
    "http://localhost:3333/student/schedule",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }
  );

  if (!scheduleResponse.ok) return null;

  const { schedule } = await scheduleResponse.json();

  return schedulesSchema.parse(schedule);
}

export async function getStudentPartialGrades({ user }: Props) {
  const partialGradeResponse = await fetch(
    "http://localhost:3333/student/partialGrade",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }
  );

  if (!partialGradeResponse.ok) return null;

  const { partialGrade } = await partialGradeResponse.json();

  return partialGradesSchema.parse(partialGrade);
}

export async function getStudentPartialAbsences({ user }: Props) {
  const partialAbsencesResponse = await fetch(
    "http://localhost:3333/student/partialAbsences",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }
  );

  if (!partialAbsencesResponse.ok) return null;

  const { partialAbsences } = await partialAbsencesResponse.json();

  return partialAbsencesSchema.parse(partialAbsences);
}

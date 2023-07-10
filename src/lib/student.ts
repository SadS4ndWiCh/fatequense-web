import { cache } from "react";

import { Session } from "next-auth";

import { StudentEditProfile } from "~/types";
import { api } from "./api";
import {
  studentDisciplineSchema,
} from "./validations/discipline";
import { studentHistorySchema } from "./validations/history";
import { disciplineLessonsSchema, studentPartialAbsencesSchema } from "./validations/partial-absences";
import { studentPartialGradeSchema } from "./validations/partial-grade";
import { editProfileSchema, studentProfileSchema } from "./validations/profile";
import { studentScheduleSchema } from "./validations/schedule";

type Props = {
  user: Session["user"];
};

export const getStudentProfile = cache(async ({ user }: Props) => {
  return await api.get(studentProfileSchema, "/student/profile", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
});

export const getStudentHistory = cache(async ({ user }: Props) => {
  return await api.get(studentHistorySchema, "/student/history", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
});

export const getStudentSchedules = cache(async ({ user }: Props) => {
  return await api.get(studentScheduleSchema, "/student/schedule", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
});

export const getStudentPartialGrades = cache(async ({ user }: Props) => {
  return await api.get(studentPartialGradeSchema, "/student/partial-grade", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
});

export const getStudentPartialAbsences = cache(async ({ user }: Props) => {
  return await api.get(studentPartialAbsencesSchema, "/student/partial-absences", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
});

type EditStudentProfileProps = {
  data: StudentEditProfile;
};

export const editStudentProfile = cache(
  async ({ data }: EditStudentProfileProps) => {
    const parsedData = editProfileSchema.parse(data);

    const res = await fetch('/api/student/edit', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData)
    });

    return res.ok;
  },
);

type GetDisciplineProps = Props & {
  disciplineCode: string;
};

export const getDiscipline = async ({
  user,
  disciplineCode,
}: GetDisciplineProps) => {
  return await api.get(
    studentDisciplineSchema,
    `/student/disciplines/${disciplineCode}`,
    {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    },
  );
};

export const getDisciplineLessons = async ({
  user,
  disciplineCode,
}: GetDisciplineProps) => {
  return await api.get(
    disciplineLessonsSchema,
    `/student/disciplines/${disciplineCode}/lessons`,
    {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    },
  );
};

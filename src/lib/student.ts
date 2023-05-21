import { cache } from "react";

import { Session } from "next-auth";
import { z } from "zod";

import { api } from "./api";
import { historySchema } from "./validators/history";
import { partialAbsencesSchema } from "./validators/partial-absences";
import { partialGradesSchema } from "./validators/partial-grades";
import { profileSchema } from "./validators/profile";
import { ProfileEdit } from "./validators/profile-edit";
import { schedulesSchema } from "./validators/schedule";

type Props = {
  user: Session["user"];
};

const profileResponseSchema = z.object({ profile: profileSchema });
export const getStudentProfile = cache(async ({ user }: Props) => {
  const {
    data: { profile },
  } = await api.get(profileResponseSchema, "/student/profile", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return profile;
});

const historyResponseSchema = z.object({ history: historySchema });
export const getStudentHistory = cache(async ({ user }: Props) => {
  const {
    data: { history },
  } = await api.get(historyResponseSchema, "/student/history", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return history;
});

const scheduleResponseSchema = z.object({ schedule: schedulesSchema });
export const getStudentSchedules = cache(async ({ user }: Props) => {
  const {
    data: { schedule },
  } = await api.get(scheduleResponseSchema, "/student/schedule", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return schedule;
});

const partialGradeResponseSchema = z.object({
  partialGrade: partialGradesSchema,
});
export const getStudentPartialGrades = cache(async ({ user }: Props) => {
  const {
    data: { partialGrade },
  } = await api.get(partialGradeResponseSchema, "/student/partialGrade", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return partialGrade;
});

const partialAbsencesResponseSchema = z.object({
  partialAbsences: partialAbsencesSchema,
});
export const getStudentPartialAbsences = cache(async ({ user }: Props) => {
  const {
    data: { partialAbsences },
  } = await api.get(partialAbsencesResponseSchema, "/student/partialAbsences", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return partialAbsences;
});

type EditStudentProfileProps = Props & {
  data: ProfileEdit;
};

export const editStudentProfile = cache(
  async ({ user, data }: EditStudentProfileProps) => {
    const { res } = await api.patch(z.any(), "/student/profile/edit", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
      data,
    });

    return res.ok;
  },
);

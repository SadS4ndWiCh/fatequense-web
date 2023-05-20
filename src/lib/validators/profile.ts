import { z } from 'zod';

export const collegeSchema = z.object({
  name: z.string(),
  courseName: z.string(),
  currentSemester: z.number(),
  coursePeriod: z.string(),
  state: z.string(),
});

export const profileSchema = z.object({
  name: z.string(),
  ra: z.string(),
  personalEmail: z.string(),
  institutionalEmail: z.string(),
  birthday: z.string(),
  averageGrade: z.number(),
  progression: z.number(),
  photoUrl: z.string().url(),
  college: collegeSchema,
});

export type College = z.infer<typeof collegeSchema>;
export type Profile = z.infer<typeof profileSchema>;

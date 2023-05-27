import { z } from "zod";

export const examSchema = z.object({
  title: z.string(),
  startsAt: z.string().datetime().nullish(),
  grade: z.number(),
});

export const gradeSchema = z.object({
  cod: z.string(),
  disciplineName: z.string(),
  averageGrade: z.number(),
  examsDates: z.array(examSchema),
});

export const partialGradesSchema = z.array(gradeSchema);

export type Exam = z.infer<typeof examSchema>;
export type Grade = z.infer<typeof gradeSchema>;
export type PartialGrades = z.infer<typeof partialGradesSchema>;

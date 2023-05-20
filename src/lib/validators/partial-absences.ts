import { z } from 'zod';

export const lessonSchema = z.object({
  title: z.string(),
  date: z.string().nullish(),
  presences: z.number(),
  absences: z.number(),
});

export const partialAbsenceSchema = z.object({
  cod: z.string(),
  disciplineName: z.string(),
  totalPresences: z.number(),
  totalAbsences: z.number(),
  lessons: z.array(lessonSchema).nullish(),
});

export const partialAbsencesSchema = z.array(partialAbsenceSchema);

export type Lesson = z.infer<typeof lessonSchema>;
export type PartialAbsence = z.infer<typeof partialAbsenceSchema>;
export type PartialAbsences = z.infer<typeof partialAbsencesSchema>;

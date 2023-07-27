import { z } from 'zod'

export const disciplineLessonsSchema = z.array(
  z.object({
    title: z.string(),
    date: z.string().nullable(),
    presences: z.number(),
    absences: z.number(),
  }),
)

export const studentPartialAbsencesSchema = z.array(
  z.object({
    cod: z.string().length(6),
    disciplineName: z.string().min(1),
    totalPresences: z.number(),
    totalAbsences: z.number(),
    lessons: disciplineLessonsSchema,
  }),
)

export type PartialAbsences = z.infer<typeof studentPartialAbsencesSchema>

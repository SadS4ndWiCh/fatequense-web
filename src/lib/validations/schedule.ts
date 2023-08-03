import { z } from 'zod'

import { studentDisciplineSchema } from './discipline'

export const scheduleLessonSchema = z.object({
  cod: z.string().length(6),
  discipline: studentDisciplineSchema.optional(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
})
export type ScheduleLesson = z.infer<typeof scheduleLessonSchema>

export const studentScheduleSchema = z.array(z.array(scheduleLessonSchema))
export type Schedule = z.infer<typeof studentScheduleSchema>

import { z } from 'zod'

import { studentDisciplineSchema } from './discipline'

export const scheduleLesson = z.object({
  cod: z.string().length(6),
  discipline: studentDisciplineSchema.optional(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
})

export const studentScheduleSchema = z.array(z.array(scheduleLesson))

export type Schedule = z.infer<typeof studentScheduleSchema>

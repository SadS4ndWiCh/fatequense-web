import { z } from 'zod'

export const scheduleLesson = z.object({
  cod: z.string().length(6),
  discipline: z
    .object({
      name: z.string().min(1),
      hoursPerLesson: z.number(),
      teacherName: z.string().min(1),
    })
    .optional(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
})

export const studentScheduleSchema = z.array(z.array(scheduleLesson))

export type Schedule = z.infer<typeof studentScheduleSchema>

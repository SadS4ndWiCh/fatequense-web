import { z } from "zod";

export const disciplineSchema = z.object({
  name: z.string(),
  hoursPerLesson: z.number(),
  teacherName: z.string(),
});

export const lessonSchema = z.object({
  cod: z.string(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  discipline: disciplineSchema,
});

export const scheduleSchema = z.array(lessonSchema);
export const schedulesSchema = z.array(scheduleSchema);

export type Discipline = z.infer<typeof disciplineSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
export type Schedules = z.infer<typeof schedulesSchema>;

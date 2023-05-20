import { z } from 'zod';

export const disciplineHistorySchema = z.object({
  cod: z.string(),
  disciplineName: z.string(),
  description: z.string(),
  finalGrade: z.number(),
  presenceFrequency: z.number(),
  renunciationAt: z.string().datetime().nullish(),
  isApproved: z.boolean(),
});

export const historySchema = z.array(disciplineHistorySchema);

export type DisciplineHistory = z.infer<typeof disciplineHistorySchema>;
export type History = z.infer<typeof historySchema>;

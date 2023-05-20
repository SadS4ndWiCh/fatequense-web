import { z } from 'zod';

export const profileEditSchema = z.object({
  photoUrl: z
    .string()
    .url('Insira uma URL válida')
    .nonempty('A URL de uma foto deve ser preenchida'),
});

export type ProfileEdit = z.infer<typeof profileEditSchema>;

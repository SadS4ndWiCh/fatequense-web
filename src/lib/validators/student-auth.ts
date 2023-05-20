import { z } from 'zod';

export const studentAuthSchema = z.object({
  username: z.string().nonempty('O usuário deve ser preenchido.'),
  password: z.string().nonempty('A senha deve ser preenchida.'),
});

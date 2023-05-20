'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { editStudentProfile } from '~/lib/student';
import { profileEditSchema } from '~/lib/validators/profile-edit';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';

type FormData = z.infer<typeof profileEditSchema>;

type Props = {
  user: Session['user'];
};

export function EditProfileForm({ user }: Props) {
  const router = useRouter();
  const { update: updateSession } = useSession();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      photoUrl: user.picture,
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);

    const success = await editStudentProfile({ user, data });

    setLoading(false);

    await updateSession({ picture: data.photoUrl });

    if (!success) {
      return toast({
        title: 'Ocorreu algum problema.',
        description:
          'Não foi possível editar o perfil por decorrência de algum problema.',
        variant: 'destructive',
      });
    }

    toast({
      description: 'Perfil atualizado com sucesso!',
    });

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="photoUrl">URL da Foto</Label>
          <Input
            id="photoUrl"
            placeholder="Usuário"
            type="url"
            autoCapitalize="none"
            autoCorrect="off"
            className="w-full"
            {...register('photoUrl')}
          />

          {errors?.photoUrl && (
            <p className="px-1 text-xs text-red-600">
              {errors.photoUrl.message}
            </p>
          )}
        </div>

        <Button className="w-full" disabled={loading}>
          Salvar alterações
        </Button>
      </div>
    </form>
  );
}

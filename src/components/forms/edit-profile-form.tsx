'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { type EditProfile, editProfileSchema } from '~/lib/validations/profile'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { toast } from '../ui/use-toast'

type Props = {
  user: Session['user']
}

export function EditProfileForm({ user }: Props) {
  const router = useRouter()
  const { update: updateSession } = useSession()

  const [loading, setLoading] = useState(false)

  const form = useForm<EditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      photoUrl: user.picture,
    },
  })

  async function onSubmit(data: EditProfile) {
    setLoading(true)

    const res = await fetch('/api/student/edit', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (!res.ok) {
      return toast({
        title: 'Ocorreu algum problema.',
        description:
          'Não foi possível editar o perfil por decorrência de algum problema.',
        variant: 'destructive',
      })
    }

    await updateSession({ picture: data.photoUrl })

    toast({
      description: 'Perfil atualizado com sucesso!',
    })

    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="photoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL do Avatar</FormLabel>
              <FormControl>
                <Input
                  placeholder="Usuário"
                  type="url"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription>A URL de alguma imagem</FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6" disabled={loading}>
          {loading && <LoaderIcon className="w-4 h-4 mr-2 animate-spin" />}
          <span>Salvar alterações</span>
        </Button>
      </form>
    </Form>
  )
}

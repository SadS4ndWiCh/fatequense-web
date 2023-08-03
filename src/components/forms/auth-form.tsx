'use client'

import { useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import {
  type LoginAuth,
  studentAuthSchema,
} from '~/lib/validations/student-auth'

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

export function AuthForm() {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const form = useForm<LoginAuth>({
    resolver: zodResolver(studentAuthSchema),
  })

  async function onSubmit(data: LoginAuth) {
    setLoading(true)

    const signInResult = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/aluno',
    })

    if (!signInResult?.ok) {
      setLoading(false)

      return toast({
        title: 'Alguma coisa deu errado!',
        description: 'Não foi possível realizar o login. Tente novamente',
        variant: 'destructive',
      })
    }

    router.replace(searchParams?.get('from') || '/aluno')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-[400px]"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Usuário"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Seu usuário no SIGA, geralmente sendo seu CPF
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>Sua senha super segura</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={loading} className="w-full mt-6">
          {loading && <LoaderIcon className="mr-2 w-4 h-4 animate-spin" />}
          <span>Entrar com o SIGA</span>
        </Button>
      </form>
    </Form>
  )
}

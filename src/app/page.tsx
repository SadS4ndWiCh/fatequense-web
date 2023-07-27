import Link from 'next/link'

import { AlertCircle, Github, GraduationCap, User } from 'lucide-react'

import { siteConfig } from '~/config/site'

import { cn } from '~/lib/utils'

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { buttonVariants } from '~/components/ui/button'

import { ThemeToggle } from '~/components/theme-toggle'

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen max-w-lg place-content-center space-y-6 p-4 md:p-0">
      <section className="">
        <div className="mb-4 w-fit rounded-md bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-50 p-4">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="mb-4 space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-b from-red-50 to-red-600 bg-clip-text text-transparent">
            Fatequense
          </h1>
          <p className="text-lg">
            Uma plataforma para visualizar os dados de estudante dos alunos da
            fatec, feita com carinho de fatequense para fatequenses.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <Link
            href="/login"
            className={cn('w-full md:w-fit', buttonVariants())}
          >
            <User className="mr-2 h-5 w-5" />
            <span>Entrar como estudante</span>
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferer noreferrer"
            className={cn(
              'w-full md:w-fit',
              buttonVariants({ variant: 'outline' }),
            )}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <Alert>
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Atenção!</AlertTitle>
          <AlertDescription>
            O site pode parar a qualquer momento dependendo das atualizações no
            SIGA,{' '}
            <em className="line-through">mesmo que possívelmente não haverá</em>
            , mas farei o possível para atualizar o mais rápido possível
          </AlertDescription>
        </Alert>
      </section>

      <ThemeToggle />
    </main>
  )
}

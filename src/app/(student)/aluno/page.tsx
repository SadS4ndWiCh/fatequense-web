import { notFound } from 'next/navigation'

import { getCurrentUser } from '~/lib/session'

import { ScrollArea } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'

import { StudentSummary } from '~/components/student/student-summary'
import { StudentTodaySchedule } from '~/components/student/student-today-schedule'

export const metadata = {
  title: 'Home',
}

export default async function Student() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const name = user.name.split(' ').slice(0, 2).join(' ')

  return (
    <div className="grid grid-cols-1 h-full lg:grid-cols-[1fr_min-content_min-content] lg:gap-3">
      <section className="flex-1 space-y-6">
        <div className="rounded-md bg-red-50 p-8 border-2 border-transparent dark:border-red-500 dark:bg-transparent">
          <small className="text-sm text-red-600 dark:text-red-500">
            Bem vindo,
          </small>
          <h1 className="text-3xl font-bold">{name}!</h1>
          <p className="mt-2">
            Todas suas informações do siga mais relevantes serão atualizadas
            aqui
          </p>
        </div>

        <StudentSummary />
      </section>

      <Separator className="hidden lg:inline-block" orientation="vertical" />

      <ScrollArea className="hidden lg:block lg:max-h-[calc(100vh-3rem)]">
        <section className="h-full space-y-2 md:pl-6">
          <h2 className="text-lg font-bold">Aulas de Hoje</h2>

          <StudentTodaySchedule />
        </section>
      </ScrollArea>
    </div>
  )
}

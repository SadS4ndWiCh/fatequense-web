import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentSchedules } from '~/lib/student'

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'

import { MobileStudentSchedule } from '~/components/student/mobile-student-schedule'
import { StudentScheduleCalendar } from '~/components/student/student-schedule-calendar'

export const metadata = {
  title: 'Horários',
}

export default async function Horary() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const schedules = (await getStudentSchedules(user.accessToken)) ?? []
  const isSchedulesEmpty = schedules.every((day) => day.length === 0)

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Horários</h1>
        <p>Veja os horários das aulas da semana.</p>
      </header>

      <section className="mt-6">
        {isSchedulesEmpty ? (
          <div className="max-w-lg mx-auto">
            <div className="my-4 text-center">
              <h2 className="font-semibold text-xl">
                Horários não encontrados
              </h2>
              <p>
                Aparentemente você está em férias ou ainda não se matriculou nas
                matérias!
              </p>
            </div>

            <Alert>
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="text-sm">Atenção</AlertTitle>
              <AlertDescription>
                <p>
                  Caso não tenha seja nenhuma das opções acima, lembre-se que
                  esse site pode apresentar problemas a qualquer momento, mas
                  estaremos tentando resolver o mais rápido possível
                </p>
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <>
            <MobileStudentSchedule schedules={schedules} />
            <StudentScheduleCalendar schedules={schedules} />
          </>
        )}
      </section>
    </div>
  )
}

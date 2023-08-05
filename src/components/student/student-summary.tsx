import { notFound } from 'next/navigation'

import { Award, Rocket, Wine } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { getStudentProfile } from '~/lib/student'

export async function StudentSummary() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const profile = await getStudentProfile(user.accessToken)

  return (
    <section className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full gap-2">
          <div className="h-fit w-fit rounded-md p-4 bg-blue-50 dark:bg-blue-500">
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-50" />
          </div>

          <div>
            <h2 className="font-medium">Rendimento no curso</h2>
            <p className="text-sm">Média de nota do curso todo</p>
          </div>
        </div>

        <div>
          <span className="text-lg font-bold">{profile?.averageGrade}</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full gap-2">
          <div className="h-fit w-fit rounded-md p-4 bg-green-50 dark:bg-green-500">
            <Rocket className="h-5 w-5 text-green-600 dark:text-green-50" />
          </div>

          <div>
            <h2 className="font-medium">Progressão do curso</h2>
            <p className="text-sm">Porcentagem de conclusão do curso</p>
          </div>
        </div>

        <div>
          <span className="text-lg font-bold">
            {profile?.progression ?? 0}%
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full gap-2">
          <div className="h-fit w-fit rounded-md p-4 bg-fuchsia-50 dark:bg-fuchsia-500">
            <Wine className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-50" />
          </div>

          <div>
            <h2 className="font-medium">Cursados</h2>
            <p className="text-sm">Semestres efetivamente cursados</p>
          </div>
        </div>

        <div>
          <span className="text-lg font-bold">
            {profile?.college.currentSemester - 1}
          </span>
        </div>
      </div>
    </section>
  )
}

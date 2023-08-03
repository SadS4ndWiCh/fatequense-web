import { notFound } from 'next/navigation'

import { getCurrentUser } from '~/lib/session'
import { getStudentSchoolGrade } from '~/lib/student'

import { StudentSchoolGrade } from '~/components/student/student-school-grade'

export default async function HistoryGrade() {
  const user = await getCurrentUser()
  if (!user) notFound()

  const schoolGrade = await getStudentSchoolGrade({ user })

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Histórico em Grade</h1>
        <p>Veja seu histórico escolar de todos semestres em grade</p>
      </header>

      <section className="mt-6">
        <StudentSchoolGrade schoolGrade={schoolGrade} />
      </section>
    </div>
  )
}

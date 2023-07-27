import { StudentHistory } from '~/components/student/student-history'

export const metadata = {
  title: 'Histórico',
}

export default async function History() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Histórico</h1>
        <p>Veja seu histórico escolar</p>
      </header>

      <section className="mt-8">
        <StudentHistory />
      </section>
    </div>
  )
}

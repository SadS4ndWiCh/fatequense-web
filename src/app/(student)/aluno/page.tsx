import { StudentDetails } from "~/components/student-details";
import { StudentTodaySchedule } from "~/components/student-today-schedule";

export default function Student() {
  return (
    <div className="flex gap-6 h-full divide-x">
      <section className="flex-1 space-y-6">
        <header className="relative p-8 rounded-md bg-red-50">
          <small className="text-sm text-red-600">Bem vindo,</small>
          <h1 className="text-3xl font-bold">Caio Vinícius!</h1>
          <p className="mt-2">
            Todas suas inforamções do siga mais relevantes serão atualizadas
            aqui
          </p>
        </header>

        <StudentDetails />
      </section>
      <section className="h-full pl-6">
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Aulas de Hoje</h2>

          <StudentTodaySchedule />
        </div>
      </section>
    </div>
  );
}

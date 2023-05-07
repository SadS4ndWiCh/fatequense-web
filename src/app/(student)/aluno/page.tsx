import { StudentDetails } from "~/components/student-details";
import { StudentTodaySchedule } from "~/components/student-today-schedule";

export const metadata = {
  title: "Home",
};

export default function Student() {
  return (
    <div className="flex h-full gap-6 divide-x">
      <section className="flex-1 space-y-6">
        <header className="relative rounded-md bg-red-50 p-8">
          <small className="text-sm text-red-600">Bem vindo,</small>
          <h1 className="text-3xl font-bold">Caio Vinícius!</h1>
          <p className="mt-2">
            Todas suas inforamções do siga mais relevantes serão atualizadas
            aqui
          </p>
        </header>

        {/* @ts-expect-error Async Server Component */}
        <StudentDetails />
      </section>
      <section className="h-full pl-6">
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Aulas de Hoje</h2>

          {/* @ts-expect-error Async Server Component */}
          <StudentTodaySchedule />
        </div>
      </section>
    </div>
  );
}

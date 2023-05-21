import { StudentScheduleTable } from "~/components/student-schedule-table";

export const metadata = {
  title: "Horários",
};

export default async function Horary() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Horários</h1>
        <p>Veja os horários das aulas da semana.</p>
      </header>

      <section className="mt-6">
        {/* @ts-expect-error Async Server Component */}
        <StudentScheduleTable />
      </section>
    </div>
  );
}

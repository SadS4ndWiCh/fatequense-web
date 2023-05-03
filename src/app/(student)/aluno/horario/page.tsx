import { StudentScheduleTable } from "~/components/student-schedule-table";

export default function Horary() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Horários</h1>
        <p>Veja os horários das aulas da semana.</p>
      </header>

      <section className="mt-6">
        <StudentScheduleTable />
      </section>
    </div>
  );
}

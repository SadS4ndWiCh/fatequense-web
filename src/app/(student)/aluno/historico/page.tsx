import { StudentHistoryTable } from "~/components/student-history-table";

export default function History() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Histórico</h1>
        <p>Veja seu histórico escolar</p>
      </header>

      <section className="mt-8">
        <StudentHistoryTable />
      </section>
    </div>
  );
}

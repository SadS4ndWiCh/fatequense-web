import { StudentPartialAbsencesTable } from "~/components/student-partial-absences-table";

export const metadata = {
  title: "Faltas Parciais",
};

export default function PartialAbsences() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Faltas Parciais</h1>
        <p>Veja suas faltas nas matérias</p>
      </header>

      <section className="mt-8">
        {/* @ts-expect-error Async Server Component */}
        <StudentPartialAbsencesTable />
      </section>
    </div>
  );
}

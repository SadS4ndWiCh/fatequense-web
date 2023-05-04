import { StudentPartialGrades } from "~/components/student-partial-grades";

export default function PartialGrade() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Notas Parciais</h1>
        <p>Veja suas notas nas matérias</p>
      </header>

      <section className="mt-8">
        <StudentPartialGrades />
      </section>
    </div>
  );
}

import { IntroductionHeader } from "~/components/introduction-header";
import { StudentDetails } from "~/components/student-details";
import { StudentTodaySchedule } from "~/components/student-today-schedule";

export const metadata = {
  title: "Home",
};

export default function Student() {
  return (
    <div className="flex h-full flex-col gap-6 md:flex-row md:divide-x">
      <section className="flex-1 space-y-6">
        <IntroductionHeader />

        <StudentDetails />
      </section>
      <section className="h-full md:pl-6">
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Aulas de Hoje</h2>

          <StudentTodaySchedule />
        </div>
      </section>
    </div>
  );
}

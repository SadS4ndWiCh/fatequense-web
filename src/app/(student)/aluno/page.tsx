import { IntroductionHeader } from '~/components/introduction-header';
import { StudentDetails } from '~/components/student-details';
import { StudentTodaySchedule } from '~/components/student-today-schedule';

export const metadata = {
  title: 'Home',
};

export default function Student() {
  return (
    <div className="flex h-full gap-6 divide-x">
      <section className="flex-1 space-y-6">
        {/* @ts-expect-error Async Server Component */}
        <IntroductionHeader />

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

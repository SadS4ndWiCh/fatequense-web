import { Grade } from "~/lib/validators/partial-grades";

type Props = {
  data: Grade;
};

export function GradeCard({ data }: Props) {
  return (
    <article className="relative mb-6 max-w-[230px] rounded-md p-4 shadow">
      <header className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-10 w-10 place-content-center rounded-md bg-zinc-900 p-2 text-white">
          <span className="font-bold">{data.averageGrade}</span>
        </div>
      </header>

      <div className="my-4 text-center">
        <span className="text-sm">{data.cod}</span>
        <h4 className="truncate font-bold">{data.disciplineName}</h4>
      </div>

      <footer className="flex items-center gap-2">
        {data.examsDates.map((exam) => (
          <div
            key={`${data.cod}-${exam.startsAt}`}
            className="relative grid h-10 min-w-[40px] flex-1 place-content-center rounded-md bg-zinc-50 p-2 text-zinc-900"
          >
            <p className="font-bold">{exam.grade}</p>
            <span className="absolute bottom-0 left-1/2 inline-block -translate-x-1/2 translate-y-3 rounded-sm bg-zinc-700 px-2 py-1 text-xs leading-none text-white">
              {exam.title}
            </span>
          </div>
        ))}
      </footer>
    </article>
  );
}

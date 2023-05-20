import { Grade } from '~/lib/validators/partial-grades';

type Props = {
  data: Grade;
};

export function GradeCard({ data }: Props) {
  return (
    <article className="relative max-w-[230px] p-4 mb-6 rounded-md shadow">
      <header className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid place-content-center w-10 h-10 p-2 rounded-md bg-zinc-900 text-white">
          <span className="font-bold">{data.averageGrade}</span>
        </div>
      </header>

      <div className="my-4 text-center">
        <span className="text-sm">{data.cod}</span>
        <h4 className="font-bold truncate">{data.disciplineName}</h4>
      </div>

      <footer className="flex items-center gap-2">
        {data.examsDates.map((exam) => (
          <div
            key={`${data.cod}-${exam.startsAt}`}
            className="relative grid place-content-center flex-1 min-w-[40px] h-10 p-2 rounded-md bg-zinc-50 text-zinc-900"
          >
            <p className="font-bold">{exam.grade}</p>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 inline-block px-2 py-1 rounded-sm bg-zinc-700 text-white leading-none text-xs">
              {exam.title}
            </span>
          </div>
        ))}
      </footer>
    </article>
  );
}

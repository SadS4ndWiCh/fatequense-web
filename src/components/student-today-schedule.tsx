const todaySchedules = [
  {
    startsAt: "7:40",
    discipline: {
      cod: "IES005",
      name: "Engenharia de Software",
    },
  },
  {
    startsAt: "9:30",
    discipline: {
      cod: "LIP004",
      name: "Linguagem de Programação Web",
    },
  },
  {
    startsAt: "11:10",
    discipline: {
      cod: "LIP004",
      name: "Linguagem de Programação Web",
    },
  },
];

export function StudentTodaySchedule() {
  return (
    <div>
      <ul>
        {todaySchedules.map((schedule) => (
          <li
            key={schedule.startsAt}
            className="relative max-w-[280px] pl-6 pb-4 border-l border-l-zinc-300 before:absolute before:content-[''] before:top-0 before:left-0 before:w-3 before:h-3 before:bg-zinc-300 before:-translate-x-1/2 before:rounded-full"
          >
            <time dateTime="01/05/2023 7:40" className="text-sm">
              às {schedule.startsAt}
            </time>
            <div className="mt-2 p-4 rounded-md bg-zinc-50">
              <span className="text-sm">{schedule.discipline.cod}</span>
              <p className="truncate">{schedule.discipline.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { tabulateSchedule } from "~/lib/utils";
import { DisciplineHoverCard } from "./discipline-hover-card";

const schedules = [
  [
    {
      cod: "IES300",
      startsAt: "2023-04-24T10:40:00.000Z",
      endsAt: "2023-04-24T11:30:00.000Z",
      discipline: {
        name: "Engenharia de Software III",
        hoursPerLesson: 4,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
    {
      cod: "IES300",
      startsAt: "2023-04-24T11:30:00.000Z",
      endsAt: "2023-04-24T12:20:00.000Z",
      discipline: {
        name: "Engenharia de Software III",
        hoursPerLesson: 4,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
    {
      cod: "ISO200",
      startsAt: "2023-04-24T12:30:00.000Z",
      endsAt: "2023-04-24T13:20:00.000Z",
      discipline: {
        name: "Sistemas Operacionais II",
        hoursPerLesson: 4,
        teacherName: "ELIANE VENDRAMINI DE OLIVEIRA",
      },
    },
    {
      cod: "ISO200",
      startsAt: "2023-04-24T13:20:00.000Z",
      endsAt: "2023-04-24T14:10:00.000Z",
      discipline: {
        name: "Sistemas Operacionais II",
        hoursPerLesson: 4,
        teacherName: "ELIANE VENDRAMINI DE OLIVEIRA",
      },
    },
    {
      cod: "ISO200",
      startsAt: "2023-04-24T14:10:00.000Z",
      endsAt: "2023-04-24T15:00:00.000Z",
      discipline: {
        name: "Sistemas Operacionais II",
        hoursPerLesson: 4,
        teacherName: "ELIANE VENDRAMINI DE OLIVEIRA",
      },
    },
    {
      cod: "ISO200",
      startsAt: "2023-04-24T15:00:00.000Z",
      endsAt: "2023-04-24T15:50:00.000Z",
      discipline: {
        name: "Sistemas Operacionais II",
        hoursPerLesson: 4,
        teacherName: "ELIANE VENDRAMINI DE OLIVEIRA",
      },
    },
  ],
  [
    {
      cod: "IBD002",
      startsAt: "2023-04-25T12:30:00.000Z",
      endsAt: "2023-04-25T13:20:00.000Z",
      discipline: {
        name: "Banco de Dados",
        hoursPerLesson: 4,
        teacherName: "MARCELO BUSCIOLI TENORIO",
      },
    },
    {
      cod: "IBD002",
      startsAt: "2023-04-25T13:20:00.000Z",
      endsAt: "2023-04-25T14:10:00.000Z",
      discipline: {
        name: "Banco de Dados",
        hoursPerLesson: 4,
        teacherName: "MARCELO BUSCIOLI TENORIO",
      },
    },
    {
      cod: "IBD002",
      startsAt: "2023-04-25T14:10:00.000Z",
      endsAt: "2023-04-25T15:00:00.000Z",
      discipline: {
        name: "Banco de Dados",
        hoursPerLesson: 4,
        teacherName: "MARCELO BUSCIOLI TENORIO",
      },
    },
    {
      cod: "IBD002",
      startsAt: "2023-04-25T15:00:00.000Z",
      endsAt: "2023-04-25T15:50:00.000Z",
      discipline: {
        name: "Banco de Dados",
        hoursPerLesson: 4,
        teacherName: "MARCELO BUSCIOLI TENORIO",
      },
    },
  ],
  [
    {
      cod: "IES300",
      startsAt: "2023-04-26T10:40:00.000Z",
      endsAt: "2023-04-26T11:30:00.000Z",
      discipline: {
        name: "Engenharia de Software III",
        hoursPerLesson: 4,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
    {
      cod: "IES300",
      startsAt: "2023-04-26T11:30:00.000Z",
      endsAt: "2023-04-26T12:20:00.000Z",
      discipline: {
        name: "Engenharia de Software III",
        hoursPerLesson: 4,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
    {
      cod: "TTG001",
      startsAt: "2023-04-26T12:30:00.000Z",
      endsAt: "2023-04-26T13:20:00.000Z",
      discipline: {
        name: "Metodologia da Pesquisa Científico-Tecnológica",
        hoursPerLesson: 2,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
    {
      cod: "TTG001",
      startsAt: "2023-04-26T13:20:00.000Z",
      endsAt: "2023-04-26T14:10:00.000Z",
      discipline: {
        name: "Metodologia da Pesquisa Científico-Tecnológica",
        hoursPerLesson: 2,
        teacherName: "ÁLVARO FERRAZ D'ARCE",
      },
    },
  ],
  [
    {
      cod: "ILP540",
      startsAt: "2023-04-20T12:30:00.000Z",
      endsAt: "2023-04-20T13:20:00.000Z",
      discipline: {
        name: "Eletiva - Linguagem de Programação IV - INTERNET",
        hoursPerLesson: 4,
        teacherName: "BRUNO SANTOS DE LIMA",
      },
    },
    {
      cod: "ILP540",
      startsAt: "2023-04-20T13:20:00.000Z",
      endsAt: "2023-04-20T14:10:00.000Z",
      discipline: {
        name: "Eletiva - Linguagem de Programação IV - INTERNET",
        hoursPerLesson: 4,
        teacherName: "BRUNO SANTOS DE LIMA",
      },
    },
    {
      cod: "ILP540",
      startsAt: "2023-04-20T14:10:00.000Z",
      endsAt: "2023-04-20T15:00:00.000Z",
      discipline: {
        name: "Eletiva - Linguagem de Programação IV - INTERNET",
        hoursPerLesson: 4,
        teacherName: "BRUNO SANTOS DE LIMA",
      },
    },
    {
      cod: "ILP540",
      startsAt: "2023-04-20T15:00:00.000Z",
      endsAt: "2023-04-20T15:50:00.000Z",
      discipline: {
        name: "Eletiva - Linguagem de Programação IV - INTERNET",
        hoursPerLesson: 4,
        teacherName: "BRUNO SANTOS DE LIMA",
      },
    },
  ],
  [
    {
      cod: "ILP007",
      startsAt: "2023-04-21T10:40:00.000Z",
      endsAt: "2023-04-21T11:30:00.000Z",
      discipline: {
        name: "Programação Orientada a Objetos",
        hoursPerLesson: 4,
        teacherName: "GIOVANA ANGÉLICA ROS MIOLA",
      },
    },
    {
      cod: "ILP007",
      startsAt: "2023-04-21T11:30:00.000Z",
      endsAt: "2023-04-21T12:20:00.000Z",
      discipline: {
        name: "Programação Orientada a Objetos",
        hoursPerLesson: 4,
        teacherName: "GIOVANA ANGÉLICA ROS MIOLA",
      },
    },
    {
      cod: "ILP007",
      startsAt: "2023-04-21T12:30:00.000Z",
      endsAt: "2023-04-21T13:20:00.000Z",
      discipline: {
        name: "Programação Orientada a Objetos",
        hoursPerLesson: 4,
        teacherName: "GIOVANA ANGÉLICA ROS MIOLA",
      },
    },
    {
      cod: "ILP007",
      startsAt: "2023-04-21T13:20:00.000Z",
      endsAt: "2023-04-21T14:10:00.000Z",
      discipline: {
        name: "Programação Orientada a Objetos",
        hoursPerLesson: 4,
        teacherName: "GIOVANA ANGÉLICA ROS MIOLA",
      },
    },
    {
      cod: "LIN400",
      startsAt: "2023-04-21T14:10:00.000Z",
      endsAt: "2023-04-21T15:00:00.000Z",
      discipline: {
        name: "Inglês IV",
        hoursPerLesson: 2,
        teacherName: "LUCIANE CACHEFO RIBEIRO",
      },
    },
    {
      cod: "LIN400",
      startsAt: "2023-04-21T15:00:00.000Z",
      endsAt: "2023-04-21T15:50:00.000Z",
      discipline: {
        name: "Inglês IV",
        hoursPerLesson: 2,
        teacherName: "LUCIANE CACHEFO RIBEIRO",
      },
    },
  ],
  [],
];

const WEEKDAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export function StudentScheduleTable() {
  const tabulatedSchedule = tabulateSchedule(schedules);

  return (
    <div className="w-full relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3"></th>

            {WEEKDAYS.map((weekday) => (
              <th key={weekday} className="px-6 py-3">
                {weekday}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tabulatedSchedule &&
            Array.from(tabulatedSchedule).map((horary, y) => (
              <tr
                key={`${horary[0]}-${y}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {horary[0]}
                </td>

                {Array.from({ length: 6 }, (_, x) => (
                  <td key={`${horary[0]}-${x}${y}`} className="px-6 py-4">
                    {/* {horary[1][x]?.cod} */}
                    {/* {horary[1].find((lesson) => lesson.weekday - 1 === x)?.cod} */}
                    <DisciplineHoverCard
                      lesson={horary[1].find(
                        (lesson) => lesson.weekday - 1 === x
                      )}
                    />
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

import { PartialGrades } from "~/lib/validators/partial-grades";
import { GradeCard } from "./grade-card";

const partialGrades: PartialGrades = [
  {
    cod: "EDS004",
    disciplineName:
      "Estágio Supervisionado em Análise e Desenvolvimento de Sistemas",
    averageGrade: 0,
    examsDates: [],
  },
  {
    cod: "IBD002",
    disciplineName: "Banco de Dados",
    averageGrade: 5,
    examsDates: [
      {
        title: "N1",
        startsAt: "2023-04-11T12:30:00.000Z",
        grade: 10,
      },
      {
        title: "N2",
        startsAt: "2023-06-13T12:30:00.000Z",
        grade: 0,
      },
      {
        title: "N3",
        startsAt: "2023-06-27T12:30:00.000Z",
        grade: 0,
      },
    ],
  },
  {
    cod: "IES300",
    disciplineName: "Engenharia de Software III",
    averageGrade: 0,
    examsDates: [
      {
        title: "P1",
        startsAt: "2023-04-19T10:40:00.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "2023-06-15T10:40:00.000Z",
        grade: 0,
      },
      {
        title: "P3",
        startsAt: "2023-06-26T10:40:00.000Z",
        grade: 0,
      },
    ],
  },
  {
    cod: "ILP007",
    disciplineName: "Programação Orientada a Objetos",
    averageGrade: 0,
    examsDates: [
      {
        title: "P1",
        startsAt: "2023-04-14T10:40:00.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "2023-06-16T10:40:00.000Z",
        grade: 0,
      },
      {
        title: "P3",
        startsAt: "2023-06-23T10:40:00.000Z",
        grade: 0,
      },
    ],
  },
  {
    cod: "ILP540",
    disciplineName: "Eletiva - Linguagem de Programação IV - INTERNET",
    averageGrade: 0,
    examsDates: [
      {
        title: "P1",
        startsAt: "1899-11-30T03:06:28.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "1899-11-30T03:06:28.000Z",
        grade: 0,
      },
      {
        title: "P3",
        startsAt: "1899-11-30T03:06:28.000Z",
        grade: 0,
      },
    ],
  },
  {
    cod: "ISO200",
    disciplineName: "Sistemas Operacionais II",
    averageGrade: 4.7,
    examsDates: [
      {
        title: "P3",
        startsAt: "2023-06-19T12:30:00.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "2023-06-05T12:30:00.000Z",
        grade: 0,
      },
      {
        title: "P1",
        startsAt: "2023-04-10T12:30:00.000Z",
        grade: 9.5,
      },
    ],
  },
  {
    cod: "LIN400",
    disciplineName: "Inglês IV",
    averageGrade: 0,
    examsDates: [
      {
        title: "P1",
        startsAt: "2023-04-14T14:10:00.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "2023-06-16T14:10:00.000Z",
        grade: 0,
      },
      {
        title: "P3",
        startsAt: "2023-06-23T14:10:00.000Z",
        grade: 0,
      },
    ],
  },
  {
    cod: "TTG001",
    disciplineName: "Metodologia da Pesquisa Científico-Tecnológica",
    averageGrade: 0,
    examsDates: [
      {
        title: "P1",
        startsAt: "2023-04-19T12:30:00.000Z",
        grade: 0,
      },
      {
        title: "P2",
        startsAt: "2023-06-14T12:30:00.000Z",
        grade: 0,
      },
      {
        title: "P3",
        startsAt: "2023-06-28T12:30:00.000Z",
        grade: 0,
      },
    ],
  },
];

export function StudentPartialGrades() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {partialGrades.map((grade) => (
        <GradeCard key={`${grade.cod}`} data={grade} />
      ))}
    </div>
  );
}

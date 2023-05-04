import { Check, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { History } from "~/lib/validators/history";

const disciplineHistories: History = [
  {
    cod: "AAG001",
    disciplineName: "Administração Geral",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 9.5,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "CCG001",
    disciplineName: "Contabilidade",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.2,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "CEF100",
    disciplineName: "Economia e Finanças",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.8,
    presenceFrequency: 0.85,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "EDS004",
    disciplineName:
      "Estágio Supervisionado em Análise e Desenvolvimento de Sistemas",
    description: "Reprovado",
    finalGrade: 0,
    presenceFrequency: 0,
    renunciationAt: null,
    isApproved: false,
  },
  {
    cod: "EDS004",
    disciplineName:
      "Estágio Supervisionado em Análise e Desenvolvimento de Sistemas",
    description: "Em Curso",
    finalGrade: 0,
    presenceFrequency: 0,
    renunciationAt: null,
    isApproved: false,
  },
  {
    cod: "HST002",
    disciplineName: "Sociedade e Tecnologia",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IAC001",
    disciplineName: "Arquitetura e Organização de Computadores",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.5,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IAL002",
    disciplineName: "Algoritmos e Lógica de Programação",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 9.8,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IBD002",
    disciplineName: "Banco de Dados",
    description: "Em Curso",
    finalGrade: 5,
    presenceFrequency: 0,
    renunciationAt: null,
    isApproved: false,
  },
  {
    cod: "IED001",
    disciplineName: "Estruturas de Dados",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 9.7,
    presenceFrequency: 0.97,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IES100",
    disciplineName: "Engenharia de Software I",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.2,
    presenceFrequency: 0.95,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IES200",
    disciplineName: "Engenharia de Software II",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.5,
    presenceFrequency: 0.97,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IES300",
    disciplineName: "Engenharia de Software III",
    description: "Em Curso",
    finalGrade: 0,
    presenceFrequency: 0,
    renunciationAt: null,
    isApproved: false,
  },
  {
    cod: "IHC001",
    disciplineName: "Interação Humano Computador",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 8.7,
    presenceFrequency: 0.95,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "IHW100",
    disciplineName: "Laboratório de Hardware",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 6.1,
    presenceFrequency: 1,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "ILM001",
    disciplineName: "Programação em Microinformática",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 9.7,
    presenceFrequency: 0.95,
    renunciationAt: null,
    isApproved: true,
  },
  {
    cod: "ILP007",
    disciplineName: "Programação Orientada a Objetos",
    description: "Em Curso",
    finalGrade: 0,
    presenceFrequency: 0,
    renunciationAt: null,
    isApproved: false,
  },
  {
    cod: "ILP010",
    disciplineName: "Linguagem de Programação",
    description: "Aprovado por Nota e Frequência",
    finalGrade: 10,
    presenceFrequency: 0.95,
    renunciationAt: null,
    isApproved: true,
  },
];

export function StudentHistoryTable() {
  return (
    <div className="w-full relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Sigla</th>
            <th className="px-6 py-3">Disciplina</th>
            <th className="px-6 py-3">Média Final</th>
            <th className="px-6 py-3">Frequência</th>
            <th className="px-6 py-3">Aprovado</th>
          </tr>
        </thead>

        <tbody>
          {disciplineHistories.map((history) => (
            <tr
              key={history.cod}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {history.cod}
              </td>
              <td className="px-6 py-4">{history.disciplineName}</td>
              <td className="px-6 py-4">{history.finalGrade}</td>
              <td className="px-6 py-4">{history.presenceFrequency * 100}%</td>
              <td className="px-6 py-4">
                <div
                  className={cn(
                    "flex items-center justify-center w-6 h-6 p-1 rounded-full",
                    {
                      "bg-green-50": history.isApproved,
                      "bg-red-50": !history.isApproved,
                    }
                  )}
                >
                  {history.isApproved ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <X className="w-4 h-4 text-red-600" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

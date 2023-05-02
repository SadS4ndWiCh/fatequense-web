import { CalendarDays, Home, Inbox, Puzzle, Star } from "lucide-react";

export const studentConfig = {
  sidebar: [
    {
      href: "/aluno",
      label: "Home",
      icon: Home,
    },
    {
      href: "/aluno/horario",
      label: "Horários",
      icon: CalendarDays,
    },
    {
      href: "/aluno/notas-parciais",
      label: "Notas Parciais",
      icon: Star,
    },
    {
      href: "/aluno/faltas-parciais",
      label: "Faltas Parciais",
      icon: Puzzle,
    },
    {
      href: "/aluno/historico",
      label: "Histórico",
      icon: Inbox,
    },
  ],
} as const;

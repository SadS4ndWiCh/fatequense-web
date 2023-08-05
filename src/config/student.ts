import {
  CalendarDays,
  Home,
  Inbox,
  LayoutGrid,
  Puzzle,
  Star,
} from 'lucide-react'

export const studentConfig = {
  sidebar: [
    {
      href: '/aluno',
      label: 'Home',
      icon: Home,
    },
    {
      href: '/aluno/horario',
      label: 'Horários',
      icon: CalendarDays,
    },
    {
      href: '/aluno/notas-parciais',
      label: 'Notas Parciais',
      icon: Star,
    },
    {
      href: '/aluno/faltas-parciais',
      label: 'Faltas Parciais',
      icon: Puzzle,
    },
    {
      href: '/aluno/historico',
      label: 'Histórico',
      icon: Inbox,
    },
    {
      href: '/aluno/historico-grade',
      label: 'Histórico em Grade',
      icon: LayoutGrid,
    },
  ],
} as const

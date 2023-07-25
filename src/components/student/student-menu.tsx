'use client'

import Link from 'next/link'

import {
  CalendarDays,
  Home,
  Inbox,
  Laptop,
  LogOut,
  Moon,
  Palette,
  Puzzle,
  Star,
  Sun,
  User,
} from 'lucide-react'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { studentConfig } from '~/config/student'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { StudentAvatar } from './student-avatar'

type Props = {
  user: Session['user']
}

export function StudentMenu({ user }: Props) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StudentAvatar student={{ name: user.name, picture: user.picture }} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{user.name}</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/perfil">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {studentConfig.sidebar.map((link) => (
            <DropdownMenuItem
              key={`menu-${link.href}`}
              asChild
              className="cursor-pointer"
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          {/* <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno">
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/horario">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Horários</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/notas-parciais">
              <Star className="mr-2 h-4 w-4" />
              <span>Notas Parciais</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/faltas-parciais">
              <Puzzle className="mr-2 h-4 w-4" />
              <span>Faltas Pariciais</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/historico">
              <Inbox className="mr-2 h-4 w-4" />
              <span>Histórico</span>
            </Link>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Tema</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Claro</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Escuro</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Laptop className="mr-2 h-4 w-4" />
              <span>Sistema</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex cursor-pointer items-center"
          onSelect={(event: any) => {
            event.preventDefault()
            signOut({ callbackUrl: `${window.location.origin}/login` })
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

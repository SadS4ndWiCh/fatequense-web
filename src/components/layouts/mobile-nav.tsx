import Link from 'next/link'

import { GraduationCap, PanelRightClose, User } from 'lucide-react'

import { studentConfig } from '~/config/student'

import { SignOutButton } from '../auth/sign-out-button'
import { ThemeToggle } from '../theme-toggle'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export async function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">
            <PanelRightClose className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>
              <Link href="/aluno">
                <div className="w-fit rounded-md bg-red-50 p-4 dark:bg-red-500">
                  <GraduationCap className="h-5 w-5 text-red-600 dark:text-red-50" />
                </div>
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 mt-4 space-y-1">
            <Link
              href="/aluno/perfil"
              className="w-full flex items-center gap-2 rounded-md p-4 hover:bg-zinc-50 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-zinc-50"
            >
              <User className="h-5 w-5" />
              <span>Perfil</span>
            </Link>

            {studentConfig.sidebar.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full flex items-center gap-2 rounded-md p-4 hover:bg-zinc-50 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-zinc-50"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <SheetFooter className="gap-4 flex-col items-start">
            <ThemeToggle />

            <Separator />

            <SignOutButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

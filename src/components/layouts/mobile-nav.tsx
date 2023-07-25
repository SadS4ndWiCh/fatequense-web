import Link from 'next/link'

import { GraduationCap, PanelRightClose, User } from 'lucide-react'

import { studentConfig } from '~/config/student'

import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">
            <PanelRightClose className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>
            <Link href="/aluno">
              <div className="w-fit rounded-md bg-red-50 p-4 dark:bg-red-500">
                <GraduationCap className="h-5 w-5 text-red-600 dark:text-red-50" />
              </div>
            </Link>
          </SheetTitle>

          <div className="mt-4 space-y-2 divide-y">
            <div>
              <Link
                href="/aluno/perfil"
                className="w-full flex items-center gap-2 rounded-md p-4 hover:bg-zinc-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-zinc-50"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
            </div>

            <div className="pt-2">
              {studentConfig.sidebar.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full flex items-center gap-2 rounded-md p-4 hover:bg-zinc-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-zinc-50"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

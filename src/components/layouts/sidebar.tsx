import Link from 'next/link'
import { notFound } from 'next/navigation'

import { GraduationCap } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { MobileStudentTodaySchedule } from '../student/mobile-student-today-schedule'
import { StudentMenu } from '../student/student-menu'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export async function Sidebar() {
  const user = await getCurrentUser()

  if (!user) notFound()

  return (
    <aside className="sticky top-0 dark:bg-slate-900 md:fixed md:bottom-0 md:left-0 md:top-0 z-10 flex min-w-[100px] items-center bg-white p-4 transition-all md:flex-col md:shadow-md">
      <nav className="flex-1 flex gap-2 items-center md:block md:space-y-6 md:divide-y">
        <MobileNav />

        <div className="hidden md:flex md:justify-center">
          <Link href="/aluno">
            <div className="w-fit rounded-md bg-red-50 p-4 dark:bg-red-500">
              <GraduationCap className="h-5 w-5 text-red-600 dark:text-red-50" />
            </div>
          </Link>
        </div>

        <MainNav />
      </nav>

      <div className="flex gap-2">
        <MobileStudentTodaySchedule />
        <StudentMenu user={user} />
      </div>
    </aside>
  )
}

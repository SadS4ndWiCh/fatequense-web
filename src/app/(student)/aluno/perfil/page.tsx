import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Settings2 } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'
import { cn } from '~/lib/utils'

import { buttonVariants } from '~/components/ui/button'

import { MobileStudentEditProfile } from '~/components/student/mobile-student-edit-profile'
import { StudentEditProfileSheet } from '~/components/student/student-edit-profile-sheet'
import { StudentProfileCard } from '~/components/student/student-profile-card'
import { StudentSummary } from '~/components/student/student-summary'

export const metadata = {
  title: 'Perfil',
}

export default async function Profile() {
  const user = await getCurrentUser()

  if (!user) return notFound()

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Perfil</h1>
        <p>Veja dados do seu perfil de estudante</p>
      </header>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
        <section className="space-y-4">
          <StudentProfileCard user={user} />

          <div className="hidden lg:block">
            <StudentEditProfileSheet />
          </div>
          <div className="lg:hidden">
            <MobileStudentEditProfile />
          </div>
        </section>

        <section>
          <StudentSummary />
        </section>
      </div>
    </div>
  )
}

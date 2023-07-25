import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { EditProfileForm } from '~/components/forms/edit-profile-form'
import { StudentProfileCard } from '~/components/student/student-profile-card'

export const metadata = {
  title: 'Editar Perfil',
}

export default async function EditProfile() {
  const user = await getCurrentUser()

  if (!user) return notFound()

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Editar Perfil</h1>
        <p>Edite informações do seu perfil de estudante</p>
        <div className="mt-2 space-y-2 rounded-md bg-yellow-50 p-4 border-2 border-transparent text-yellow-600 dark:border-yellow-500 dark:bg-transparent dark:text-yellow-500">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Atenção</span>
          </div>

          <p>
            As informações realizadas aqui não possuem efeito no site do SIGA
            verdadeiro. As modificações aqui são salvas em um banco de dados a
            parte do SIGA, portanto, evite colocar qualquer informação sensível.
          </p>
        </div>
      </header>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <StudentProfileCard user={user} />

        <section className="flex-1">
          <EditProfileForm user={user} />
        </section>
      </div>
    </div>
  )
}

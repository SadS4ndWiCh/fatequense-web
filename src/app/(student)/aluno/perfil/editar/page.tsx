import { notFound } from 'next/navigation'

import { AlertCircle } from 'lucide-react'

import { getCurrentUser } from '~/lib/session'

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'

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

        <Alert className="mt-4">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
            As informações realizadas aqui não possuem efeito no site do SIGA
            verdadeiro. As modificações aqui são salvas em um banco de dados a
            parte do SIGA, portanto, evite colocar qualquer informação sensível.
          </AlertDescription>
        </Alert>
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

import { notFound } from "next/navigation";
import { AlertCircle } from "lucide-react";

import { EditProfileForm } from "~/components/edit-profile-form";
import { StudentProfileCard } from "~/components/student-profile-card";

import { getCurrentUser } from "~/lib/session";

export const metadata = {
  title: 'Editar Perfil',
}

export default async function EditProfile() {
  const user = await getCurrentUser();

  if (!user) return notFound();

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Editar Perfil</h1>
        <p>Edite informações do seu perfil de estudante</p>
        <div className="mt-2 space-y-2 rounded-md bg-yellow-50 p-4 text-yellow-600">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Atenção</span>
          </div>

          <p>
            As informações realizadas aqui não possuem efeito no site do SIGA
            verdadeiro. As modificações aqui são salvas em um banco de dados a
            parte do SIGA, portanto, evite colocar qualquer informação sencível.
          </p>
        </div>
      </header>

      <div className="mt-8 flex gap-4">
        <StudentProfileCard user={user} />

        <section className="flex-1">
          <EditProfileForm user={user} />
        </section>
      </div>
    </div>
  );
}

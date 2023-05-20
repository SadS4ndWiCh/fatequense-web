import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Settings2 } from 'lucide-react';

import { getCurrentUser } from '~/lib/session';
import { cn } from '~/lib/utils';

import { buttonVariants } from '~/components/ui/button';

import { StudentDetails } from '~/components/student-details';
import { StudentProfileCard } from '~/components/student-profile-card';

export const metadata = {
  title: 'Perfil',
};

export default async function Profile() {
  const user = await getCurrentUser();

  if (!user) return notFound();

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Perfil</h1>
        <p>Veja dados do seu perfil de estudante</p>
      </header>

      <div className="mt-8 flex gap-4">
        <section>
          <StudentProfileCard user={user} />

          <Link
            href="/aluno/perfil/editar"
            className={cn(
              'inline-block mt-4 w-full',
              buttonVariants({ size: 'sm' }),
            )}
          >
            <Settings2 className="mr-2 h-4 w-4" />
            <span>Editar Perfil</span>
          </Link>
        </section>

        <section>
          {/* @ts-expect-error Async Server Component */}
          <StudentDetails />
        </section>
      </div>
    </div>
  );
}

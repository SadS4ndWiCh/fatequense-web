import Link from "next/link";
import { notFound } from "next/navigation";
import { Settings2 } from "lucide-react";

import { CopyButton } from "~/components/copy-button";
import { StudentDetails } from "~/components/student-details";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";

import { getCurrentUser } from "~/lib/session";
import { cn } from "~/lib/utils";

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
        <section className="flex w-[265px] flex-col items-center rounded-md px-4 py-6">
          <Avatar className="h-32 w-32">
            <AvatarImage src={user.picture} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="mt-2 w-full space-y-4">
            <section>
              <h2 className="truncate text-xl font-medium">{user.name}</h2>
              <div className="rounded-md bg-sky-50 px-2 py-1">
                <p
                  title="Análise e Desenvolvimento de Sistemas"
                  className="truncate text-xs text-sky-600"
                >
                  Análise e Desenvolvimento de Sistemas
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-1">
              <div className="flex-1">
                <span className="text-xs">Email Institucional</span>
                <CopyButton
                  id="institutional-email"
                  content={user.email}
                  className="w-full"
                >
                  <span className="mr-2 truncate text-sm">{user.email}</span>
                </CopyButton>
              </div>
              <div className="flex-1">
                <span className="text-xs">RA</span>
                <CopyButton
                  id="student-id"
                  content={user.ra}
                  className="w-full"
                >
                  <span className="mr-2 truncate text-sm">{user.ra}</span>
                </CopyButton>
              </div>
            </section>

            <section>
              <Link
                href="/aluno/perfil/editar"
                className={cn("w-full", buttonVariants({ size: "sm" }))}
              >
                <Settings2 className="mr-2 h-4 w-4" />
                <span>Editar Perfil</span>
              </Link>
            </section>
          </div>
        </section>

        <section>
          {/* @ts-expect-error Async Server Component */}
          <StudentDetails />
        </section>
      </div>
    </div>
  );
}

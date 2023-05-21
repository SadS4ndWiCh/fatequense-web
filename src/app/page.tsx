import Link from "next/link";

import { AlertCircle, Github, GraduationCap, User } from "lucide-react";

import { siteConfig } from "~/config/site";

import { cn } from "~/lib/utils";

import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen max-w-lg place-content-center space-y-6 p-4 md:p-0">
      <section className="">
        <div className="mb-4 w-fit rounded-md bg-red-50 p-4">
          <GraduationCap className="h-5 w-5 text-red-600" />
        </div>
        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-bold">Fatequense</h1>
          <p className="text-lg">
            Uma plataforma para visualizar os dados de estudante dos alunos da
            fatec, feita com carinho de fatequense para fatequenses.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <Link
            href="/login"
            className={cn("w-full md:w-fit", buttonVariants())}
          >
            <User className="mr-2 h-5 w-5" />
            <span>Entrar como estudante</span>
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferer noreferrer"
            className={cn(
              "w-full md:w-fit",
              buttonVariants({ variant: "outline" }),
            )}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2 rounded-md bg-yellow-50 p-4 text-yellow-600">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Atenção</span>
          </div>

          <p>
            O site pode parar a qualquer momento dependendo das atualizações no
            SIGA,{" "}
            <em className="line-through">mesmo que possívelmente não haverá</em>
            , mas farei o possível para atualizar o mais rápido possível
          </p>
        </div>
      </section>
    </main>
  );
}

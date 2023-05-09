import Link from "next/link";
import type { Session } from "next-auth";
import { GraduationCap } from "lucide-react";

import { StudentMenu } from "./student-menu";
import { studentConfig } from "~/config/student";

type Props = {
  user: Session["user"];
};

export function Sidebar({ user }: Props) {
  return (
    <aside className="fixed bottom-0 left-0 top-0 flex min-w-[100px] flex-col items-center p-4 shadow-md transition-all">
      <section className="flex-1 space-y-6 divide-y">
        <header className="flex justify-center">
          <Link href="/aluno">
            <div className="w-fit rounded-md bg-red-50 p-4">
              <GraduationCap className="h-5 w-5 text-red-600" />
            </div>
          </Link>
        </header>

        <nav className="flex flex-col items-center pt-6">
          {studentConfig.sidebar.map((link) => (
            <Link key={link.href} href={link.href} className="group w-full">
              <div className="flex items-center gap-2 rounded-md p-4 group-hover:bg-zinc-50 group-hover:text-zinc-600">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </section>

      <StudentMenu user={user} />
    </aside>
  );
}

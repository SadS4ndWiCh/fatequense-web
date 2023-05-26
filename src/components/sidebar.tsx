import Link from "next/link";

import { GraduationCap } from "lucide-react";

import { studentConfig } from "~/config/student";

import { getCurrentUser } from "~/lib/session";

import { StudentMenu } from "./student-menu";

export async function Sidebar() {
  const user = await getCurrentUser();

  return (
    <aside className="sticky dark:bg-gray-900 bottom-0 left-0 top-0 z-10 flex min-w-[100px] items-center bg-white p-4 transition-all md:fixed md:flex-col md:shadow-md">
      <section className="flex-1 space-y-6 divide-y">
        <header className="flex md:justify-center">
          <Link href="/aluno">
            <div className="w-fit rounded-md bg-red-50 p-4 dark:bg-red-500">
              <GraduationCap className="h-5 w-5 text-red-600 dark:text-red-50" />
            </div>
          </Link>
        </header>

        <nav className="hidden flex-col items-center pt-6 md:flex">
          {studentConfig.sidebar.map((link) => (
            <Link key={link.href} href={link.href} className="group w-full">
              <div className="flex items-center gap-2 rounded-md p-4 group-hover:bg-zinc-50 group-hover:text-gray-600 dark:group-hover:bg-gray-800 dark:group-hover:text-zinc-50">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </section>

      <StudentMenu user={user!} />
    </aside>
  );
}

"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import type { Session } from "next-auth";
import { GraduationCap } from "lucide-react";

import { StudentMenu } from "./student-menu";
import { studentConfig } from "~/config/student";
import { cn } from "~/lib/utils";

type Props = {
  user: Session["user"];
};

export function Sidebar({ user }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 bottom-0 flex flex-col min-w-[100px] p-4 shadow-md transition-all",
        {
          "items-center": !open,
        }
      )}
    >
      <section className="flex-1 space-y-6 divide-y">
        <header className={cn("flex", { "justify-center": !open })}>
          <div className="w-fit p-4 rounded-md bg-red-50">
            <GraduationCap className="w-5 h-5 text-red-600" />
          </div>
        </header>

        <nav className="flex flex-col items-center pt-6">
          {studentConfig.sidebar.map((link) => (
            <Link key={link.href} href={link.href} className="group w-full">
              <div className="flex items-center gap-2 p-4 rounded-md group-hover:bg-zinc-50 group-hover:text-zinc-600">
                <link.icon className="w-5 h-5" />
                {open && <span>{link.label}</span>}
              </div>
            </Link>
          ))}
        </nav>
      </section>

      <StudentMenu user={user} />
    </aside>
  );
}

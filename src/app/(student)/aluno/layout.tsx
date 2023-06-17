import { ReactNode } from "react";

import { notFound } from "next/navigation";

import { getSession } from "~/lib/session";

import { Toaster } from "~/components/ui/toaster";

import { Providers } from "~/components/providers";
import { Sidebar } from "~/components/sidebar";

type Props = {
  children: ReactNode;
};

export default async function StudentLayout({ children }: Props) {
  const session = await getSession();

  if (!session) {
    return notFound();
  }

  return (
    <Providers session={session}>
      <div className="flex min-h-screen flex-col md:flex-row md:gap-2">
        <Sidebar />

        <main className="flex-1 p-4 md:ml-[100px] md:p-6">{children}</main>
        <Toaster />
      </div>
    </Providers>
  );
}

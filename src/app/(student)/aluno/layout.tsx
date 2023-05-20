import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Sidebar } from "~/components/sidebar";
import { Toaster } from "~/components/ui/toaster";
import { Providers } from "~/components/providers";
import { getSession } from "~/lib/session";

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
      <div className="flex min-h-screen gap-2">
        {/* @ts-expect-error Async Server Component */}
        <Sidebar />

        <main className="ml-[100px] flex-1 p-6">{children}</main>
        <Toaster />
      </div>
    </Providers>
  );
}

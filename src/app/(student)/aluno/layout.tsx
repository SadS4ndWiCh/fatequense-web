import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Sidebar } from "~/components/sidebar";
import { getCurrentUser } from "~/lib/session";

type Props = {
  children: ReactNode;
};

export default async function StudentLayout({ children }: Props) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen gap-2">
      <Sidebar user={user} />

      <main className="ml-[100px] flex-1 p-6">{children}</main>
    </div>
  );
}

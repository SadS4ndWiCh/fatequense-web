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
    <div className="flex gap-2 min-h-screen">
      <Sidebar user={user} />

      <main className="flex-1 p-6 ml-[100px]">{children}</main>
    </div>
  );
}

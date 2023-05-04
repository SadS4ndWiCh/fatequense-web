import { ReactNode } from "react";
import { Sidebar } from "~/components/sidebar";

type Props = {
  children: ReactNode;
};

export default function StudentLayout({ children }: Props) {
  return (
    <div className="flex gap-2 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 ml-[100px]">{children}</main>
    </div>
  );
}

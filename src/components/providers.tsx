"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  session: Session;
  children: ReactNode;
};
export function Providers({ session, children }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

import { GraduationCap } from "lucide-react";

import { AuthForm } from "~/components/auth-form";

export const metadata = {
  title: "Login",
};

export default async function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 overflow-y-hidden px-4 md:px-0">
      <div className="max-w-sm text-center">
        <div className="mx-auto mb-4 rounded-md bg-red-50 text-red-600 dark:bg-red-600 p-4 dark:text-red-50 w-fit">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold">Bem vindo de volta</h1>
        <p>
          Entre com sua conta do SIGA para ver suas informações de estudante
        </p>
      </div>

      <AuthForm />
    </main>
  );
}

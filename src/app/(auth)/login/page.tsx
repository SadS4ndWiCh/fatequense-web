import { GraduationCap } from 'lucide-react';

import { AuthForm } from '~/components/auth-form';

export const metadata = {
  title: 'Login',
};

export default async function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 overflow-y-hidden">
      <div className="absolute left-96 top-14 -z-10 h-52 w-52 animate-pulse rounded-full bg-red-600 opacity-40 blur-3xl" />
      <div className="absolute -bottom-24 right-96 -z-10 h-64 w-64 animate-pulse rounded-full bg-fuchsia-600 opacity-40 blur-3xl" />

      <div className="max-w-sm text-center">
        <div className="mx-auto mb-4 w-fit rounded-md bg-red-50 p-4">
          <GraduationCap className="h-5 w-5 text-red-600" />
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

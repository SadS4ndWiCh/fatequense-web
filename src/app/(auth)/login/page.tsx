import { GraduationCap } from "lucide-react";
import { AuthForm } from "~/components/auth-form";

export default async function Login() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen overflow-y-hidden">
      <div className="absolute top-14 left-96 w-52 h-52 bg-red-600 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
      <div className="absolute -bottom-24 right-96 w-64 h-64 bg-fuchsia-600 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />

      <div className="text-center max-w-sm">
        <div className="w-fit p-4 mx-auto mb-4 rounded-md bg-red-50">
          <GraduationCap className="w-5 h-5 text-red-600" />
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

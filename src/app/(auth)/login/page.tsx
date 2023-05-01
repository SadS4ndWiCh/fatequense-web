import { AuthForm } from "~/components/auth-form";

export default async function Login() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <div className="text-center max-w-sm">
        <h1 className="text-2xl font-bold">Bem vindo de volta</h1>
        <p>
          Entre com sua conta do SIGA para ver suas informações de estudante
        </p>
      </div>

      <AuthForm />
    </main>
  );
}

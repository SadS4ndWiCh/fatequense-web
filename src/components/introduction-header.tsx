import { getCurrentUser } from "~/lib/session";

export async function IntroductionHeader() {
  const user = await getCurrentUser();

  const name = user!.name.split(" ").slice(0, 2).join(" ");

  return (
    <header className="relative rounded-md bg-red-50 p-8 border-2 border-transparent dark:border-red-500 dark:bg-transparent">
      <small className="text-sm text-red-600 dark:text-red-500">
        Bem vindo,
      </small>
      <h1 className="text-3xl font-bold">{name}!</h1>
      <p className="mt-2">
        Todas suas inforamções do siga mais relevantes serão atualizadas aqui
      </p>
    </header>
  );
}

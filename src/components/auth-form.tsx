"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { studentAuthSchema } from "~/lib/validators/student-auth";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormData = z.infer<typeof studentAuthSchema>;

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(studentAuthSchema),
  });

  async function onSubmit(data: FormData) {
    setLoading(true);

    await signIn("credentials", {
      ...data,
      callbackUrl: searchParams?.get("from") || "/aluno",
    });

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[400px]">
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Usuário</Label>
          <Input
            id="username"
            placeholder="Usuário"
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            {...register("username")}
          />

          {errors?.username && (
            <p className="px-1 text-xs text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="Senha"
            type="password"
            autoCapitalize="none"
            autoCorrect="off"
            {...register("password")}
          />

          {errors?.password && (
            <p className="px-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button disabled={loading}>Entrar com o SIGA</Button>
      </div>
    </form>
  );
}

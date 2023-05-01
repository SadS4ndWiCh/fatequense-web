"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { studentAuthSchema } from "~/lib/validators/student-auth";
import { Button } from "./ui/button";

type FormData = z.infer<typeof studentAuthSchema>;

export function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(studentAuthSchema),
  });

  async function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
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

        <Button>Entrar com o SIGA</Button>
      </div>
    </form>
  );
}

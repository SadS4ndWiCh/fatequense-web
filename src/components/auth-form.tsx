"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { studentAuthSchema } from "~/lib/validators/student-auth";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FormData = z.infer<typeof studentAuthSchema>;

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const form = useForm<FormData>({
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-[400px]"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Usuário"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Seu usuário no SIGA, geralmente sendo seu CPF
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>Sua senha super segura</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={loading} className="w-full mt-6">
          {loading && <LoaderIcon className="mr-2 w-4 h-4 animate-spin" />}
          <span>Entrar com o SIGA</span>
        </Button>
      </form>
    </Form>
  );
}

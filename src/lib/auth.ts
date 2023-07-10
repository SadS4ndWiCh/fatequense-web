import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "~/env.mjs";

import { api } from "./api";
import { studentProfileSchema } from "./validations/profile";
import { studentAuthSchema, studentLoginResponseSchema } from "./validations/student-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 2, // 2 horas
  },
  jwt: {
    maxAge: 60 * 60 * 2, // 2 horas
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = studentAuthSchema.parse(credentials);

        try {
          const { token } = await api.post(studentLoginResponseSchema, "/auth/login", {
            body: JSON.stringify({ username, password }),
          });

          return { id: "", accessToken: token };
        } catch (e) {
          console.error(e);

          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session: jwtSession }) {
      if (trigger === "update" && jwtSession?.picture) {
        token.picture = jwtSession.picture;

        return token;
      }

      if (!user) return token;

      const profile = await api.get(studentProfileSchema, "/student/profile", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      return {
        accessToken: user.accessToken,
        ra: profile.ra,
        name: profile.name,
        email: profile.institutionalEmail,
        picture: profile.photoUrl,
      };
    },

    async session({ session, token }) {
      if (!token) return session;

      session.user.ra = token.ra!;
      session.user.name = token.name!;
      session.user.email = token.email!;
      session.user.picture = token.picture!;
      session.user.accessToken = token.accessToken;

      return session;
    },
  },

  secret: env.NEXTAUTH_SECRET,
};

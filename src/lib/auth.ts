import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  verify as jwtVerify,
  type Algorithm,
  type JwtPayload,
} from "jsonwebtoken";

import { studentAuthSchema } from "./validators/student-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  jwt: {
    maxAge: 60 * 60 * 3, // 3 horas
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = studentAuthSchema.parse(credentials);

        const authResponse = await fetch("http://localhost:3333/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (!authResponse.ok) return null;

        const { token } = await authResponse.json();

        return { id: "", accessToken: token };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token;

      const profileRes = await fetch("http://localhost:3333/student/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      const { profile } = await profileRes.json();

      const { session, ...payload } = jwtVerify(
        user.accessToken,
        process.env.JWT_SECRET_KEY!,
        {
          algorithms: [process.env.JWT_ALGORITHM as Algorithm],
        }
      ) as JwtPayload;

      return {
        ...payload,
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

  secret: process.env.NEXTAUTH_SECRET,
};

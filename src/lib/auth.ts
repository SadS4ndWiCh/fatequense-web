import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import { env } from '~/env.mjs';

import { api } from './api';
import { studentAuthSchema } from './validators/student-auth';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 3, // 3 horas
  },
  jwt: {
    maxAge: 60 * 60 * 3, // 3 horas
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { username, password } = studentAuthSchema.parse(credentials);

        try {
          const {
            res,
            data: { token },
          } = await api.post(z.object({ token: z.string() }), '/auth/login', {
            data: { username, password },
          });

          if (!res.ok) return null;

          return { id: '', accessToken: token };
        } catch (e) {
          console.error(e);

          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session: jwtSession }) {
      if (trigger === 'update' && jwtSession?.picture) {
        token.picture = jwtSession.picture;

        return token;
      }

      if (!user) return token;

      const profileRes = await fetch('http://localhost:3333/student/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      const { profile } = await profileRes.json();

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

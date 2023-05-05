import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      picture: string;
      accessToken: string;
    };
  }

  interface User {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface DefaultJWT {
    accessToken: string;
  }
}

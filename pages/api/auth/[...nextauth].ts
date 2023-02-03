import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "server/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: authorize(prisma),
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub!,
        },
      };
    },
  },
};

function authorize(prisma: PrismaClient) {
  return async (credentials: Record<"email" | "password", string> | undefined) => {
    if (!credentials) {
      throw new Error("Missing credentials");
    }

    if (!credentials.email) {
      throw new Error('"email" is required in credentials');
    }

    if (!credentials.password) {
      throw new Error('"password" is required in credentials');
    }

    const maybeUser = await prisma.user.findFirst({
      where: {
        email: credentials.email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!maybeUser || !maybeUser.password) {
      return null;
    }

    const isValid = await compare(credentials.password, maybeUser.password);

    if (!isValid) {
      return null;
    }

    return {
      id: maybeUser.id,
      email: maybeUser.email,
    };
  };
}

export default NextAuth(authOptions);

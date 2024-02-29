import NextAuth, { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

import { signInSchema } from "@/app/auth/signin/signInSchema";

const credentialsConfig = CredentialsProvider({
  name: "credentials",
  credentials: {},
  async authorize(
    credentials: Record<string, string> | undefined
  ): Promise<User | null> {
    try {
      if (!credentials || !credentials.email || !credentials.password) {
        console.error("Credentials are missing or incomplete");
        return null;
      }

      const validatedFields = signInSchema.safeParse(credentials);

      if (!validatedFields.success) {
        console.error("Invalid signin credentials:", validatedFields.error);
        return null;
      }

      const { email, password } = validatedFields.data;

      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        console.error("User with provided email not found");
        return null;
      }

      // verify user password
      const hashedPassword = user.hashedPassword;

      // verify that password and hashedPassword are valid
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordCorrect) {
        console.error("Invalid email or password");
        return null;
      }

      // Return simplified user data excluding password
      const signedInUser = {
        id: user.id.toString(),
        name: user.username,
        email: user.email,
      };

      return signedInUser;
    } catch (error) {
      console.error("Error authorizing user:", error);
      return null;
    }
  },
});

const config = {
  adapter: PrismaAdapter(prisma),
  providers: [credentialsConfig],
  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
    newUser: "/auth/new-user",
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env/server";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

const options: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  callbacks : {
    session({session, user}) {
      session.user.id = user.id;
      return session;
    }
  },
  adapter : DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

export default options;
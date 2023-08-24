import NextAuth from "next-auth/next";
import type { Adapter } from "next-auth/adapters";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { app, auth } from "../../_app";


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  adapter: FirestoreAdapter(app) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          credentials ? credentials?.email : " ",
          credentials ? credentials?.password : " "
        )
          .then((userCredentials) => {
            return userCredentials.user;
          })
          .catch((error) => {
            toast.error("couldnt sign you in");
            return error;
          });
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

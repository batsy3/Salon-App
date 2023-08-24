"use client";

import Head from "next/head";
import AuthLayout from "../layout/layout";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/form.module.css";
import Link from "next/link";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./api/auth/[...nextauth]";

export default function Register() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    preventDefault(e);
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(response);
    router.push("/login");
  };

  return (
    <AuthLayout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400 ">
            Please enter your credentials
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
          <div className={styles.input_group}>
            <input
              type="text"
              className={styles.input_text}
              name="username"
              placeholder="enter username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              className={styles.input_text}
              name="email"
              placeholder="enter email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="password"
              name="password"
              placeholder="enter password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="">
            <button
              type="submit"
              disabled={!data.email || !data.password}
              className="text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Register
            </button>{" "}
          </div>
        </form>
        <p className="text-center text-gray-400">
          already have an account ?{" "}
          <Link href={"/login"}>
            <a className="text-blue-700">Sign In</a>
          </Link>
        </p>
      </section>
    </AuthLayout>
  );
}
function preventDefault(e: any) {
  throw new Error("Function not implemented.");
}

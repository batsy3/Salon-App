import Head from "next/head";
import AuthLayout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/form.module.css";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Login</h1>
          <p className="w-3/4 mx-auto text-gray-400 ">
            Please enter your credentials
          </p>
        </div>
        <form className="flex flex-col gap-5">
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
              type="button"
              disabled={!data.email || !data.password}
              onClick={() =>
                signIn("credentials", {
                  data,
                  redirect: true,
                  callbackUrl: "/",
                })
              }
              className="text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Login
            </button>{" "}
          </div>
        </form>
        <p className="text-center text-gray-400">
          dont have an account yet ?
          <Link href={"/register"}>
            <a className="text-blue-700">Register</a>
          </Link>
        </p>
      </section>
    </AuthLayout>
  );
};

export default Login;

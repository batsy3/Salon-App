"use client";


import type { NextPage } from "next";
import { Content } from "../components/home/content";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getApp, getApps, initializeApp } from "firebase/app";
import { CircularProgress } from "@mui/material";


const Home: NextPage = () => {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/login");
    },
  });

  return session.data && session.status === "authenticated" ? (
    <Content />
  ) : (
    <CircularProgress />
  );
};

export default Home;

"use client";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./auth/[...nextauth]";


 export function Login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      return { statusCode: error.code, errorMessage: error.message };
    });
}

export default function Register({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return { ...user, username: username };
    })
    .catch((error) => {
      return { statusCode: error.code, errorMessage: error.message };
    });
}

export function SignOut() {}

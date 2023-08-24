import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Layout } from "../components/layout/layout";
import { SSRProvider } from "react-bootstrap";
import SessionProvider from "../utils/sessionProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:"AIzaSyCUwfhT4YA_nDjme-6oQGsKwnG4Um5D_lI",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_ID,
  appId: process.env.FIREBASE_APP_ID,
};
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export const auth = getAuth();

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});

//  stick auth check in here r=to render differebt layout views
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <SessionProvider>
            <Layout>
              <ToastContainer />
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}

export default MyApp;

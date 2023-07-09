import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import { SearchProvider } from "@/contexts/SearchContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Head>
        <title>Shopee</title>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <div className={`${roboto.className} px-8 py-4 text-secondary`}>
        <Component {...pageProps} />
      </div>
    </SearchProvider>
  );
}

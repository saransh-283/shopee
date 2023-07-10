import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import { SearchProvider } from "@/contexts/SearchContext";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/contexts/CartContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <SearchProvider>
        <Head>
          <title>Shopee</title>
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        </Head>
        <Header />
        <div className={`${roboto.className} px-8 py-4 text-secondary`}>
          <Component {...pageProps} />
        </div>
        <CartSidebar />
      </SearchProvider>
    </CartProvider>
  );
}

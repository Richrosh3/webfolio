import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

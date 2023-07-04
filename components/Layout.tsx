import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const name = "Roshen Abraham";
export const siteTitle = "Roshen's Webfolio";

export default function Layout({
  children,
  home,
}: {
  children: any;
  home: any;
}) {
  return (
    <div className= "flex flex-col h-screen bg-gradient-to-b from-slate-600 to-slate-900 p-10">
      <NavBar />
      <Head>
        <link rel="icon" href="terminal.ico" />
        <meta name="Roshen Abraham" content="My Webfolio!" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

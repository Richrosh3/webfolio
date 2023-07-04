import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Introduction/>
    </Layout>
  );
}

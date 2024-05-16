import { Layout } from "@/modules/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import "highlight.js/styles/default.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TS Gurus</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

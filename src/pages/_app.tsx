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
        <div className="relative">
          <div className="absolute min-h-[90vh] top-0 min-w-full bg-gradient-to-tr from-base-100 via-base-100 via-65% to-primary z-[-1]"></div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

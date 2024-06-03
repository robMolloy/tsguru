import { Layout } from "@/modules/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import "highlight.js/styles/default.css";
import { useThemes } from "@/modules/themeSelector";
import { useEffect } from "react";
import { Typography } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  useThemes();

  return (
    <>
      <Head>
        <title>TS Gurus</title>
      </Head>
      <Layout>
        <div className="relative">
          <div className="absolute min-h-[90vh] top-0 min-w-full bg-gradient-to-tr from-base-100 via-base-100 via-75% sm:via-65% to-primary z-[-1]"></div>
          <Component {...pageProps} />
        </div>
        <footer className="footer pb-16 bg-neutral text-neutral-content border-t">
          <div className="w-full block">
            <Typography>
              <form>
                <h2>Get in touch!</h2>
                <p>
                  We welcome all enquiries! For a detailed discussion on how we can tailor our
                  services to your unique situation, please contact us directly and one of our
                  experts will get back to you. We are here to provide personalized guidance and
                  support to ensure your project's success.
                </p>

                <div id="get-in-touch-form">
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered"
                    />
                    <button className="btn btn-primary">Subscribe</button>
                  </div>
                </div>
              </form>
            </Typography>
          </div>
        </footer>
      </Layout>
    </>
  );
}

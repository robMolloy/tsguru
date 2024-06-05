import { Typography } from "@/components";
import Link from "next/link";
export default function Page() {
  return (
    <Typography fullPage>
      <h1>About Us</h1>
      <h2>Who are we?</h2>
      <p>
        TS Gurus is a consultancy service, built with the aim of improving the quality of code
        written in TypeScript. As a team, we have broad experience from banking and investments to
        telecoms and infrastructure.
      </p>
      <p>
        We are a team of dedicated experts with laser-focus on how TypeScript best-practices can be
        implemented into large-scale projects and how to work with beginner, intermediate and expert
        TypeScript developers to improve their skills.
      </p>

      <p>
        We have worked with various sizes of business from startup to major corporations and would
        love to work with you so please <a href="#get-in-touch-form">get in touch</a>!
      </p>

      <h2>How can we help</h2>
      <p>
        At TS Gurus we provide <Link href="/services">services</Link> to ensure your project is
        delivering high quality code and following TypeScript best-practices. When used correctly,
        TypeScript will save development time due to the reduction in debug time, and completely
        removing entire categories of errors. However, the TypeScript compiler works across your
        whole project, and small errors in one area can cause errors throughout.
      </p>

      <p>
        We also provide a number of upskilling and training services to get your whole team to write
        high quality code and following TypeScript best-practices. Unlock the full potential of
        TypeScript with TS Gurus today by getting us to{" "}
        <Link href="/services/audit-service"> audit your project</Link>! Or view our{" "}
        <Link href="/services">full range of services</Link>.
      </p>
    </Typography>
  );
}

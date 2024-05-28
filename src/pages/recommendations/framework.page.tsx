import { Typography } from "@/components";

export default function Page() {
  return (
    <>
      <Typography fullPage>
        <h1>Framework Recommendation</h1>

        <h2>Focus on TypeScript basics</h2>
        <p>
          We can provide our services for any web framework, but it is important, especially in
          teams that are getting up to speed with TypeScript that there are as few barriers as
          possible to get a full understanding of TypeScript. With so many web frameworks available
          our clients often ask us to make a recommendation when starting a new project.
        </p>

        <h2>React is the safe option</h2>
        <p>
          At TS Gurus we recommend our clients use React/Next. There are different pros and cons to
          all web frameworks, and React/Next or ReactNative is definitely not perfect. However, it
          provides an excellent typing system that gives direct access to types. Many of the
          React/Next or ReactNative alternatives have ways of abstracting you away from the
          TypeScript types, either due to compilation steps or rendering mechanisms.
        </p>

        <p>
          One way to show how React/Next differs from other frameworks is that unlike Svelte, the
          dev server doesn't even need to be running for the type system to work correctly and stay
          updated with any changes - due to Svelte's compilation step. We don't suggest that you
          start making code changes without a dev server running, but Svelte's compilation step can
          sometimes be unreliable causing "bugs" that would be fixed if the server was just
          restarted - how annoying!
        </p>

        <h2>Bet on React/Next</h2>
        <p>
          React/Next has made major changes in recent years. The performance gap has decreased
          compared to granular updating frameworks like Solid are smaller due to SSR and other
          performance improvements. Furthermore, React/Next intends to introduce a compilation step
          but take a fresh approach (compared to other major JS frameworks), and will still not
          require the dev-server to be running for types to update even once implemented.
        </p>
        <p>
          Finally, like it or not, React/Next is the biggest player in the JS Frameworks world, has
          the backing of two of the biggest development companies in the world (Facebook & Vercel)
          and there are more available React/Next devs than any of the framework competitor. Despite
          all this, we couldn't agree more with Ben Awad in this great and hilarious video.
        </p>
        <p className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/E5xThvyaGbE?si=Uufl_gcAj7MSeqgl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
      </Typography>
    </>
  );
}

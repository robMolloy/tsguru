import { Typography } from "@/components";

export default function Page() {
  return (
    <Typography>
      <h1>Types of Components</h1>

      <h2>One Quick Caveat</h2>
      <p>
        Whilst building most projects there is an effort to build reusable component libraries
        within the project that can be ported over to the next project that is worked on. Our advice
        for this is...don't bother!
      </p>
      <p>
        This isn't saying reusable component libraries are bad - in fact they are great! But you
        should be concentrating on building your project and not trying to create abstractions for
        mythical use-cases - this is always a bad idea. Instead, build good components for your
        project, not good components for all projects.
      </p>
      <p>
        And remember...the above advice isn't forever. This is advice for when you're in the
        building stage. The next time you're starting a new project nothing is stopping you from
        opening your current project and copying anything relevant at that point - this is also a
        good time to make any relevant abstractions now you have an idea your new use-cases.
      </p>

      <p>
        One final thing on this. There are many different ways of categorising components and all
        have their positives/negatives. One thing that our recommendation tries to resolve is the
        cognitive overhead of having to categorise each component which can be especially difficult
        when the distinction is subjective. One such method of categorisation is when using "Atomic
        Design principles" - in theory it should be very easy to categorise components into their
        atoms, molecules and organisms but as projects grow there is often disagreements between
        developers and can waste time when developers search for components in the wrong place.
      </p>

      <h2>3 Component-Types</h2>
      <p>
        At TS Gurus we recommend categorising your components into three component-types. Smart
        components, loose-fitting dumb components & tight-fitting dumb components.
      </p>

      <h2>Smart Components</h2>

      <p>Smart components </p>
    </Typography>
  );
}

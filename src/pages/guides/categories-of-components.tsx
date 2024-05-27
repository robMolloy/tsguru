import { Typography } from "@/components";

export default function Page() {
  return (
    <Typography>
      <h1>Categories of Components</h1>

      <h2>Overview</h2>
      <p>
        This method of categorising components is what our TS Gurus recommend for most projects. It
        is an objective (not subjective) way of categorising UI components and aims to discourage
        early abstractions.
      </p>
      <ul>
        <li>Smart components use a store or some sort of data-fetching within the component.</li>
        <li>
          Tight-fitting components take a value that is returned from a store - helpful
          naming-convention is to use the name of the store in the name of the component.
        </li>
        <li>
          Loose-fitting components is any general component that does not fit into either of the
          previous categories.
        </li>
      </ul>

      <h2>One Quick Caveat</h2>
      <p>
        Whilst building most projects there is an effort to build reusable component libraries
        within the project that can be ported over to the next project that is worked on. Our advice
        for this is...don't bother!
      </p>
      <p>
        This isn't saying reusable component libraries are bad - in fact they are great! But you
        should be concentrating on building your project and not trying to create abstractions for
        mythical use-cases - this is usually a bad idea. Instead, build good components for your
        project, not good components for all projects.
      </p>
      <p>
        And remember...the above advice isn't forever. This is advice for when you're in the
        building stage. The next time you're starting a new project nothing is stopping you from
        opening your current project and copying anything relevant at that point - this is also a
        good time to make any relevant abstractions now you have an idea your new use-cases.
      </p>

      <h2>Intro</h2>
      <p>
        There are many different ways of categorising components and all have their
        positives/negatives. This recommendation tries to reduce the cognitive overhead as it
        attempts categorise each component in an non-subjective way.
      </p>
      <p>
        This differs from, say, "Atomic Design principles" which ends up being quite subjective -
        even though in theory it should be easy enough to categorise components into their atoms,
        molecules and organisms; as a projects grows these distinctions are not black-and-white,
        which causes unnecessary mental overhead and wastes the time of developers who search for
        components in the wrong place.
      </p>

      <h2>Smart Components</h2>
      <p>Smart components use a store or some sort of data-fetching within the</p>

      <h2>Tight-fitting components</h2>
      <p>
        Tight-fitting components take a value that is returned from a store - helpful
        naming-convention is to use the name of the store in the name of the component
      </p>

      <h2>Loose-fitting components</h2>
      <p>
        Loose-fitting components is any general component that does not fit into either of the
        previous categories that
      </p>
    </Typography>
  );
}

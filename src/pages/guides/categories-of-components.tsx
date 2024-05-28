import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Categories of Components</h1>

      <h2>Intro</h2>
      <p>
        This method of categorising components is what our TS Gurus recommend for most projects. It
        is an objective (i.e. non-subjective) way of categorising UI components and aims to
        discourage early abstractions.
      </p>
      <p>
        We feel that the distinction between categories of components should be based on the data
        that is passed into or used within the component instaead of the "complexity" of the
        elments/components that make it up.
      </p>

      <h2>Overview</h2>
      <ul>
        <li>
          Smart components use a store or some sort of data-fetching within the component. Within
          this component there should only be dumb components (i.e. only components that are not
          smart). Dumb components come in the two following categories; tight-fitting &
          loose-fitting.
        </li>
        <li>
          Tight-fitting components take props/values that are returned directly from a store -
          helpful naming-convention is to use the name of the store in the name of the component or
          in the relevant prop. This type of component should infer the type of the store-coupled
          prop from the data store.
        </li>
        <li>
          Loose-fitting components can simply be defined as components that don't fit in the above
          categories. However these components are likely to be similar to "Atomic Design principle"
          atoms. Using abstractions, these components can be made flexible but it is our
          recommendation that the flexibility is kept only to the use-caqses that currently exist
          within the project.
        </li>
      </ul>

      <br />

      <div className="join join-vertical w-full">
        <div tabIndex={0} className="collapse collapse-arrow join-item border">
          <div className="collapse-title text-xl font-medium">Don't abstract early</div>
          <div className="collapse-content">
            <div>
              <p>
                Whilst building most projects there is an effort to make a component or a set of
                components reuseable so that they can be ported over to the next project that is
                worked on. Our advice for this is...don't bother!
              </p>
              <p>
                This isn't saying reusable component libraries are bad - in fact they are great! But
                you should be concentrating on building your project and not trying to create
                abstractions for mythical use-cases - this is usually a bad idea. Instead, build
                good components for your project, not good components for all projects.
              </p>
              <p>
                And remember...the above advice isn't forever. This is advice for when you're in the
                building stage. The next time you're starting a new project nothing is stopping you
                from opening your current project and copying anything relevant at that point - this
                is also a good time to make any relevant abstractions now you have an idea of what
                your new use-cases will be.
              </p>
              <p>
                Or perhaps your next project will be a component library and then you can spend all
                your time making components that are as flexible as possible.
              </p>
            </div>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-arrow join-item border">
          <div className="collapse-title text-xl font-medium">
            Alternative ways of categorising components
          </div>
          <div className="collapse-content">
            <div>
              <p>
                There are many different ways of categorising components and all have their
                positives & negatives. This recommendation tries to reduce the cognitive overhead as
                it attempts categorise each component in an non-subjective way.
              </p>
              <p>
                This differs from, say, "Atomic Design principles" which end up being quite
                subjective - even though in theory it should be easy enough to categorise components
                into their atoms, molecules and organisms; as a project grows these distinctions are
                not black-and-white, which causes unnecessary mental overhead and wastes the time of
                developers who search for components in the wrong place or debate whether a
                component has been categorised correctly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Example</h2>
      <p>
        If you have read our article{" "}
        <Link href={"write-naive-components"}>Write Naive Components</Link> you will have seen our
        simplified Google search result page.
      </p>

      <img src="/simplified-google-search-results.png" />

      <p>Which can be "naively" written in React with the following code;</p>

      <CodeBlock>{`import { useState } from "react";

const useSearchResults = () => {
  const searchResults = [
    { href: "someSite.co.uk", label: "some site", description: "a desc of some site" },
    { href: "anotherSite.com", label: "another site", description: "a desc of another site" },
    ...
  ];

  return { searchResults };
};

export default function SearchPage() {
  const { searchResults } = useSearchResults();
  const [numberOfPagesShown, setNumberOfPagesShown] = useState(1);
  const [numberOfResultsPerPage, setNumberOfResultsPerPage] = useState(20);
  
  const getCurrentResults = () => {
    return searchResults.slice(0, numberOfPagesShown * numberOfResultsPerPage);
  }

  return (
    <Layout>
      <Logo />
      <SearchBar />

      {getCurrentResults().map((searchResult) => (
        <DisplaySearchResult searchResult={searchResult} />
      ))}
      {/* or */}
      <DisplaySearchResults searchResults={getCurrentResults()} />

      <MoreSearchResultsBar onClick={() => setNumberOfPagesShown(numberOfPagesShown + 1)} />

      <Footer 
        onSetNumberOfResultsPerPage={(i) => setNumberOfResultsPerPage(i)}  
        numberOfResultsPerPage={numberOfResultsPerPage}
      />
    </Layout>
  );
}
`}</CodeBlock>

      <p>Let's go through each component and decide what category each fits into;</p>

      <ul>
        <li>
          SearchPage: As this uses the useSearchResults data store this is a "smart component".
        </li>
        <li>
          Layout, Logo & SearchBar: These don't accept any props and don't need to access any stores
          so are "dumb loose-fitting components".
        </li>
        <li>
          DisplaySearchResult & DisplaySearchResults: Both are "dumb tight-fitting components" as
          they are tightly coupled with the useSearchResults store.
        </li>
        <li>
          MoreSearchResultsBar & Footer: Although these take in props - the props are not
          tightly-coupled to the store so both components are "dumb loose-fitting components".
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        This way of building components is fast, minimises cognitive overhead and provides all the
        right errors in all the right places when errors occur as a result of changes to the
        response from a data store.
      </p>

      <h2>One Exception</h2>
      <p>
        Perhaps one exception would be that if a smart component that uses "store1" it can use
        another component that uses "store2". This comes down to developer-preference, but is worth
        thinking about use-cases and discussing amongst the team before implementation.
      </p>
    </Typography>
  );
}

import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Write Naive Components</h1>

      <h2>Getting started</h2>
      <p>
        For this example we are going to create a mock of the Google search results page in React.
        Here is a simplified version of the Google search results page.
      </p>

      <img src="/simplified-google-search-results.png" />

      <p>Naively, you may feel that the code should look something like this;</p>

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

      <MoreSearchResultsBar onClick={() => setNumberOfPagesShown(numberOfPagesShown + 1)} />

      <Footer 
        onSetNumberOfResultsPerPage={(i) => setNumberOfResultsPerPage(i)}  
        numberOfResultsPerPage={numberOfResultsPerPage}
      />
    </Layout>
  );
}
`}</CodeBlock>

      <p>
        In fact, there's nothing naive about this. Your code should look like a close approximation
        to this even once complex functionality has been added.
      </p>

      <p>
        Whenever your components - especially pages - begin to stray from something similar to the
        naive example, you should consider a refactor.
      </p>

      <h2>Improvements</h2>
      <p>Two things are missed from our first iteration;</p>
      <ol>
        <li>
          Layout: a common error that people make when trying to write components is to create
          spacing outside of the component which instead should be dealt with in the parent
          component. So... the DisplaySearchResult component should <i>display the search result</i>{" "}
          it should not add the gap between each component to separate them. The exception to this
          is when a prop is explicitly added to signal that there is some sort of
          margin/padding/layout etc.
        </li>
        <li>
          Lifecycle states: this is the "error", "loading" and "success" states. For more on this
          read <Link href={"guides/fetching-data-safely-react"}>Fetching Data Safely In React</Link>
          .
        </li>
      </ol>

      <p>
        After adding these additional items it may look more like the following but is still quite
        "naive" in the sense that even a non-developer would know approximately what is happening in
        this component.
      </p>

      <CodeBlock>{`import { useState } from "react";

const useSearchResults = () => {
  const searchResults = [
    { href: "someSite.co.uk", label: "some site", description: "a desc of some site" },
    { href: "anotherSite.com", label: "another site", description: "a desc of another site" },
    ...
  ];

  return { searchResults, status: "success" };
};

export default function SearchPage() {
  const { searchResults, status } = useSearchResults();
  const [numberOfPagesShown, setNumberOfPagesShown] = useState(1);
  const [numberOfResultsPerPage, setNumberOfResultsPerPage] = useState(20);

  const getCurrentResults = () => {
    return searchResults.slice(0, numberOfPagesShown * numberOfResultsPerPage);
  };

  return (
    <Layout>
      <Logo />
      <SearchBar />
      <VerticalSpacing />

      {status === "error" && <div>Error...</div>}
      {status === "loading" && <LoadingComponent withFullPageLayout={true} />}
      {status === "success" && (
        <>
          {getCurrentResults().map((searchResult, j) => (
            <>
              {j !== 0 && <VerticalSpacing />}
              <DisplaySearchResult searchResult={searchResult} />
            </>
          ))}

          <VerticalSpacing />
          <MoreSearchResultsBar onClick={() => setNumberOfPagesShown(numberOfPagesShown + 1)} />
        </>
      )}

      <VerticalSpacing />
      <Footer
        onSetNumberOfResultsPerPage={(i) => setNumberOfResultsPerPage(i)}
        numberOfResultsPerPage={numberOfResultsPerPage}
      />
    </Layout>
  );
}
`}</CodeBlock>

      <p>
        This should be common sense really, but it's good to be reminded of this once in a while.
      </p>
    </Typography>
  );
}

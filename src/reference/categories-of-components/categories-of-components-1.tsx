// import { useState } from "react";

// const useSearchResults = () => {
//   const searchResults = [
//     { href: "someSite.co.uk", label: "some site", description: "a desc of some site" },
//     { href: "anotherSite.com", label: "another site", description: "a desc of another site" },
//   ];

//   return { searchResults, status: "success" };
// };

// export default function SearchPage() {
//   const { searchResults, status } = useSearchResults();
//   const [numberOfPagesShown, setNumberOfPagesShown] = useState(1);
//   const [numberOfResultsPerPage, setNumberOfResultsPerPage] = useState(20);

//   const getCurrentResults = () => {
//     return searchResults.slice(0, numberOfPagesShown * numberOfResultsPerPage);
//   };

//   return (
//     <Layout>
//       <Logo />
//       <SearchBar />
//       <VerticalSpacing />

//       {status === "error" && <div>Error...</div>}
//       {status === "loading" && <LoadingComponent withFullPageLayout={true} />}
//       {status === "success" && (
//         <>
//           {getCurrentResults().map((searchResult, j) => (
//             <>
//               {j !== 0 && <VerticalSpacing />}
//               <DisplaySearchResult searchResult={searchResult} />
//             </>
//           ))}

//           <VerticalSpacing />
//           <MoreSearchResultsBar onClick={() => setNumberOfPagesShown(numberOfPagesShown + 1)} />
//         </>
//       )}

//       <VerticalSpacing />
//       <Footer
//         onSetNumberOfResultsPerPage={(i) => setNumberOfResultsPerPage(i)}
//         numberOfResultsPerPage={numberOfResultsPerPage}
//       />
//     </Layout>
//   );
// }

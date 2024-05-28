import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>The Facade Pattern</h1>
      <h2>What is it?</h2>

      <p>
        The facade pattern is any interface that obscures complex logic. This particular article is
        just meant to be a supplementary article alongside{" "}
        <Link href="/guides/write-naive-components">Write Naive Components</Link> &{" "}
        <Link href="/guides/categories-of-components">Categories of Components</Link>.
      </p>
      <p>
        When we first create the "naive" page and create the relevant components, we can use
        TypeScript to create interfaces for the new components that are simple to use and aid
        readability.
      </p>

      <h2>Advantages</h2>
      <p>
        By creating the component's interface before implementing the underlying logic, this keeps
        developers focused on building components without creating early abstractions.
      </p>
      <p>
        Additionally, by using the facade pattern, we can encapsulate the complexity of multiple
        components into a single, easy-to-use component. This not only makes the code more readable
        and maintainable but also adheres to general principles of clean architecture.
      </p>

      <h2>Extra Context</h2>
      <p>
        For additional ideas about this topic, watch the example from this Fireship video or Jeff
        Zhang's video on abstraction - both linked below.
      </p>
      <p className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tv-_1er1mWI?si=bi5YD5lBRSX3VTtM&amp;start=294"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </p>

      <p className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1c8epkTB4-U?si=AFpqU0_8fw2-j913"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </p>
    </Typography>
  );
}

import { CodeBlock, Toggle, Typography } from "@/components";
import { useState } from "react";

export default function Page() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  const ifShowAnnotations = (str: string) => {
    return showAnnotations ? str : "";
  };

  return (
    <Typography fullPage>
      <h1>Async Equals Uncertainty</h1>

      <h2>Intro</h2>
      <p>
        There are a number of errors which the convention of web developers is to not handle. This
        is an oversight that should be improved on.
      </p>
      <p>
        TypeScript developers can learn lessons from developers of other languages which are built
        to encourage type-safety, for example Golang. You don't need to know how to write Golang
        (sometimes called Go), but we will cover an example to show the difference.
      </p>

      <h2>TypeScript Example</h2>
      <p>Take the following TypeScript code;</p>
      <CodeBlock>{`const makeApiCall = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json()
  return data;
};`}</CodeBlock>

      <h2>Golang Example</h2>
      <p>
        Now, let's do the same with in Golang. Some of the code is self-explanatory but there are
        some differences that are worth noting;
      </p>
      <ol>
        <li>
          Golang can return more than one value - this function returns two - the first is an error
          the second is data represented as bytes.
        </li>
        <li>
          Golang treats errors as regular values that can be assigned to variables, passed as
          arguments, and returned from functions.
        </li>
      </ol>
      <p>You may find it helpful to turn on annotations with the toggle below;</p>
      <Toggle
        onChange={(x) => setShowAnnotations(x)}
        value={showAnnotations}
        label="Show Annotations"
      />
      <CodeBlock language="go">{`func makeApiCall(url string) (error, []byte) { ${ifShowAnnotations(
        "// (error, []byte) is the return values"
      )}
  response, err := http.Get(url) ${ifShowAnnotations("// http.Get is equivalent to fetch")}
  ${ifShowAnnotations("// below we handle the error")}
  if err != nil { ${ifShowAnnotations("// here we check if there is an error")}
    log.Printf("An error occurred, perhaps the url isn't correct: %v", err)
    return err, nil
  }
  
  body, err := ioutil.ReadAll(response.Body) ${ifShowAnnotations(
    "// ioutil.ReadAll is similar to JSON.parse but returns bytes instead of a string"
  )}
  ${ifShowAnnotations("// below we handle the error")}
  if err != nil {
    log.Printf("An error occurred, perhaps it can't be converted to bytes: %v", err)
    return err
  }

  return nil, body ${ifShowAnnotations(
    "// here we return the valid response, but first the 'error' which is nil"
  )}
}`}</CodeBlock>

      <h2>Comparison</h2>
      <p>
        If we compare the TypeScript code to the Golang code, the first thing we notice is that
        Golang is much more verbose. It's important to note that the code isn't performing the exact
        same actions, instead we are checking for an error at each stage and handling the error if
        it exists.
      </p>
      <p>
        Although TypeScript doesn't allow for returning multiple values, we can do something similar
        using an object, as follows;
      </p>

      <CodeBlock>{`const makeApiCall = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return { success: true, data: data } as const;
  } catch (e) {
    const error: { message: \`An error occurred, perhaps the url isn't correct or the data can't be converted to json: \${e.message}"\` } 
    
    return { success: false, error: error } as const;
  }
};`}</CodeBlock>
      <p>We are now handling errors in TypeScript similarly to how we handled them in Golang.</p>

      <h2>Summary</h2>
      <p>
        This should be done for all data-fetches, but actually most asynchronous actions have a
        chance that something could go wrong and as such a similar approach should be taken.
      </p>
    </Typography>
  );
}

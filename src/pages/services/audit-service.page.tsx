import { Typography } from "@/components";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Audit (insight) Service</h1>

      <h2>What we do</h2>
      <p>
        We can evaluate any TypeScript back-end or front-end project for various errors using a
        combination of automated and manual testing techniques. Automated tests systematically
        identify syntax errors, type mismatches, and potential run-time issues, while developer
        tests focus on logical flaws, incorrect assumptions and integration problems that might not
        be easily detectable through automation alone. This dual approach ensures a thorough
        evaluation, providing a clear picture of the project's current state and highlighting
        critical areas that require attention.
      </p>

      <h2>Insight</h2>
      <p>
        Our assessment provides valuable insights into potential run-time errors and helps identify
        blind spots in developers' understanding of TypeScript. By examining the codebase through
        both automated tools and expert analysis, we can pinpoint specific issues that may lead to
        performance bottlenecks, security vulnerabilities, or unexpected behavior. This detailed
        feedback is crucial for developers, as it not only reveals immediate problems but also
        educates them on common pitfalls and best practices in TypeScript development.
      </p>

      <h2>Improvement</h2>
      <p>
        Beyond error detection, our comprehensive assessment aims to deliver tangible strategies for
        improving code quality, enhancing maintainability, and ensuring adherence to best practices.
        We provide detailed reports that outline identified issues, their potential impact, and
        actionable recommendations for remediation.
      </p>
      <p>
        Our team also offers ongoing support to help implement these changes effectively. By
        following our guidance, development teams can create more robust, scalable, and reliable
        applications, ultimately boosting productivity and delivering higher-quality software to end
        users.
      </p>

      <h2>ReFlo audit</h2>
      <p>
        If you're working on a larger project, we can provide targeted assistance with a specific
        data flow within your application. This means we will conduct a thorough audit of a
        particular section of your app, tracing the entire process from where data is initially
        fetched to where it is ultimately sent to the user or system.
      </p>
      <p>
        By examining this flow in detail, we can identify any errors, or potential improvements,
        ensuring that your data handling is as reliable as possible. Our goal is to help you
        optimize this crucial aspect of your application, enhancing its overall performance and user
        experience.
      </p>
    </Typography>
  );
}

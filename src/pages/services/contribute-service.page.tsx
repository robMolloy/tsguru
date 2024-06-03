import { Typography } from "@/components";
import Link from "next/link";
export default function Page() {
  return (
    <Typography fullPage>
      <h1>Contribute Service</h1>
      <h2>What we do</h2>
      <p>
        We offer expert developer resources that seamlessly integrate with client teams,
        accelerating production and enhancing the quality of TypeScript projects. Collaborating
        closely with internal teams, we contribute to developing robust, future-proof solutions that
        align with in-house development practices. This collaborative approach fosters a deep
        understanding within internal teams, eliminating the need for a complex handover process.
        Additionally, we provide targeted training to enhance your developers' skills and project
        comprehension.
      </p>

      <h2>From build to maintenance phase</h2>
      <p>
        All the advantages outlined in <Link href="/services/build-service">Build service</Link> can
        be seamlessly integrated into collaboration with client teams, from build to maintenance
        phase. Our experts will lead any necessary changes, ensuring that the benefits of robust
        design, scalable architectures, and best practices in TypeScript and software engineering
        are fully realized.
      </p>

      <h2>Flexible resourcing</h2>
      <p>
        By leading any changes, we empower client teams to benefit from our expertise, enhancing
        their development processes and improving code quality to achieve efficient, future-proof
        solutions. This approach allows client developers to focus on their core responsibilities or
        allocate resources as they see fit, ensuring optimal productivity and flexibility.
      </p>
    </Typography>
  );
}

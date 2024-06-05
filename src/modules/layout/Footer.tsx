import { DaisyFooter, Typography } from "@/components";
import { GetInTouchForm } from "@/modules/getInTouchForm";

export const Footer = () => {
  return (
    <DaisyFooter>
      <Typography>
        <h2>Get in touch!</h2>
        <p>
          We welcome all enquiries! For a detailed discussion on how we can tailor our services to
          your unique situation, please contact us directly and one of our experts will get back to
          you. We are here to provide personalized guidance and support to ensure your project's
          success.
        </p>

        <GetInTouchForm onSubmitFail={() => {}} onSubmitSuccess={() => {}} />
      </Typography>
    </DaisyFooter>
  );
};

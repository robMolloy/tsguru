import { useRef, useState } from "react";
import { z } from "zod";

export type TGetInTouchFormProps = {
  onSubmitSuccess: () => void;
  onSubmitFail: () => void;
};

const getInitFormData = () => ({ email: "", details: "" });
const getInitFormErrors = () => ({ email: "", details: "" });

export const GetInTouchForm = (p: TGetInTouchFormProps) => {
  const [showSubmitSuccessMessage, setShowSubmitSuccessMessage] = useState(false);
  const [showSubmitFailMessage, setShowSubmitFailMessage] = useState(false);

  const [formData, setFormData] = useState(getInitFormData());
  const [formErrors, setFormErrors] = useState(getInitFormErrors());

  const emailInputRef = useRef<HTMLInputElement>(null);
  const detailsInputRef = useRef<HTMLTextAreaElement>(null);

  const checkEmailValue = (value: string) => {
    const schema = z.string().email();
    const parseResponse = schema.safeParse(value);
    if (parseResponse.success) return { success: true } as const;
    const errorMessage = parseResponse.error.issues.find((x) => x.message)?.message as string;

    return { success: false, error: errorMessage } as const;
  };
  const validateEmailInput = (value: string) => {
    const checkResponse = checkEmailValue(value);
    const emailFormError = checkResponse.success ? "" : checkResponse.error;

    setFormErrors({ ...formErrors, email: emailFormError });
  };

  const checkDetailsValue = (value: string) => {
    const schema = z.string().min(20).max(400);

    const parseResponse = schema.safeParse(value);
    if (parseResponse.success) return { success: true } as const;

    const errorMessage = parseResponse.error.issues.find((x) => x.message)?.message as string;
    return { success: false, error: errorMessage } as const;
  };

  const validateDetailsInput = (value: string) => {
    const checkResponse = checkDetailsValue(value);
    setFormErrors({ ...formErrors, details: checkResponse.success ? "" : checkResponse.error });
  };

  const validateFormInputs = () => {
    const checkEmailResponse = checkEmailValue(formData.email);
    const checkDetailsResponse = checkDetailsValue(formData.details);

    setFormErrors({
      email: checkEmailResponse.success ? "" : checkEmailResponse.error,
      details: checkDetailsResponse.success ? "" : checkDetailsResponse.error,
    });
  };

  const initForm = () => {
    setFormData(getInitFormData());
    setFormErrors(getInitFormErrors());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateFormInputs();

        const checkEmailResponse = checkEmailValue(formData.email);
        const checkDetailsResponse = checkDetailsValue(formData.details);

        if (!checkEmailResponse.success) emailInputRef.current?.focus();
        else if (!checkDetailsResponse.success) detailsInputRef.current?.focus();

        const isError = !checkEmailResponse.success || !checkDetailsResponse.success;
        if (!isError) {
          setShowSubmitSuccessMessage(true);
          setTimeout(() => setShowSubmitSuccessMessage(false), 4000);
          const data = { email: formData.email, message: formData.details };
          fetch("https://formspree.io/f/xwkgdand", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              Accept: "application/json",
            },
          });
          initForm();
        } else {
          setShowSubmitFailMessage(true);
          setTimeout(() => setShowSubmitFailMessage(false), 4000);
        }
      }}
    >
      {showSubmitSuccessMessage && (
        <div className="toast toast-center toast-top z-[99]">
          <div className="alert alert-info flex flex-col gap-0 border-white">
            <div className="text-lg">Submitted successfully</div>
            <span>We will contact you shortly</span>
          </div>
        </div>
      )}
      {showSubmitFailMessage &&
        (() => {
          const errorEntries = Object.entries(formErrors).filter((x) => !!x[1]);

          return (
            <div className="toast toast-center toast-top z-[99]">
              <div className="alert alert-error flex flex-col gap-0 border-white">
                <div className="text-xl">
                  Form contains the following error{errorEntries.length > 1 ? "s" : ""};
                </div>
                <div className="flex flex-col">
                  {errorEntries.map((x) => (
                    <span key={`form-error-${x[0]}`}>{x[1]}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

      <div id="get-in-touch-form" className="flex flex-col">
        <div>
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <input
            ref={emailInputRef}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-gray-500"
            value={formData.email}
            onInput={(initEvt) => {
              const evt = initEvt as unknown as { target: { value: string } };
              const value = evt.target.value;
              setFormData({ ...formData, email: value });
              validateEmailInput(value);
            }}
          />
          <div className="label">
            <span className={`badge badge-error w-full ${formErrors.email ? "" : "opacity-0"}`}>
              {formErrors.email}
            </span>
          </div>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Let us know what you'd like to discuss</span>
          </div>
          <textarea
            ref={detailsInputRef}
            className="textarea textarea-bordered h-24 bg-white text-gray-500"
            placeholder="We would like to..."
            value={formData.details}
            onInput={(initEvt) => {
              const evt = initEvt as unknown as { target: { value: string } };
              const value = evt.target.value;
              setFormData((x) => ({ ...x, details: value }));
              validateDetailsInput(value);
            }}
          />
          <div className="label">
            <span className={`badge badge-error w-full ${formErrors.details ? "" : "opacity-0"}`}>
              {formErrors.details}
            </span>
          </div>
        </label>

        <div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

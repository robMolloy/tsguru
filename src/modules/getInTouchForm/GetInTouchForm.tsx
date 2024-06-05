import React, { useEffect, useState } from "react";
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

  const [firstEmailCheck, setFirstEmailCheck] = useState(true);
  const [firstDetailsCheck, setFirstDetailsCheck] = useState(true);
  const [formData, setFormData] = useState(getInitFormData());
  const [formErrors, setFormErrors] = useState(getInitFormErrors());

  const checkEmailInput = () => {
    const value = formData.email;

    const schema = z.string().email();
    const parseResponse = schema.safeParse(value);
    if (parseResponse.success) return { success: true } as const;

    const initEmailError = parseResponse.error.issues.find((x) => x.message);
    const emailErrorMessage = initEmailError?.message as string;
    return { success: false, error: emailErrorMessage } as const;
  };

  const validateEmailInput = () => {
    const checkResponse = checkEmailInput();
    setFormErrors({ ...formErrors, email: checkResponse.success ? "" : checkResponse.error });
  };

  const checkDetailsInput = () => {
    const schema = z.string().min(20).max(400);

    const parseResponse = schema.safeParse(formData.details);
    if (parseResponse.success) return { success: true } as const;

    const errorMessage = parseResponse.error.issues.find((x) => x.message)?.message as string;
    return { success: false, error: errorMessage } as const;
  };

  const validateDetailsInput = () => {
    const checkResponse = checkDetailsInput();
    setFormErrors({ ...formErrors, details: checkResponse.success ? "" : checkResponse.error });
  };

  const initForm = () => {
    setFirstEmailCheck(true);
    setFirstDetailsCheck(true);
    setFormData(getInitFormData());
    setFormErrors(getInitFormErrors());
  };

  useEffect(() => {
    console.log("det", Math.random());

    if (firstDetailsCheck) return validateDetailsInput();

    setFirstDetailsCheck(false);
    setFormErrors(getInitFormErrors());
  }, [formData.details]);

  useEffect(() => {
    console.log("em", Math.random());
    if (!firstEmailCheck) return validateEmailInput();

    setFirstEmailCheck(false);
    setFormErrors(getInitFormErrors());
  }, [formData.email]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        validateEmailInput();
        validateDetailsInput();
        const isError = !!Object.values(formErrors).find((x) => !!x);
        if (!isError) {
          setShowSubmitSuccessMessage(true);
          setTimeout(() => setShowSubmitSuccessMessage(false), 4000);
          initForm();
        } else {
          setShowSubmitFailMessage(true);
          setTimeout(() => setShowSubmitFailMessage(false), 4000);
        }
      }}
    >
      {showSubmitSuccessMessage && (
        <div className="toast toast-center toast-top z-[99]">
          <div className="alert alert-info border-white">
            <span>Submitted successfully</span>
          </div>
        </div>
      )}
      {showSubmitFailMessage && (
        <div className="toast toast-center toast-top z-[99]">
          <div className="alert alert-error border-white">
            <span>
              <span>Form contains the following error(s);</span>
              <div className="flex flex-col">
                {Object.entries(formErrors)
                  .filter((x) => !!x[1])
                  .map((x) => (
                    <span key={`form-error-${x[0]}`}>{x[1]}</span>
                  ))}
              </div>
            </span>
          </div>
        </div>
      )}

      <div id="get-in-touch-form" className="flex flex-col gap-2">
        <div>
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-gray-500"
            value={formData.email}
            onInput={(initEvt) => {
              const evt = initEvt as unknown as { target: { value: string } };
              const value = evt.target.value;
              setFormData((x) => {
                return { ...x, email: value };
              });
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
            className="textarea textarea-bordered h-24 bg-white text-gray-500"
            placeholder="We would like to..."
            value={formData.details}
            onInput={(initEvt) => {
              const evt = initEvt as unknown as { target: { value: string } };
              const value = evt.target.value;
              setFormData((x) => ({ ...x, details: value }));
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

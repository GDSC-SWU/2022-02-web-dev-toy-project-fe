import React, { useState } from "react";
import SignUpPage from "../../pages/SignUpPage";
import FormSuccess from "../../pages/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted((prev) => !prev);
  };

  return (
    <>
      <div>
        {!isSubmitted ? (
          <SignUpPage submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;

import React, { useState } from "react";
import SignUpPage from "../../pages/SignUpPage";
import FormSuccess from "../../pages/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

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

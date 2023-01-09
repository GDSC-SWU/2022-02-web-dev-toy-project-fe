import React, { useState } from 'react'
import SignUpPage from './SignUpPage';
import FormSuccess from './FormSuccess';


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
  )
}

export default Form
import React, { forwardRef } from "react";
import styles from "./InputTextBox.module.css";

function InputTextBox(props) {
  const handleChange = (e) => {
    props.handleUserInput(e.target.value);
  };

  return (
    <div>
      <div className={styles.subTitle}>
        {props.subTitle} <span className={styles.star}> *</span>
      </div>
      <input
        className={styles.inputAddress}
        placeholder={props.placeholderText}
        //   value={userWebMail}
        //   onChange={handleUserWebMail}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
export default InputTextBox;

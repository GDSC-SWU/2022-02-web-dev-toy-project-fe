import React from "react";
import styles from "./InputTextBox.module.css";

function InputTextBox(props) {
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
      />
    </div>
  );
}
export default InputTextBox;

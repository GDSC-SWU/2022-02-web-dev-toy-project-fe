import React from "react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [userWebMail, setUserWebMail] = useState("");

  const handleUserWebMail = (e) => {
    setUserWebMail(e.target.value);
  };

  // const createUser = async () => {
  //   const { data } = await axios.post(`auth`);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className="form">
          <div className={styles.form_inputs}>
            <label htmlFor="userWebmail" className={styles.form_label}>
              학교 웹메일을 입력해주세요
            </label>
            <p className={styles.input_subTitle}>웹메일</p>
            <input
              className={styles.input_webmail}
              placeholder="ex) swuniv@swu.ac.kr"
              value={userWebMail}
              onChange={handleUserWebMail}
            />
            {/* {errors.userNickname && <p>{errors.userNickname}</p>} */}
          </div>
          <Link
            to={userWebMail ? "/home" : null}
            className={
              userWebMail.length ? styles.confirmBtn : styles.confirmBtnDisable
            }
            state={userWebMail}
          >
            확인
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

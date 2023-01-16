import React from "react";
import styles from "./ConfirmWebmailPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [userAuthNumber, setuserAuthNumber] = useState("");

  const handleUserAuthNumber = (e) => {
    setuserAuthNumber(e.target.value);
  };

  // const createUser = async () => {
  //   const { data } = await axios.post(`auth`);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className="form">
          <div className={styles.form_inputs}>
            <label htmlFor="userAuthNumber" className={styles.form_label}>
              인증번호를 입력해주세요
            </label>
            <p className={styles.input_subTitle}>인증번호</p>
            <input
              className={styles.input_authNumber}
              placeholder="인증번호입력(3분 이내)"
              value={userAuthNumber}
              onChange={handleUserAuthNumber}
            />
            <p className={styles.alert}>
              ※ 이메일로 발송된 인증번호를 입력해주세요.
            </p>
            {/* {errors.userNickname && <p>{errors.userNickname}</p>} */}
          </div>
          <Link
            to={userAuthNumber ? "/welcome" : null}
            className={
              userAuthNumber.length
                ? styles.confirmBtn
                : styles.confirmBtnDisable
            }
            state={userAuthNumber}
          >
            학교 인증 완료하기
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

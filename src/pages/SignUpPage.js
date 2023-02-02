import React from "react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import NavBar from "../components/UI/NavigationBar";

function SignUp() {
  const [userWebMail, setUserWebMail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  // const handleUserWebMail = (e) => {
  //   setUserWebMail(e.target.value);
  // };

  // clear input field's value
  const handleClick = () => {
    setUserWebMail("");
  };

  // 이메일 유효성 검사
  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setUserWebMail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // const createUser = async () => {
  //   const { data } = await axios.post(`auth`);
  // };

  return (
    <div className={styles.container}>
      <Link to="/">
        <NavBar />
      </Link>
      <div className={styles.wrapper}>
        <form className="form">
          <div className={styles.form_inputs}>
            <label htmlFor="userWebmail" className={styles.form_label}>
              학교 웹메일을 입력해주세요
            </label>
            <p className={styles.input_subTitle}>웹메일</p>
            <input
              className={styles.input_webmail}
              placeholder="@swu.ac.kr"
              value={userWebMail}
              onChange={onChangeEmail}
              type="email"
            />
            {userWebMail.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
            <button
              className={styles.clearInputButton}
              onClick={handleClick}
            ></button>
            {/* {errors.userNickname && <p>{errors.userNickname}</p>} */}
          </div>
          <Link
            to={isEmail ? "/confirmWebMail" : null}
            className={isEmail ? styles.confirmBtn : styles.confirmBtnDisable}
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

import React from "react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import NavBar from "../components/UI/NavigationBar";
import axios from "axios";
import API from "../../src/api/API";
import { useSelector } from "react-redux";

function SignUp() {
  const [userWebMail, setUserWebMail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  // const codeRef = useRef();
  const accessToken = useSelector((state) => state.accessToken);

  // const handleUserWebMail = (e) => {
  //   setUserWebMail(e.target.value);
  // };

  // API
  async function postData() {
    // const json = {
    //   email: userWebMail,
    // };
    // console.log(json);
    try {
      //응답 성공
      const posts = await API.post(
        "/auth/user/email",
        {
          email: userWebMail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ).then((response) => {
        // 응답 처리
        console.log(response);
      });
      console.log(posts);
    } catch (error) {
      // 예외 처리
      console.log(error);
    }
  }

  // clear input field's value
  const handleClick = () => {
    setUserWebMail("");
  };

  const onSubmitHandler = () => {
    postData();
    console.log(userWebMail);
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
            state={{ userWebMail: userWebMail }}
            onClick={onSubmitHandler}
          >
            확인
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

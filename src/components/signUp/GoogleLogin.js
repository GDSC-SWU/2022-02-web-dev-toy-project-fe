import React from "react";
import { postLogin } from "../../api/postLogin";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
// import { useGoogleLogout } from "@react-oauth/google";
import styles from "./GoogleLogin.module.css";
import Modal from "./Modal.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function GoogleLogIn() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const signIn = useGoogleLogin({
    /* onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      postLogin(credentialResponse.access_token);
      navigation("/email");
    }, 
    onSuccess: (res) => {
      console.log(res);
      postLogin(res.code);
      navigation("/email");
    },
    onError: () => {
      console.log("Login Failed");
    },*/
  });

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.subTitle}>서울여대 분실물 공유 서비스</p>
          <h1 className={styles.title}>
            슈파인드 <span>.</span>
          </h1>
        </div>

        <div className={styles.btnContainer}>
          {/* <Link to="/nickname"> */}

          <GoogleLogin
            onSuccess={(res) => {
              postLogin(dispatch, res.credential);
              navigation("/email");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          {/* <button onClick={() => signIn()} className={styles.googleLoginButton}>
            <span className={styles.googleIcon}>
              <FaGoogle style={{ fontSize: "16px" }} />
            </span>
            Sign in with Google
          </button> */}

          <div>{/* <button onClick={googleLogout}>로그아웃</button> */}</div>
          {/* </Link> */}
          <Modal />
        </div>
      </div>
    </>
  );
}

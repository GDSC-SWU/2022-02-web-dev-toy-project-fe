import React from "react";
import { postLogin } from "../api/postLogin";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styles from "./GoogleLogin.module.css";
import Modal from "./Modal.js";
import { Link } from "react-router-dom";

export default function GoogleLogIn() {
  // 콜백 함수
  const onGoogleLogIn = async (res) => {
    const result = await postLogin(res);

    console.log(result);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className={styles.wrapper}>
        <p className={styles.subTitle}>서울여대 분실물 공유 서비스</p>
        <h1 className={styles.title}>
          슈파인드 <span>.</span>
        </h1>
      </div>
      <Link to="/nickname">
        <div className={styles.btnContainer}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // credential만 BE로 전송
              onGoogleLogIn(credentialResponse.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <Modal />
        </div>
      </Link>
    </GoogleOAuthProvider>
  );
}

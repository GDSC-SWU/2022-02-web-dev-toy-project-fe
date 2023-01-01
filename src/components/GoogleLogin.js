import React from "react";
import { postLogin } from "../api/postLogin";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleLogIn() {
  // 콜백 함수
  const onGoogleLogIn = async (res) => {
    const result = await postLogin(res);

    console.log(result);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // credential만 BE로 전송
          onGoogleLogIn(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

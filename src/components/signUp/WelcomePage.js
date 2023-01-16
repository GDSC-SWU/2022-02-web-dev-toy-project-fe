import React from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.welcomeTitle}>학교 인증 성공!</p>
        <p className={styles.welcomeTitle2}>슈파인드에 오신걸 환영합니다</p>
        <div className={styles.buttonWrapper}>
          <Link to={"/home"} className={styles.confirmBtn}>
            확인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

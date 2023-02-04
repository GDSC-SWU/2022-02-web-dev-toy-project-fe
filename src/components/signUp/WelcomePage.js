import React from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.welcomeTitle}>회원가입 성공!</p>
        <p className={styles.welcomeTitle2}>
          슈파인드<span>.</span>
        </p>
        <Link to={"/home"} className={styles.confirmBtn}>
          슈파인드 시작하기
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Nav.module.css";
import setUserInfo from "../store/setUserInfo";

function Nav() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // 테스트용
  const onSignInClick = () => {
    console.log("SignInClick");
    setUserInfo(dispatch, "anonymous", "1234");
  };
  const onSignOutClick = () => {
    console.log("SignOutClick");
    if (window.confirm("로그아웃 하시겠습니까?")) {
      setUserInfo(dispatch);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* title 클릭 시 메인으로 이동 */}
        <a href="/" className={styles.titleText}>
          TITLE
        </a>
      </div>
      {/* 각 메뉴 선택 시 이동 */}
      <ul className={styles.menu}>
        <li>
          <a
            href="#section"
            onClick={() => {
              console.log("MENU1 Cliked");
            }}
            className={styles.menuItem}
          >
            MENU1
          </a>
        </li>
        <li>
          <a
            href="#section"
            onClick={() => {
              console.log("MENU2 Cliked");
            }}
            className={styles.menuItem}
          >
            MENU2
          </a>
        </li>
        <li>
          <a
            href="#section"
            onClick={() => {
              console.log("MENU3 Cliked");
            }}
            className={styles.menuItem}
          >
            MENU3
          </a>
        </li>
        <li>
          <a
            href="#section"
            onClick={() => {
              console.log("MENU4 Cliked");
            }}
            className={styles.menuItem}
          >
            MENU4
          </a>
        </li>
      </ul>
      {/* 유저 정보 (로그인 / 마이페이지 + 로그아웃) */}
      <div className={styles.user}>
        {state.userName !== null ? (
          // My Page로 연결
          <a
            href="#section"
            onClick={onSignOutClick}
            className={styles.nickName}
          >
            {state.userName} 님
          </a>
        ) : (
          // 회원가입 페이지로 연결
          <a href="#section" onClick={onSignInClick} className={styles.signIn}>
            Sign In
          </a>
        )}
      </div>
    </div>
  );
}

export default Nav;

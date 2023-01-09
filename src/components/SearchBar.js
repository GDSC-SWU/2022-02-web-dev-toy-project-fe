import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBar.module.css";
import setUserInfo from "../store/setUserInfo";
import { ReactComponent as SearchIcon } from "../assets/images/search_icon.svg";
import { ReactComponent as Profile } from "../assets/images/profile_none.svg";
import { Link } from "react-router-dom";

function SearchBar() {
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
      <div className={styles.searchContainer}>
        <div className={styles.searchIconWrapper}>
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="여기서 분실물 검색"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.profileWrapper}>
        {state.userName !== null ? (
          // 구글 프로필로 연결
          <Link
            to="#section"
            onClick={onSignOutClick}
            className={styles.signed}
          >
            <Profile className={styles.profile} />
          </Link>
        ) : (
          // 회원가입 페이지로 연결
          <Link
            to="#section"
            onClick={onSignInClick}
            className={styles.unsigned}
          >
            <Profile className={styles.profile} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

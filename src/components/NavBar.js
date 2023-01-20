import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as HomeIcon } from "../assets/images/nav/home_icon_selected.svg";
import { ReactComponent as ListIcon } from "../assets/images/nav/list_icon.svg";
import { ReactComponent as NewPostIcon } from "../assets/images/nav/new_post_icon.svg";
import { ReactComponent as BellIcon } from "../assets/images/nav/bell_icon.svg";
import { ReactComponent as MypageIcon } from "../assets/images/nav/mypage_icon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.homeWrapper}>
        <Link to="/home">
          <HomeIcon className={styles.homeIcon} />
        </Link>
      </div>
      <div className={styles.listWrapper}>
        <Link to="/">
          <ListIcon className={styles.listIcon} />
        </Link>
      </div>
      <div className={styles.newPostWrapper}>
        <Link to="/">
          <NewPostIcon className={styles.newPostIcon} />
        </Link>
      </div>
      <div className={styles.bellWrapper}>
        <BellIcon className={styles.bellIcon} />
      </div>
      <div className={styles.mypageWrapper}>
        <MypageIcon className={styles.mypageIcon} />
      </div>
    </div>
  );
}

export default NavBar;

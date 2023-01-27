import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as HomeIcon } from "../assets/images/home_icon.svg";
import { ReactComponent as ListIcon } from "../assets/images/home_icon_list.svg";
import { ReactComponent as NewPostIcon } from "../assets/images/new_post_icon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.homeWrapper}>
        <Link to="/home">
          <HomeIcon className={styles.homeIcon} />
        </Link>
      </div>
      <div className={styles.newPostWrapper}>
        <Link to="/">
          <NewPostIcon className={styles.newPostIcon} />
        </Link>
      </div>
      <div className={styles.listWrapper}>
        <ListIcon className={styles.listIcon} />
      </div>
    </div>
  );
}

export default NavBar;

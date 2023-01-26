import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ReactComponent as HomeIcon } from "../../assets/images/nav/home_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/images/nav/list_icon.svg";
import { ReactComponent as NewPostIcon } from "../../assets/images/nav/new_post_icon.svg";
import { ReactComponent as BellIcon } from "../../assets/images/nav/bell_icon.svg";
import { ReactComponent as MypageIcon } from "../../assets/images/nav/mypage_icon.svg";
import { ReactComponent as HomeIconSelected } from "../../assets/images/nav/home_icon_selected.svg";
import { ReactComponent as ListIconSelected } from "../../assets/images/nav/list_icon_selected.svg";
import { ReactComponent as BellIconSelected } from "../../assets/images/nav/bell_icon_selected.svg";
import { ReactComponent as MypageIconSelected } from "../../assets/images/nav/mypage_icon_selected.svg";

function NavBar() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const location = useLocation();

  // Link path에 따라 현재 메뉴 state 변화
  useEffect(() => {
    let menu = 0;

    switch (location.pathname) {
      case "/home":
        break;
      case "/home/list":
        menu = 1;
        break;
      case "/home/search":
        menu = 1;
        break;
      case "/home/newpost":
        menu = 2;
        break;
      case "/home/notification":
        menu = 3;
        break;
      case "/home/mypage":
        menu = 4;
        break;
      default:
        break;
    }

    setCurrentMenu(menu);
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.homeWrapper}>
        <Link to="/home">
          {currentMenu === 0 ? (
            <HomeIconSelected className={styles.homeIcon} />
          ) : (
            <HomeIcon className={styles.homeIcon} />
          )}
        </Link>
      </div>
      <div className={styles.listWrapper}>
        <Link to="/home/list">
          {currentMenu === 1 ? (
            <ListIconSelected className={styles.listIcon} />
          ) : (
            <ListIcon className={styles.listIcon} />
          )}
        </Link>
      </div>
      <div className={styles.newPostWrapper}>
        <Link to="/">
          <NewPostIcon className={styles.newPostIcon} />
        </Link>
      </div>
      <div className={styles.bellWrapper}>
        {currentMenu === 3 ? (
          <BellIconSelected className={styles.bellIcon} />
        ) : (
          <BellIcon className={styles.bellIcon} />
        )}
      </div>
      <div className={styles.mypageWrapper}>
        {" "}
        {currentMenu === 4 ? (
          <MypageIconSelected className={styles.mypageIcon} />
        ) : (
          <MypageIcon className={styles.mypageIcon} />
        )}
      </div>
    </div>
  );
}

export default NavBar;

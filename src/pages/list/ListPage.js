import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ListPage.module.css";
import FoundList from "./FoundList";
import LostList from "./LostList";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";

const tabList = {
  0: <FoundList />,
  1: <LostList />,
};

function ListPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.tabBarContainer}>
          <div className={styles.tabWrapper}>
            <ul className={styles.tab}>
              <li
                className={`${styles.tabLi} ${tab === 0 && styles.activeTab}`}
                onClick={() => {
                  const tab = 0;
                  setTab(tab);
                }}
              >
                찾아가세요
              </li>
              <li
                className={`${styles.tabLi} ${tab === 1 && styles.activeTab}`}
                onClick={() => {
                  const tab = 1;
                  setTab(tab);
                }}
              >
                잃어버렸어요
              </li>
            </ul>
          </div>
          <div className={styles.searchWrapper}>
            <Link to="/home/search">
              <SearchIcon width={22} height={22} fill={"#000000"} />
            </Link>
          </div>
        </div>
        <div className={styles.border}>
          <div
            className={`${styles.borderActive} ${
              tab === 0 ? styles.foundBorder : styles.lostBorder
            }`}
          ></div>
        </div>
      </div>
      <div className={styles.content}>{tabList[tab]}</div>
    </div>
  );
}

export default ListPage;

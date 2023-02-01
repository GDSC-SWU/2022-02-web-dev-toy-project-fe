import { useRef, useState } from "react";
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
  const tab1Ref = useRef(null);
  const tab2Ref = useRef(null);

  console.dir(tab1Ref.current);

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
                ref={tab1Ref}
              >
                습득물
              </li>
              <li
                className={`${styles.tabLi} ${tab === 1 && styles.activeTab}`}
                onClick={() => {
                  const tab = 1;
                  setTab(tab);
                }}
                ref={tab2Ref}
              >
                분실물
              </li>
            </ul>
          </div>
          <div className={styles.searchWrapper}>
            <Link to="/home/search">
              <SearchIcon width={22} height={22} fill={"#000000"} />
            </Link>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
      <div className={styles.content}>{tabList[tab]}</div>
    </div>
  );
}

export default ListPage;

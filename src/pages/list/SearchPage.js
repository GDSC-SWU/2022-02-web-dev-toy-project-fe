import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchPage.module.css";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";

function SearchPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const inputRef = useRef(null);

  // 검색 input 창에 focus
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarWrapper}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon
              width={22}
              height={22}
              fill={"#878787"}
              className={styles.searchIcon}
            />
          </div>
          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              placeholder="여기서 분실물 검색"
              className={styles.searchInput}
              ref={inputRef}
            />
          </div>
        </div>

        <div className={styles.cancelWrapper}>
          <Link to="/home/list" style={{ textDecoration: "none" }}>
            <span className={styles.cancel}>취소</span>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        {isLoaded ? (
          <div></div>
        ) : (
          <div className={styles.searchHelpContainer}>
            <div className={styles.searchIconBigWrapper}>
              <SearchIcon
                width={56}
                height={56}
                fill={"#000000"}
                className={styles.searchIconBig}
              />
            </div>
            <div className={styles.searchHelpWrapper}>
              <span className={styles.searchHelp}>이렇게 검색해 보세요</span>
            </div>
            <div className={styles.searchHelpSubWrapper}>
              <span className={styles.searchHelpSub}>장소나 제품명</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;

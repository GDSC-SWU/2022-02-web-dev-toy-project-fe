import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";
import { ReactComponent as TypeChangeIcon } from "../../assets/images/change_type_icon.svg";

function SearchBar({ isFound, onClickType }) {
  return (
    <div className={styles.container}>
      <div
        onClick={onClickType}
        className={`${styles.searchTypeContainer} ${
          isFound ? styles.searchFoundContainer : styles.searchLostContainer
        }`}
      >
        <div className={styles.searchTypeIconWrapper}>
          <TypeChangeIcon className={styles.searchTypeIcon} />
        </div>
        <div className={styles.searchType}>{isFound ? "습득" : "분실"}</div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchIconWrapper}>
          <SearchIcon
            className={styles.searchIcon}
            width={14}
            height={14}
            fill={"#ababab"}
          />
        </div>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="여기서 분실물 검색"
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

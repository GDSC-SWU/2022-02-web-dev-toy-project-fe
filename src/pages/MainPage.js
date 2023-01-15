import { useState } from "react";
import styles from "./MainPage.module.css";
import MainMap from "../components/main/MainMap.js";
import SearchBar from "../components/main/SearchBar";
import CategoryBar from "../components/main/CategoryBar";

function MainPage() {
  // 현재 선택한 타입 (습득 / 분실)
  const [isFound, setIsFound] = useState(true);
  // 현재 선택한 카테고리 (전체 / 전자제품 ...)
  const [currentCategory, setCurrentCatetory] = useState("전체");

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <SearchBar isFound={isFound} />
        <CategoryBar currentCategory={currentCategory} />
      </div>
      <div className={styles.content}>
        <div className={styles.mapWrapper}></div>
      </div>
    </div>
  );
}

export default MainPage;

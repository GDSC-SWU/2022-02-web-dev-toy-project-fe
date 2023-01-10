import styles from "./HomePage.module.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchBar from "../components/main/SearchBar";
import CategoryBar from "../components/main/CategoryBar";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.searchBar}>
        <SearchBar />
        <CategoryBar />
      </div>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.content}>
        <Routes>
          {/* NAV 컴포넌트에 설정한 href로 라우팅 */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default HomePage;

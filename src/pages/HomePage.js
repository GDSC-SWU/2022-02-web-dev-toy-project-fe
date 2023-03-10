import styles from "./HomePage.module.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "../components/navigation/NavBar";
import ListPage from "./list/ListPage";
import SearchPage from "./list/SearchPage";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.content}>
        <Routes>
          {/* NAV 컴포넌트에 설정한 href로 라우팅 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default HomePage;

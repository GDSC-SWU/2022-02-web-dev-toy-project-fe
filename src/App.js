import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.content}>
        <Router>
          <Routes>
            {/* NAV 컴포넌트에 설정한 href로 라우팅 */}
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;

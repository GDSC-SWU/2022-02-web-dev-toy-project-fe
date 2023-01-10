import styles from "./App.module.css";
import GoogleLogin from "./components/signUp/GoogleLogin";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<GoogleLogin />} />
          <Route path="/nickname" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

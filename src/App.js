import styles from "./App.module.css";
import GoogleLogin from "./components/signUp/GoogleLogin";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ConfirmWebmailPage from "./pages/ConfirmWebmailPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NewpostRoutes from "./components/write/NewpostRoutes";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<GoogleLogin />} />
          <Route path="/email" element={<SignUpPage />} />
          <Route path="/confirmWebMail" element={<ConfirmWebmailPage />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/detail/:postid" element={<DetailPage />} />
          <Route path="/newpost/*" element={<NewpostRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

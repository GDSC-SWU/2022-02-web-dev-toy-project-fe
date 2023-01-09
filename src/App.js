import styles from "./App.module.css";
//import SignUpPage from "./pages/SignUpPage.js";
import GoogleLogIn from "./components/GoogleLogin";
function App() {
  return (
    <div className={styles.App}>
      <GoogleLogIn />
    </div>
  );
}

export default App;
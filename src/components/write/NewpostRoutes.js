import styles from "./NewpostRoutes.module.css";
import { Routes, Route } from "react-router-dom";
import SetLocation from "./SetLocation";
import CreatePost from "./CreatePost";
import LocationList from "./LocationList";

function NewpostRoutes() {
  return (
    <div className={styles.container}>
      <Routes>
        {/* NAV 컴포넌트에 설정한 href로 라우팅 */}
        <Route path="/" element={<SetLocation />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/locationList" element={<LocationList />} />
      </Routes>
    </div>
  );
}

export default NewpostRoutes;

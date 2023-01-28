import { useLocation } from "react-router-dom";
import Location from "./Location";
import styles from "./LocationList.module.css";

function LocationList() {
  const location = useLocation();
  const currentDetailLoc = location.state.detail; // 이전 페이지에서 가져온 세부 위치 (아직 작성하지 않은 상태에서 넘어왔다면 null)

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Location detail={currentDetailLoc} />
        <Location detail={currentDetailLoc} />
        <Location detail={currentDetailLoc} />
        <Location detail={currentDetailLoc} />
        <Location detail={currentDetailLoc} />
      </div>
    </div>
  );
}

export default LocationList;

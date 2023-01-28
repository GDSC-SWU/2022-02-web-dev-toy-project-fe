import { useNavigate } from "react-router-dom";
import styles from "./Location.module.css";
import locationIcon from "./location.png";
function Location({ detail }) {
  const navigate = useNavigate();
  const loc = "서울여자대학교";
  const onLocClick = () => {
    // 위치 선택 시
    navigate("/newpost", { state: { loc: loc, detail: detail } });
  };

  return (
    <>
      <div className={styles.container} onClick={onLocClick}>
        <div className={styles.icon}>
          <img src={locationIcon} alt="location"></img>
        </div>
        <div className={styles.address}>
          <div className={styles.building}>{loc}</div>
          <div className={styles.detailAddress}>서울 노원구 화랑로 621</div>
        </div>
      </div>
      <div className={styles.bar}></div>
    </>
  );
}

export default Location;

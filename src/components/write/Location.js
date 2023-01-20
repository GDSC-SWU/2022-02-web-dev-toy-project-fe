import styles from "./Location.module.css";
import locationIcon from "./location.png";
function Location() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img src={locationIcon} alt="location"></img>
        </div>
        <div className={styles.address}>
          <div className={styles.building}>서울여자대학교</div>
          <div className={styles.detailAddress}>서울 노원구 화랑로 621</div>
        </div>
      </div>
      <div className={styles.bar}></div>
    </>
  );
}

export default Location;

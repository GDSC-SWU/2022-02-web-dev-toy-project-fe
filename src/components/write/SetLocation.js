import styles from "./SetLocation.module.css";
import { Link } from "react-router-dom";
import InputTextbox from "./InputTextBox";

function SetLocation() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>습득한 위치를 입력해 주세요</div>
        <div className={styles.subTitle}>
          습득 위치<span className={styles.star}> *</span>
        </div>
        <Link to="/locationList">
          <button className={styles.locateButton}>위치 입력하러 가기</button>
        </Link>
        <InputTextbox
          subTitle="상세 주소"
          placeholderText="상세 주소를 입력해주세요."
        />
        <div></div>
        <Link to={"/createpost"}>다음</Link>
      </div>
    </div>
  );
}

export default SetLocation;

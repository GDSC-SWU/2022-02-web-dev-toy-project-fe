import styles from "./SetLocation.module.css";
import { Link } from "react-router-dom";

function SetLocation() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>습득한 위치를 입력해 주세요</div>
        <div className={styles.subTitle}>습득 위치</div>
        <button className={styles.locateButton}>위치 입력하러 가기</button>
        <div className={styles.subTitle}>상세 주소</div>
        <input
          className={styles.inputAddress}
          placeholder="게시글 제목을 입력해주세요"
          //   value={userWebMail}
          //   onChange={handleUserWebMail}
        />
        <div></div>
        <Link to={"/write"} className={styles.confirmBtn}>
          다음
        </Link>
      </div>
    </div>
  );
}

export default SetLocation;

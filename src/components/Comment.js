import styles from "./Comment.module.css";
import { ReactComponent as Profile } from "../assets/images/postDetail/profile_none.svg";

const Comment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.writerContainer}>
        <div className={styles.profileIconWrapper}>
          <Profile />
        </div>
        <div className={styles.writerWrapper}>
          <span className={styles.writer}>익명1</span>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.line}>헉 혹시 오른쪽 세 번째 자리였나요?</p>
      </div>
      <div className={styles.publishDateContainer}>
        <span className={styles.publishDate}>01/18</span>
        <span className={styles.publishDate}>20:41</span>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Comment;

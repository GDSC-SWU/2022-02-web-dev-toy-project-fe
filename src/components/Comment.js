import styles from "./Comment.module.css";
import parseDate from "../util/hooks/parseDate";
import { ReactComponent as Profile } from "../assets/images/postDetail/profile_none.svg";

const Comment = ({ comment, num }) => {
  return (
    <div className={styles.container}>
      <div className={styles.writerContainer}>
        <div className={styles.profileIconWrapper}>
          <Profile />
        </div>
        <div className={styles.writerWrapper}>
          <span className={styles.writer}>{/* `익명${num}` */}익명1</span>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.line}>
          {/* comment.content */}헉 혹시 오른쪽 세 번째 자리였나요?
        </p>
      </div>
      <div className={styles.publishDateContainer}>
        <span className={styles.publishDate}>
          {/* parseDate(comment.commentDate, true) */}01/18
        </span>
        <span className={styles.publishDate}>
          {/* parseDate(comment.commentDate, false) */}20:41
        </span>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Comment;

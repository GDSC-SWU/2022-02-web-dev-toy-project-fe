import styles from "./Comment.module.css";
import parseDate from "../util/parseDate";
import { ReactComponent as Profile } from "../assets/images/postDetail/profile_none.svg";

const Comment = ({ comment, num }) => {
  return (
    <div className={styles.container}>
      <div className={styles.writerContainer}>
        <div className={styles.profileIconWrapper}>
          <Profile />
        </div>
        <div className={styles.writerWrapper}>
          <span className={styles.writer}>{`익명${num}`}</span>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.line}>{comment.content}</p>
      </div>
      <div className={styles.publishDateContainer}>
        <span className={styles.publishDate}>
          {parseDate(comment.commentDate, true)}
        </span>
        <span className={styles.publishDate}>
          {parseDate(comment.commentDate, false)}
        </span>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Comment;

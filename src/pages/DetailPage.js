import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import Comment from "../components/Comment";
import data from "../data/samples/sample_data.json";

function DetailPage() {
  const { postid } = useParams();
  const item = data.data.find((e) => e.postId === parseInt(postid));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.topbarContainer}>
          <div className={styles.prevIconWrapper}></div>
          <div className={styles.notifiIconWrapper}></div>
          <div className={styles.shareIconWrapper}></div>
        </div>
        <div className={styles.imageOrderContainer}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.postInfoContainer}>
          <div className={styles.profileIconWrapper}></div>
          <div className={styles.writerWrapper}></div>
          <div className={styles.publishDateWrapper}></div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.postContentContainer}>
          <div className={styles.tagContainer}></div>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{item.title}</span>
          </div>
          <div className={styles.locContainer}></div>
          <div className={styles.contentWrapper}>
            <span className={styles.content}>{item.content}</span>
          </div>
        </div>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.commentHelpContainer}>
          <div className={styles.commentHelpWrapper}>
            <span className={styles.commentHelp}>
              분실물 보관처에 물건을 맡기셨다면,
              <br />
              분실물이 주인을 잘 찾아갈 수 있도록 댓글을 달아주세요!
            </span>
          </div>
        </div>
        <div className={styles.commmentListContainer}></div>
      </div>
      <div className={styles.leaveCommentContainer}></div>
    </div>
  );
}

export default DetailPage;

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./DetailPage.module.css";
import Comment from "../components/Comment";
import API from "../api/API";
import parseDate from "../util/hooks/parseDate";
import foundCover from "../assets/images/postDetail/foundCover.png";
import { ReactComponent as BackKey } from "../assets/images/back_Key.svg";
import { ReactComponent as BellNone } from "../assets/images/postDetail/bell_none.svg";
import { ReactComponent as Bell } from "../assets/images/postDetail/bell.svg";
import { ReactComponent as Share } from "../assets/images/postDetail/share_post.svg";
import { ReactComponent as Complete } from "../assets/images/postDetail/completed.svg";
import { ReactComponent as Send } from "../assets/images/postDetail/send.svg";
import { ReactComponent as MiddleDot } from "../assets/images/postDetail/middleDot.svg";
import { ReactComponent as Loc } from "../assets/images/loc_icon.svg";
import { ReactComponent as Profile } from "../assets/images/postDetail/profile_none.svg";
import { ReactComponent as Headphones } from "../assets/images/category/headphones.svg";
import { ReactComponent as Wallet } from "../assets/images/category/wallet.svg";
import { ReactComponent as Clothes } from "../assets/images/category/clothes.svg";
import { ReactComponent as Book } from "../assets/images/category/book.svg";
//import data from "../data/samples/sample_data.json";

const maincolor = getComputedStyle(document.documentElement).getPropertyValue(
  "--main-color"
);

const Tag = ({ isTag, title }) => {
  const enumChoice_icon = {
    전자제품: <Headphones stroke={maincolor} />,
    귀중품: <Wallet stroke={maincolor} />,
    의류: <Clothes stroke={maincolor} />,
    서적: <Book stroke={maincolor} />,
  };

  return (
    <div
      className={
        title.includes("주인을")
          ? `${styles.tagContainer} ${styles.foundTagContainer}`
          : `${styles.tagContainer}`
      }
    >
      <div className={styles.tagContent}>
        {isTag && (
          <div className={styles.tagIconWrapper}>{enumChoice_icon[title]}</div>
        )}
        <div className={styles.tagTitleWrapper}>
          <span
            className={
              title.includes("주인을")
                ? `${styles.tagTitle} ${styles.foundTagTitle}`
                : `${styles.tagTitle}`
            }
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

function DetailPage() {
  const { postid } = useParams();
  //const post = data.data.find((e) => e.postId === parseInt(postid));
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const inputRef = useRef(null);
  const accessToken = useSelector((state) => state.accessToken);

  useEffect(() => {
    // 게시글 세부 내용
    const getPost = async () => {
      try {
        const post = await API.get(`/post/${postid}`);
        setPost(post.data);
        console.log(post.data);
      } catch (err) {
        console.log(err);
      }
    };

    // 댓글 목록
    const getComment = async () => {
      try {
        const comment = await API.get(`/comment/${postid}`);
        setComment(comment.data);
        console.log(comment.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPost();
    getComment();
  }, []);

  // 댓글 입력
  const onCommentSendClick = () => {
    const content = inputRef.current.value;
    inputRef.current.value = "";
    console.log(content);

    const sendComment = async () => {
      try {
        await API.post(
          `/comment/${postid}`,
          {
            content: content,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        ).then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    };

    sendComment();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={require("../data/samples/sample2.png")}
          alt="Item looking for its owner"
        />
        {post?.status === "true" && (
          <div className={styles.coverWrapper}>
            <img
              className={styles.cover}
              src={foundCover}
              alt="This item has found its owner."
            />
          </div>
        )}
        <div className={styles.topbarContainer}>
          <div className={styles.backIconWrapper}>
            <BackKey />
          </div>
          <div className={styles.topbar_right}>
            <div className={styles.notifiIconWrapper}>
              <BellNone />
            </div>
            <div className={styles.shareIconWrapper}>
              <Share />
            </div>
          </div>
        </div>
        <div className={styles.imageOrderContainer}></div>
      </div>
      <div className={styles.post}>
        <div className={styles.postInfoContainer}>
          <div className={styles.profileIconWrapper}>
            <Profile className={styles.profileIcon} />
          </div>
          <div className={styles.writerWrapper}>
            <span className={styles.writer}>익명</span>
          </div>
          <div className={styles.publishDateWrapper}>
            <span className={styles.publishDate}>
              {/* parseDate(post?.publishDate, true) */}
              01/18
            </span>
            <span className={styles.publishDate}>
              {/* parseDate(post?.publishDate, false) */}
              20:41
            </span>
          </div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.postContentContainer}>
          <div className={styles.tagBarContainer}>
            <div className={styles.typeWrapper}>
              {/*  <Tag
                isTag={false}
                title={post?.postStatus.includes("found") ? "습득" : "분실"}
              /> */}
              <Tag isTag={false} title={"습득"} />
            </div>
            <div className={styles.tagWrapper}>
              {/*  <Tag
                isTag={true}
                title={post?.tag}
              /> */}
              <Tag isTag={true} title={"전자제품"} />
            </div>
            <div className={styles.statusWrapper}>
              {/* post?.status === "true" && (
                <Tag isTag={false} title={"주인을 찾았어요!"} />
              ) */}
              <Tag isTag={false} title={"주인을 찾았어요!"} />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>
              {/*post?.title*/}버티컬 마우스 찾아가세요.
            </span>
          </div>
          <div className={styles.locContainer}>
            <div className={styles.locIconWrapper}>
              <Loc className={styles.locIcon} />
            </div>
            <div className={styles.locWrapper}>
              <span className={styles.loc}>{/*post?.place*/}제2과학관</span>
            </div>
            <div className={styles.locDotWrapper}>
              <MiddleDot className={styles.middleDot} />
            </div>
            <div className={styles.detailLocWrapper}>
              <span className={styles.detailLoc}>304호 첫 번째 줄 책상 위</span>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            {/* post?.content.split("\n").map((line) => {
              return <p className={styles.line}>{line}</p>;
            }) */}
            <p className={styles.line}>버티컬 마우스 찾아가세요.</p>
            <p className={styles.line}>
              강의실 201호 맨 앞 자리에 그대로 뒀습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.commentHelpContainer}>
          <div className={styles.commentHelpWrapper}>
            <p className={styles.commentHelp}>
              분실물 보관처에 물건을 맡기셨다면,
            </p>
            <p className={styles.commentHelp}>
              분실물이 주인을 잘 찾아갈 수 있도록 댓글을 달아주세요!
            </p>
          </div>
        </div>
        <div className={styles.commmentListContainer}>
          {comment?.map((e, idx) => {
            return (
              <Comment
                comment={e}
                num={idx + 1}
                key={`${postid}_comment${idx}`}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div
          className={`${styles.completeButtonContainer} ${styles.notCompleted}`}
        >
          {/* <div
          className={`${styles.completeButtonContainer} ${
            post?.status === "false" ? styles.notCompleted : styles.completed
          }`}
        > */}
          <div className={styles.completedIconWrapper}>
            <Complete className={styles.completedIcon} />
          </div>
          <div className={styles.completedTextWrapper}>
            <span className={styles.completedText}>수령 완료</span>
          </div>
        </div>
        <div className={styles.leaveCommentContainer}>
          <div className={styles.commentInputWrapper}>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              className={styles.commentInput}
              ref={inputRef}
            />
          </div>
          <div
            className={styles.commentSendButtonWrapper}
            onClick={onCommentSendClick}
          >
            <Send />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;

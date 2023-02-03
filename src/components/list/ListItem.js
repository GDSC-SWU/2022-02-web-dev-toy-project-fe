import styles from "./ListItem.module.css";
import { useNavigate } from "react-router-dom";
import foundCover from "../../assets/images/listPage/foundCover.png";
import { ReactComponent as Loc } from "../../assets/images/loc_icon.svg";
import { ReactComponent as Share } from "../../assets/images/share_icon.svg";
import { ReactComponent as Headphones } from "../../assets/images/category/headphones.svg";
import { ReactComponent as Wallet } from "../../assets/images/category/wallet.svg";
import { ReactComponent as Clothes } from "../../assets/images/category/clothes.svg";
import { ReactComponent as Book } from "../../assets/images/category/book.svg";

const maincolor = getComputedStyle(document.documentElement).getPropertyValue(
  "--main-color"
);
const unselectedcolor = getComputedStyle(
  document.documentElement
).getPropertyValue("--unselected-gray-color");

const ListItem = ({ item }) => {
  const navigate = useNavigate();
  const Enum_choice = {
    전자제품: (
      <Headphones
        stroke={item.status === "false" ? maincolor : unselectedcolor}
      />
    ),
    귀중품: (
      <Wallet stroke={item.status === "false" ? maincolor : unselectedcolor} />
    ),
    의류: (
      <Clothes stroke={item.status === "false" ? maincolor : unselectedcolor} />
    ),
    서적: (
      <Book stroke={item.status === "false" ? maincolor : unselectedcolor} />
    ),
  };

  const onItemClick = () => {
    navigate(`/detail/${item.postId}`);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          background: `url(${item.imagePath})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onClick={onItemClick}
      >
        {item.status === "true" && (
          <div
            className={styles.foundCover}
            style={{
              backgroundImage: `url(${foundCover})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        )}
        <div className={styles.shareButtonWrapper}>
          <Share className={styles.shareButton} />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.titleWrapper} onClick={onItemClick}>
          <div
            className={
              item.status === "false"
                ? styles.title
                : `${styles.title} ${styles.selected}`
            }
          >
            {item.title}
          </div>
        </div>
        <div className={styles.locContainer}>
          <Loc
            className={styles.locIcon}
            fill={item.status === "false" ? "#929292" : unselectedcolor}
            stroke={item.status === "false" ? "#929292" : unselectedcolor}
          />
          <div
            className={
              item.status === "false"
                ? styles.loc
                : `${styles.loc} ${styles.selected}`
            }
          >
            {item.place}
          </div>
        </div>
        <div
          className={
            item.status === "false"
              ? styles.tagWrapper
              : `${styles.tagWrapper} ${styles.selectedTag}`
          }
        >
          {item.tag !== "기타" && (
            <div className={styles.iconWrapper}>{Enum_choice[item.tag]}</div>
          )}
          <div className={styles.tagNameWrapper}>
            <div
              className={
                item.status === "false"
                  ? styles.tagName
                  : `${styles.tagName} ${styles.selected}`
              }
            >
              {item.tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

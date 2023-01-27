import styles from "./ListItem.module.css";
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

const ListItem = ({ item }) => {
  const Enum_choice = {
    전자제품: <Headphones stroke={maincolor} />,
    귀중품: <Wallet stroke={maincolor} />,
    의류: <Clothes stroke={maincolor} />,
    서적: <Book stroke={maincolor} />,
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          background: `url(/${item.imagePath})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
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
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{item.title}</div>
        </div>
        <div className={styles.locContainer}>
          <Loc className={styles.locIcon} />
          <div className={styles.loc}>{item.place}</div>
        </div>
        <div className={styles.tagWrapper}>
          {item.tag !== "기타" && (
            <div className={styles.iconWrapper}>{Enum_choice[item.tag]}</div>
          )}
          <div className={styles.tagNameWrapper}>
            <div className={styles.tagName}>{item.tag}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

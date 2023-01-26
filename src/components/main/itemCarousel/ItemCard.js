import styles from "./ItemCard.module.css";
import { ReactComponent as Loc } from "../../../assets/images/loc_icon.svg";
import { ReactComponent as Headphones } from "../../../assets/images/category/headphones.svg";
import { ReactComponent as Wallet } from "../../../assets/images/category/wallet.svg";
import { ReactComponent as Clothes } from "../../../assets/images/category/clothes.svg";
import { ReactComponent as Book } from "../../../assets/images/category/book.svg";
import { useNavigate } from "react-router-dom";

const maincolor = getComputedStyle(document.documentElement).getPropertyValue(
  "--main-color"
);

const ItemCard = ({ item }) => {
  let navigate = useNavigate();
  const Enum_choice = {
    전자제품: <Headphones stroke={maincolor} />,
    귀중품: <Wallet stroke={maincolor} />,
    의류: <Clothes stroke={maincolor} />,
    서적: <Book stroke={maincolor} />,
  };

  const onItemClick = () => {
    console.log(item);
    navigate(`/detail/${item.postId}`);
  };

  return (
    <div className={styles.container} onClick={onItemClick}>
      <div
        className={styles.imageContainer}
        style={{
          background: `url(/${item.imagePath})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.infoContainer}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>{item.title}</span>
        </div>
        <div className={styles.locContainer}>
          <Loc className={styles.locIcon} />
          <span className={styles.loc}>{item.place}</span>
        </div>
        <div className={styles.tagContainer}>
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

export default ItemCard;

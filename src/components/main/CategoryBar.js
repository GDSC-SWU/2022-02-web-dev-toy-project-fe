import { useRef, useState } from "react";
import styles from "./CategoryBar.module.css";
import { ReactComponent as Headphones } from "../../assets/images/category/headphones.svg";
import { ReactComponent as Wallet } from "../../assets/images/category/wallet.svg";
import { ReactComponent as Clothes } from "../../assets/images/category/clothes.svg";
import { ReactComponent as Book } from "../../assets/images/category/book.svg";

const throttle = (func, ms) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
};

const CategoryButton = ({ title, isSelected, option, setCurrentCategory }) => {
  const Enum_choice = {
    전자제품: <Headphones stroke={isSelected ? "#ffffff" : "#353535"} />,
    귀중품: <Wallet stroke={isSelected ? "#ffffff" : "#353535"} />,
    의류: <Clothes stroke={isSelected ? "#ffffff" : "#353535"} />,
    서적: <Book stroke={isSelected ? "#ffffff" : "#353535"} />,
  };

  return (
    <div
      className={`${styles.container} ${
        isSelected
          ? option
            ? styles.selectedBlue
            : styles.selected
          : styles.notSelected
      }`}
      onClick={() => {
        setCurrentCategory(title);
      }}
    >
      <div className={styles.content}>
        {title !== "전체" && (
          <div className={styles.iconWrapper}>{Enum_choice[title]}</div>
        )}
        <div
          className={
            title !== "전체" ? styles.titleWrapper : styles.titleAllWrapper
          }
        >
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  );
};

function CategoryBar({ currentCategory, setCurrentCategory, option }) {
  const categoryRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const categories = [
    "전자제품",
    "귀중품",
    "문구류",
    "의류",
    "서적",
    "화장품",
    "기타",
  ];

  // 카테고리 좌우 드래그
  const onDragStart = (e) => {
    setIsDrag(true);
    setStartX(e.pageX + categoryRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
    if (categoryRef.current.scrollLeft === 0) {
      categoryRef.current.style.left = "5%";
    }
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = categoryRef.current;

      categoryRef.current.scrollTo(startX - e.pageX, 0);

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        categoryRef.current.style.left = 0;
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 25;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const render = () => {
    const result = [];
    result.push(
      <CategoryButton
        key="all"
        title="전체"
        isSelected={currentCategory === "전체"}
        option={option}
        setCurrentCategory={setCurrentCategory}
      />
    );
    categories.map((e, idx) => {
      result.push(
        <CategoryButton
          key={`${idx}`}
          title={e}
          isSelected={currentCategory === e}
          option={option}
          setCurrentCategory={setCurrentCategory}
        />
      );

      return result;
    });

    return result;
  };

  return (
    <div
      className={styles.barContainer}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={categoryRef}
    >
      {render()}
    </div>
  );
}

export default CategoryBar;

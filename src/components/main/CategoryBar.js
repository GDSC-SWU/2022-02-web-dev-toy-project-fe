import { useRef, useState } from "react";
import styles from "./CategoryBar.module.css";
import category_data from "../../data/category.json";

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

const CategoryButton = ({ title, icon, isSelected }) => {
  let ICON_PATH;

  if (icon) {
    ICON_PATH = require(`../../assets/images/category/${icon}`);
  }

  return (
    <div
      className={`${styles.container} ${
        isSelected ? styles.selected : styles.notSelected
      }`}
    >
      <div className={styles.content}>
        {icon && (
          <div className={styles.iconWrapper}>
            <img className={styles.icon} src={ICON_PATH} alt={title} />
          </div>
        )}
        <div className={icon ? styles.titleWrapper : styles.titleAllWrapper}>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  );
};

function CategoryBar({ currentCategory }) {
  const categoryRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + categoryRef.current.scrollLeft);
    console.log(startX);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = categoryRef.current;

      //categoryRef.current.scrollLeft += startX - e.pageX;
      categoryRef.current.scrollTo(startX - e.pageX, 0);
      console.log(startX - e.pageX);
      console.log(categoryRef.current.scrollLeft);

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const render = () => {
    const result = [];
    result.push(
      <CategoryButton
        key="all"
        title="전체"
        icon={null}
        isSelected={currentCategory === "전체"}
      />
    );
    category_data.data.map((e, idx) => {
      result.push(
        <CategoryButton
          key={`${idx}`}
          title={e.title}
          icon={currentCategory === e.title ? e.icon[1] : e.icon[0]}
          isSelected={currentCategory === e.title}
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

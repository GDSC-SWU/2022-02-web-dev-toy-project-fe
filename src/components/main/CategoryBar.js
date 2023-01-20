import styles from "./CategoryBar.module.css";
import category_data from "../../data/category.json";

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

  return <div className={styles.barContainer}>{render()}</div>;
}

export default CategoryBar;

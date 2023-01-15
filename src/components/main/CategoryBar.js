import styles from "./CategoryBar.module.css";
import category_data from "../../data/category.json";
import CategoryButton from "./CategoryButton";

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

  return <div className={styles.container}>{render()}</div>;
}

export default CategoryBar;

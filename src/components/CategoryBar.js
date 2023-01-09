import styles from "./CategoryBar.module.css";
import category_data from "../data/category.json";
import CategoryButton from "./CategoryButton";

function CategoryBar() {
  const render = () => {
    const result = [];
    category_data.data.map((e, idx) => {
      result.push(
        <CategoryButton key={`${idx}`} title={e.title} icon={e.icon} />
      );

      return result;
    });

    return result;
  };

  return <div className={styles.container}>{render()}</div>;
}

export default CategoryBar;

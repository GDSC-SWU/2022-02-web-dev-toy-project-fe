import styles from "./CategoryButton.module.css";

function CategoryButton({ title, icon }) {
  const ICON_PATH = require(`../assets/images/${icon}`);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={ICON_PATH} alt={title} />
        </div>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryButton;

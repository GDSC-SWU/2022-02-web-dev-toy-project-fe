import styles from "./CategoryButton.module.css";

function CategoryButton({ title, icon, isSelected }) {
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
}

export default CategoryButton;

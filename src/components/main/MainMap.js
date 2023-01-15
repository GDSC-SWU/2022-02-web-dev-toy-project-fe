import styles from "./MainMap.module.css";

function MainMap() {
  return (
    <div className={styles.container}>
      <div className={styles.map}></div>
      <div className={styles.itemContainer}></div>
    </div>
  );
}

export default MainMap;

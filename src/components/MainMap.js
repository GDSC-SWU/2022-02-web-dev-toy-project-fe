import styles from "./MainMap.module.css";

function MainMap() {
  const MAP_PATH = require("../data/map_sample.png");

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <img src={MAP_PATH} alt="map" />
      </div>
      <div className={styles.itemContainer}></div>
    </div>
  );
}

export default MainMap;

import styles from "./MainMap.module.css";

function MainMap() {
  const MAP_PATH = require("../data/map_sample.png");
  const mouseDownHandler = (e) => {
    e.currentTarget.classList.add("mapWrapper--clicked");
  };

  const mouseUpHandler = (e) => {
    e.currentTarget.classList.remove("mapWrapper--clicked");
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.map}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        <img src={MAP_PATH} alt="map" />
      </div>
      <div className={styles.itemContainer}></div>
    </div>
  );
}

export default MainMap;

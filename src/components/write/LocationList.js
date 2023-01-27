import Location from "./Location";
import styles from "./LocationList.module.css";

function LocationList() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Location />
        <Location />
        <Location />
        <Location />
        <Location />
      </div>
    </div>
  );
}

export default LocationList;

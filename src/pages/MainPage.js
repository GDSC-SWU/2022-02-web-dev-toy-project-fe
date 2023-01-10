import { useState } from "react";
import styles from "./MainPage.module.css";
import MainMap from "../components/main/MainMap.js";
import Draggable from "react-draggable";

function MainPage() {
  const [pos, setPos] = useState({
    deltaPos: {
      x: 0,
      y: 0,
    },
  });

  const handleDrag = (e, ui) => {
    const { deltaPos } = pos;
    const { x, y } = deltaPos;
    const { deltaX, deltaY } = ui;

    setPos({
      ...pos,
      deltaPos: {
        x: x + deltaX,
        y: y + deltaY,
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Draggable onDrag={handleDrag}>
          <div className={styles.mapWrapper}>
            <MainMap className={styles.map} />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default MainPage;

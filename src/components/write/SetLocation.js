import styles from "./SetLocation.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputTextbox from "./InputTextBox";
import { useEffect, useRef, useState } from "react";

function SetLocation() {
  const [loc, setLoc] = useState(null); // 위치
  const [detailLoc, setDetailLoc] = useState(null); // 세부 위치
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setLoc(location.state.loc);
      setDetailLoc(location.state.detail);
    }
  }, []);

  // input에 따라 detail loc state 변경
  const handleUserInput = (value) => {
    setDetailLoc(value);
  };

  // 다음 클릭 시 데이터 가지고 이동
  const onNextClick = () => {
    navigate("/newpost/createpost", { state: { loc: loc, detail: detailLoc } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>습득한 위치를 입력해 주세요</div>
        <div className={styles.subTitle}>
          습득 위치<span className={styles.star}> *</span>
        </div>
        <Link to="/newpost/locationList" state={{ detail: detailLoc }}>
          <button className={styles.locateButton}>
            {loc ? loc : "위치 입력하러 가기"}
          </button>
        </Link>
        <InputTextbox
          subTitle="상세 주소"
          placeholderText="상세 주소를 입력해주세요."
          value={detailLoc && detailLoc}
          handleUserInput={handleUserInput}
        />
        <div onClick={onNextClick}>다음</div>
      </div>
    </div>
  );
}

export default SetLocation;

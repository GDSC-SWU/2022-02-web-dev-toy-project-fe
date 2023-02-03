import styles from "./SetLocation.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "../UI/NavigationBar";

function SetLocation() {
  // const [loc, setLoc] = useState(null); // 위치
  // const [detailLoc, setDetailLoc] = useState(null); // 세부 위치
  const [lostLocation, setLostLocation] = useState({
    lostLocation: "",
    detailLostLocation: "",
  });

  const locationArray = [
    "서울여자대학교 정문",
    "서울여자대학교 후문",
    "서울여자대학교 50주년 기념관",
    "서울여자대학교 제2과학관",
    "서울여자대학교 인문사회관",
    "서울여자대학교 학생누리관",
    "기타",
  ];

  // useEffect(() => {
  //   if (location.state) {
  //     setLoc(location.state.loc);
  //     setDetailLoc(location.state.detail);
  //   }
  // }, []);

  // input에 따라 detail loc state 변경
  // const handleUserInput = (value) => {
  //   setDetailLoc(value);
  // };

  // 다음 클릭 시 데이터 가지고 이동
  // const onNextClick = () => {
  //   navigate("/newpost/createpost", { state: { loc: loc, detail: detailLoc } });
  // };

  const handleLostLocation = (e) => {
    setLostLocation((prev) => ({ ...prev, lostLocation: e.target.value }));
  };

  const handleDetailLocation = (e) => {
    setLostLocation((state) => ({
      ...state,
      detailLostLocation: e.target.value,
    }));
  };

  console.log(lostLocation);

  return (
    <>
      <Link to="/home">
        <NavigationBar />
      </Link>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>습득한 위치를 입력해 주세요</div>
          <div className={styles.subTitle}>
            습득 위치<span className={styles.star}> *</span>
          </div>
          {/* <Link to="/newpost/locationList" state={{ detail: detailLoc }}> */}
          <select
            className={styles.locateSelect}
            require="true"
            onChange={handleLostLocation}
            defaultValue={"DEFAULT"}
          >
            {/* {loc ? loc : "위치 선택하러 가기"} */}
            <option
              disabled
              className={styles.locatePlaceholder}
              value="DEFAULT"
              hidden
            >
              위치 선택하기
            </option>
            {locationArray.map((item, index) => (
              <option key={index} className={styles.preventSelect} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            placeholder="예)  1층 카페 데스크 / 202호 15번 책상"
            onChange={handleDetailLocation}
            className={styles.inputTextBox}
          />
          {/* <button onClick={displayResult}>안녕</button> */}
          <Link
            to={
              lostLocation.detailLostLocation.length > 4
                ? "/newpost/createpost"
                : null
            }
            className={
              lostLocation.detailLostLocation.length > 4
                ? styles.nextButton
                : styles.nextButtonUnabled
            }
            type="submit"
            state={lostLocation}
          >
            다음
          </Link>
        </div>
      </div>
    </>
  );
}

export default SetLocation;

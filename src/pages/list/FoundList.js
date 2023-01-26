import styles from "./FoundList.module.css";
import ListItem from "../../components/list/ListItem";
import sample_data from "../../data/samples/sample_data.json";
import CategoryBar from "../../components/main/CategoryBar";
import { useState } from "react";
import { ReactComponent as CheckIcon } from "../../assets/images/listPage/check.svg";

// css color property
const categoryBlue = getComputedStyle(
  document.documentElement
).getPropertyValue("--category-blue");

function FoundList() {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [isOptionChecked, setIsOptionChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.categoryWrapper}>
        <CategoryBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          option={true}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.optionContainer}>
          <div className={styles.checkIconWrapper}>
            <CheckIcon
              fill={isOptionChecked ? categoryBlue : "#E7E7E7"}
              className={styles.checkIcon}
              onClick={() => {
                const option = !isOptionChecked;
                setIsOptionChecked(option);
              }}
            />
          </div>
          <div className={styles.optionWrapper}>
            <span className={styles.optionText}>찾은 것도 볼래요</span>
          </div>
        </div>
        <div className={styles.listItemConatainer}>
          {isOptionChecked
            ? // '찾은 것도 볼래요' 선택일 경우
              currentCategory === "전체"
              ? sample_data.data
                  .filter((item) => item.postStatus === "found")
                  .map((item, i) => (
                    <ListItem key={i} item={item} className={styles.listItem} />
                  ))
              : sample_data.data
                  .filter(
                    (item) =>
                      item.postStatus === "found" &&
                      item.tag === currentCategory
                  )
                  .map((item, i) => (
                    <ListItem key={i} item={item} className={styles.listItem} />
                  ))
            : // 기본
            currentCategory === "전체"
            ? sample_data.data
                .filter(
                  (item) =>
                    item.postStatus === "found" && item.status === "false"
                )
                .map((item, i) => (
                  <ListItem key={i} item={item} className={styles.listItem} />
                ))
            : sample_data.data
                .filter(
                  (item) =>
                    item.postStatus === "found" &&
                    item.status === "false" &&
                    item.tag === currentCategory
                )
                .map((item, i) => (
                  <ListItem key={i} item={item} className={styles.listItem} />
                ))}
        </div>
      </div>
    </div>
  );
}

export default FoundList;

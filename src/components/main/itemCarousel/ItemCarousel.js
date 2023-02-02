import styles from "./ItemCarousel.module.css";
import ItemCard from "./ItemCard";
import data from "../../../data/samples/sample_data.json";
import { useEffect, useRef, useState } from "react";
import API from "../../../api/API";

const throttle = (func, ms) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
};

const ItemCarousel = ({ posts, setCarouselOff }) => {
  const carouselRef = useRef(null);
  const [postList, setPostList] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await API.get("/post");
        setPostList(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, []);

  // carousel 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (carouselRef.current && !carouselRef.current.contains(e.target)) {
        setCarouselOff();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [carouselRef, setCarouselOff]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setStartX(e.pageX + carouselRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
    if (carouselRef.current.scrollLeft === 0) {
      carouselRef.current.style.left = "5%";
    }
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;

      carouselRef.current.scrollTo(startX - e.pageX, 0);

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        carouselRef.current.style.left = 0;
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 25;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const render = () => {
    console.log(postList);
    const result = [];
    posts.map((item) => {
      const i = postList?.findIndex((e) => {
        return e.postId === item;
      });
      if (i !== -1) {
        result.push(
          <ItemCard key={item} className={styles.itemCard} item={postList[i]} />
        );
      }

      return result;
    });

    return result;
  };

  return (
    <div
      className={styles.container}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={carouselRef}
    >
      {postList && render()}
    </div>
  );
};

export default ItemCarousel;

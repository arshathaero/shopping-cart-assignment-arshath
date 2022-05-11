import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./carousal.module.scss";
import ShadowDivider from "components/shadowDivider/shadowDivider";
import { getImageNameFromUrl } from "utils/service";
const Carousal = ({ items, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  let touchStart = 0;
  let touchEnd = 0;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {

    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      let index = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(index);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex,items]);

  function handleTouchStart(e) {
    touchStart = e.targetTouches[0].clientX;
  }
  function handleTouchEnd() {
    let forwardIndex =
      currentIndex === items.length - 1 ? items.length - 1 : currentIndex + 1;
    let backwardIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    if (touchStart - touchEnd > 150) {
      setCurrentIndex(forwardIndex);
    } else {
      setCurrentIndex(backwardIndex);
    }
  }
  function handleTouchMove(e) {
    touchEnd = e.targetTouches[0].clientX;
  }
  return (
    <div className={styles.offerWrapper}>
      <div
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        className={styles.offerWrapper__slideshowSlider}
      >
        {items.map((item) => (
          <img
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            key={item.id}
            className={styles.offerWrapper__slideshowSlider__img}
            src={require("assets/" + getImageNameFromUrl(item.bannerImageUrl))}
          />
        ))}
      </div>
      {currentIndex !== items.length - 1 && (
        <span
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className={styles.offerWrapper__next}
        >
          NEXT
        </span>
      )}
      {currentIndex !== 0 && (
        <span
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className={styles.offerWrapper__prev}
        >
          PREV
        </span>
      )}
      <ShadowDivider />
      <ul className={styles.offerWrapper__control}>
        {items?.map((item, index) => (
          <li
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.offerWrapper__control__circle} ${
              currentIndex === index
                ? styles.offerWrapper__control__activeCircle
                : ""
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

Carousal.propTypes = {
  items: PropTypes.array,
  delay: PropTypes.number,
};

Carousal.defaultProps = {
  items: [],
  delay: 2000,
};

export default Carousal;

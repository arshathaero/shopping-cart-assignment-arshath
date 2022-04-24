import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./carousal.module.scss";
import ShadowDivider from "components/shadowDivider/shadowDivider";

const Carousal = ({ items, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

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
  }, [currentIndex]);

  return (
    <div className={styles.offerWrapper}>
      <div
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        className={styles.offerWrapper__slideshowSlider}
      >
        {items.map((item) => (
          <img
            key={item}
            className={styles.offerWrapper__slideshowSlider__img}
            src={item}
          />
        ))}
      </div>

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

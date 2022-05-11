import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./dropdown.module.scss";
const Dropdown = ({ selectedCategory, options, className, handleCategory }) => {
  const containerRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const optionHandler = (option) => {
    setDropdownOpen(false);
    handleCategory(option);
  };

  return (
    <div ref={containerRef} className={`${styles.dropdown} ${className}`}>
      <p
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={styles.dropdown__heading}
      >
        {selectedCategory.name || "Select Category"}{" "}
        <i className="fa-solid fa-angle-down"></i>
      </p>

      {dropdownOpen && (
        <ul className={styles.dropdown__list}>
          {options?.map((element) => (
            <li
              onClick={() => optionHandler(element)}
              className={styles.dropdown__list__option}
              key={element.id}
            >
              {element.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selectedCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  handleCategory: PropTypes.func,
};

Dropdown.defaultProps = {
  options: [],
  selectedCategory: "",
  className: "",
  handleCategory: () => null,
};

export default Dropdown;

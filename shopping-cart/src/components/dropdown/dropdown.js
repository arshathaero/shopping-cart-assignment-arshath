import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
/* eslint-disable */
import styles from "./dropdown.module.scss";
const Dropdown = ({
  selectedOption,
  setSelectedOption,
  options,
  className,
}) => {
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
    setSelectedOption(option);
  };

  return (
    <div ref={containerRef} className={`${styles.dropdown} ${className}`}>
      <p
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={styles.dropdown__heading}
      >
        {selectedOption.name || "Select Category"}{" "}
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

  //     return <select defaultValue={selectedCategory.id} className={styles.dropdown__heading} name="Select" id="cars">
  //         <option disabled value=''>Select Category</option>
  //         {options.map(element=><option selected={element.id === selectedCategory.id} value={element.id}>{element.name}</option>)}

  //   </select>
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func,
};

Dropdown.defaultProps = {
  options: [],
  selectedOption: "",
  setSelectedOption: () => null,
};

export default Dropdown;

import React from "react";
import styles from "./textInput.module.scss";
import PropTypes from "prop-types";

const TextInput = ({
  label,
  handleChange,
  disabled,
  className,
  errorMessage,
  value,
  id,
  required,
  type,
}) => {
  return (
    <div className={styles.textInputWrapper}>
      <input
        required={required}
        placeholder=" "
        type={type}
        id={id}
        value={value}
        disabled={disabled}
        onChange={(e) => handleChange(e)}
        className={`${
          errorMessage ? styles.textInputWrapper__textInput__error : ""
        } ${styles.textInputWrapper__textInput}  ${className}`}
      />
      <label htmlFor={id}>{label}</label>
      <p className={styles.textInputWrapper__textInput__errorMsg}>
        {errorMessage}
      </p>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  placeholder: "",
  handleChange: () => null,
  disabled: false,
  className: "",
  errorMessage: "",
  value: "",
  id: "",
  required: false,
  type: "text",
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = (props) => {
  const {
    buttonClick,
    isBtnDisabled,
    className = '',
    type,
    children
  } = props;
  return (
    <button
      type={type}
      className={`${styles.button} ${isBtnDisabled ? styles.button__disabled : '' } ${className}`}
      onClick={(e) => {
        buttonClick(e);
      }}
      disabled={isBtnDisabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonClick: PropTypes.func,
  children: PropTypes.string,
  isBtnDisabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  buttonClick: () => {},
  isBtnDisabled: false,
  children:'',
  className: '',
  type: 'button'
};

export default Button;
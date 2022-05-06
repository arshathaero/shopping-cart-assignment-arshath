import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import PropTypes from "prop-types";

const Modal = ({ children, outsideClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div onClick={(e) => outsideClick(e)} className={styles.modalWrapper}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  outsideClick: PropTypes.func,
};

Modal.defaultProps = {
  children: [],
  outsideClick: () => null,
};

export default Modal;

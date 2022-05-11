import React from 'react';
import PropTypes from 'prop-types';
import styles from './loader.module.scss';

const Loader = (props) => {
  const { isSmallLoader, className='' } = props;

  return (
    <div
      className={`${styles.loaderWrapper}  ${className}`}
    >
      <div
        className={`${styles.loaderWrapper__loader} ${
          isSmallLoader && styles.loaderWrapper__smallLoader
        } `}
      />
    </div>
  );
};

Loader.propTypes = {
  isSmallLoader: PropTypes.bool,
  isLargeLoader: PropTypes.bool,
  className: PropTypes.string
};

Loader.defaultProps = {
  isSmallLoader: false,
  className: '',
  isLargeLoader: false
};

export default Loader;
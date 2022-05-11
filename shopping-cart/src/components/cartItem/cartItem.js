import React from "react";
import styles from "./cartItem.module.scss";
import PropTypes from "prop-types";
import { getImageNameFromUrl } from "utils/service";
const CartItem = ({ cartData, handleQuantity }) => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__img}
        src={require("assets/" + getImageNameFromUrl(cartData.imageURL))}
        alt="Product Image"
      />
      <div className={styles.cartItem__details}>
        <h2 className={styles.cartItem__details__title}>{cartData.title}</h2>
        <p className={styles.cartItem__details__quantityWrapper}>
          <i
            onClick={() => handleQuantity("decrement", cartData)}
            className={`fa-solid fa-minus ${styles.quantityWrapper__icon}`}
          ></i>
          <span className={styles.quantityWrapper__count}>
            {cartData.quantity}
          </span>
          <i
            onClick={() => handleQuantity("increment", cartData)}
            className={`fa-solid fa-plus ${styles.quantityWrapper__icon}`}
          ></i>
          <span className={styles.quantityWrapper__price}>
            {" "}
            <i className={`fa-solid fa-xmark`}></i>&nbsp;&nbsp; Rs.
            {cartData.price}
          </span>
        </p>
      </div>
      <p className={styles.cartItem__subTotal}>Rs.{cartData.subTotal}</p>
    </div>
  );
};

CartItem.propTypes = {
  cartData: PropTypes.object,
  handleQuantity: PropTypes.func,
};

CartItem.defaultProps = {
  cartData: {},
  handleQuantity: () => null,
};

export default CartItem;

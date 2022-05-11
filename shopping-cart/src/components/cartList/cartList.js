import CartItem from "components/cartItem/cartItem";
import React from "react";
import styles from "./cartList.module.scss";
import Button from "components/button/button";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const CartList = ({ cartData, handleQuantity, total,checkoutHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isModalOpen = location?.state?.background || null;
  return cartData?.length ? (
    <section className={styles.cartList}>
      <div
        className={`${styles.cartList__cartItems} ${
          isModalOpen
            ? styles.cartList__cartItems__cartItemsModal
            : styles.cartList__cartItems__cartItemsPage
        }`}
      >
        {cartData?.map((element) => (
          <CartItem
            handleQuantity={handleQuantity}
            key={element.id}
            cartData={element}
          />
        ))}

        <div className={styles.cartList__lowestPrice}>
          <img
            className={styles.cartList__lowestPrice__img}
            src={require("assets/images/lowest-price.png")}
          />
          <p className={styles.cartList__lowestPrice__desc}>
            You won`t find it cheaper anywhere
          </p>
        </div>
        <br />
      </div>
      <footer className={styles.cartList__footer}>
        <p className={styles.cartList__footer__promoHeading}>
          Promo code can be applied on payment page
        </p>
        <Button buttonClick={checkoutHandler} className={styles.cartList__footer__btn}>
          <span>Proceed to Checkout</span>
          <span>
            Rs.{total} <i className="fa-solid fa-chevron-right"></i>{" "}
          </span>
        </Button>
      </footer>
    </section>
  ) : (
    <section
      className={`${styles.cartEmpty} ${
        isModalOpen ? styles.cartEmptyModal : styles.cartEmptyPage
      }`}
    >
      <div className={styles.cartEmpty__content}>
        <p className={styles.cartEmpty__content__heading}>
          No items in your cart
        </p>
        <p className={styles.cartEmpty__content__desc}>
          your favourite items are just a click away
        </p>
      </div>
      <div className={styles.cartEmpty__btnWrapper}>
        <Button buttonClick={() => navigate("/products")}>
          Start Shopping
        </Button>
      </div>
    </section>
  );
};

CartList.propTypes = {
  cartData: PropTypes.array,
  handleQuantity: PropTypes.func,
  total: PropTypes.number,
  checkoutHandler:PropTypes.func
};

CartList.defaultProps = {
  cartData: [],
  handleQuantity: () => null,
  total: 0,
  checkoutHandler:()=>null
};

export default CartList;

import { useNavigate, useLocation } from "react-router-dom";

import Modal from "components/modal/modal";
import styles from "./cart.module.scss";
import CartList from "components/cartList/cartList";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCartItem,
  decrementCartItem,
  fetchTotal,
} from "store/actions/cartAction";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const total = useSelector((state) => state.cart.total);
  const cartCount = useSelector((state) => state.cart.cartCount);

  const location = useLocation();
  let background = location.state && location.state.background;

  const navigate = useNavigate();

  let goBack = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate(-1);
  };

  const handleQuantity = (type, data) => {
    if (type == "increment") {
      dispatch(incrementCartItem(data));
    } else {
      dispatch(decrementCartItem(data));
    }
  };

  function calculateTotal() {
    const totalvalue = cartList.reduce(
      (acc, element) => acc + element.subTotal,
      0
    );

    return totalvalue;
  }

  useEffect(() => {
    dispatch(fetchTotal(calculateTotal()));
  }, [cartCount]);
  return (
    <div className={styles.cart}>
      {background ? (
        <section className={styles.cart__cartModal}>
          <Modal outsideClick={(e) => goBack(e)}>
            <div
              className={styles.cart__cartModal__cartModalWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <header className={styles.cartModalWrapper__header}>
                  <h1 className={styles.cartModalWrapper__header__title}>
                    My Cart ({cartCount} item)
                  </h1>
                  <i
                    onClick={goBack}
                    className={`fa-solid fa-xmark ${styles.cartModalWrapper__header__closeIcon}`}
                  ></i>
                </header>
                <CartList
                  total={total}
                  handleQuantity={handleQuantity}
                  cartData={cartList}
                  checkoutHandler={goBack}
                />
              </div>
            </div>
          </Modal>
        </section>
      ) : (
        <section className={styles.cart__cartPage}>
          <h2 className={styles.cartWrapper__heading}>
            My Cart ({cartCount} item)
          </h2>
          <br />
          <CartList
            total={total}
            handleQuantity={handleQuantity}
            cartData={cartList}
            checkoutHandler={goBack}

          />
        </section>
      )}
    </div>
  );
  // return ( <div
  //     onClick={goBack}
  //     style={{
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //       bottom: 0,
  //       right: 0,
  //       background: "rgba(0, 0, 0, 0.15)",
  //       zIndex:11
  //     }}
  //   >
  //     <div
  //       className="modal"
  //       style={{
  //         position: "absolute",
  //         background: "#fff",
  //         top: 25,
  //         left: "10%",
  //         right: "10%",
  //         padding: 15,
  //         border: "2px solid #444",
  //         zIndex:11
  //       }}
  //       onClick={e=>e.stopPropagation()}
  //     >
  //       <h1>ss</h1>
  //       <button type="button" onClick={goBack}>
  //         Close
  //       </button>
  //     </div>
  //   </div>)
};

export default Cart;

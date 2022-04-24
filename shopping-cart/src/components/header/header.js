import styles from "./header.module.scss";
import logo from "assets/images/logo.png";
import cart from "assets/images/cart.svg";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__headerWrapper}>
        <img
          onClick={() => (window.location.href = "/")}
          className={styles.header__headerWrapper__logo}
          src={logo}
          alt="Logo"
        />
        <nav className={styles.header__headerWrapper__navWrapper}>
          <ul className={styles.navWrapper__list}>
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navWrapper__list__link} ${
                    isActive ? styles.navWrapper__list__activeLink : ""
                  }`
                }
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${styles.navWrapper__list__link} ${
                    isActive ? styles.navWrapper__list__activeLink : ""
                  }`
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.header__headerWrapper__cartAuth}>
          <ul className={styles.cartAuth__auth}>
            <li>
              <Link className={styles.cartAuth__auth__login} to="/login">
                Signin
              </Link>
            </li>
            <li>
              <Link className={styles.cartAuth__auth__register} to="/register">
                Register
              </Link>
            </li>
          </ul>
          <div className={styles.cartAuth__cart}>
            <img className={styles.cartAuth__cart__img} src={cart} />
            <p className={styles.cartAuth__cart__count}> {0} Items</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

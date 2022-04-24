import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contentWrapper}>
        <p className={styles.footer__contentWrapper__content}>
          Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;

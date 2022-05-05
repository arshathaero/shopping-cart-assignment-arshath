import Button from "components/button/button";
import PropTypes from "prop-types";
import styles from "./productCard.module.scss";
import { getImageNameFromUrl } from "utils/service";

const ProductCard = ({ data }) => {
  return (
    <div className={styles.productCard}>
      <section>
        <div className={styles.productCard__titleWrapper}>
          <h2 className={styles.productCard__titleWrapper__title}>
            {data.name}
          </h2>
        </div>
        <div className={styles.productCard__details}>
          <img
            className={styles.productCard__details__img}
            src={require("assets/" + getImageNameFromUrl(data.imageURL))}
            alt="productImg"
          />
          <div className={styles.productCard__details__content}>
            <article className={styles.content__descWrapper}>
              <p className={styles.content__descWrapper__desc}>
                {data.description}
              </p>
            </article>
            <Button
              className={styles.content__descBuyNowBtn}
            >{`Buy Now @ Rs.${data.price}`}</Button>
          </div>
        </div>
        <div className={styles.productCard__checkoutDetails}>
          <p
            className={styles.productCard__checkoutDetails__price}
          >{`MRP Rs.${data.price}`}</p>
          <Button className={styles.productCard__checkoutDetails__btn}>
            Buy Now
          </Button>
        </div>
        <Button
          className={styles.productCard__buyNowBtn}
        >{`Buy Now @ Rs.${data.price}`}</Button>
      </section>

      {/* <div className={styles.productCard__divider}></div> */}
    </div>
  );
};
ProductCard.propTypes = {
  data: PropTypes.object,
};

ProductCard.defaultProps = {
  data: {},
};

export default ProductCard;

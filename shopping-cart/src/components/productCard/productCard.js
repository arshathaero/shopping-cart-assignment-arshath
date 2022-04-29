
import Button from 'components/button/button';
import PropTypes from 'prop-types';
import styles from './productCard.module.scss'
const ProductCard = ({title,image,description,price,buttonClick}) =>{
    return (<div className={styles.productCard}>
        <h2 className={styles.productCard__title}>{title}</h2>
        <div className={styles.productCar__details}>
            <img className={styles.productCar__details__img} src={image} alt='productImg' />
            <p className={styles.productCar__details__desc}>{description}</p>
        </div>
        <div className={styles.productCard__checkoutdetails}>
            <p>Mrp Rs.{price}</p>
            <Button buttonClick={buttonClick}>Buy Now</Button>
        </div>
    </div>)
}
ProductCard.propTypes = {
    title: PropTypes.string,
    image:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.number,
    buttonClick:PropTypes.func
  
  };
  
  ProductCard.defaultProps = {
    title:'',
    image:'',
    description:'',
    price:0,
    buttonClick:()=>null
 
  };

export default ProductCard
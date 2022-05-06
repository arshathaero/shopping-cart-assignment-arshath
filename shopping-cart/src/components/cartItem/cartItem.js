
import React from 'react'
import styles from './cartItem.module.scss'
const CartItem=()=>{
    return (<div className={styles.cartItem}>
       <img className={styles.cartItem__img} src={require('assets/images/products/fruit-n-veg/apple.jpg')} alt='Product Image' />
       <div className={styles.cartItem__details}>
           <h2 className={styles.cartItem__details__title}>title</h2>
           <p className={styles.cartItem__details__quantityWrapper}>
               <i className={`fa-solid fa-minus ${styles.quantityWrapper__icon}`}></i>
               <span className={styles.quantityWrapper__count}>1</span>
               <i className={`fa-solid fa-plus ${styles.quantityWrapper__icon}`}></i>
                <span className={styles.quantityWrapper__price}> <i className={`fa-solid fa-xmark`}></i>&nbsp;&nbsp; Rs.187</span>
           </p>
       </div>
       <p className={styles.cartItem__subTotal}>Rs.187</p>
    </div>)
}


export default CartItem
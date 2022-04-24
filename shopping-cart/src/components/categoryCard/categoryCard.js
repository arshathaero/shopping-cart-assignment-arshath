import React from 'react'
import Button from 'components/button/button'
import PropTypes from 'prop-types';
import styles from './categoryCard.module.scss'
const CategoryCard = ({item}) => {

    return (<div style={{flexFlow:item.align === 'right' && 'row-reverse'}}  className={styles.categoryWrapper}>
        <img className={styles.categoryWrapper__img} src={item.img} />
        <div className={styles.categoryWrapper__content}>

            <h1 className={styles.categoryWrapper__content__title}>{item.title}</h1>
            <p className={styles.categoryWrapper__content__description}>{item.description}</p>
            <Button buttonClick={item.buttonClick} className={styles.categoryWrapper__content__button} >{item.buttonName}</Button>
        </div>
    </div>)
    
}
CategoryCard.propTypes = {
    item: PropTypes.object
  
  };
  
  CategoryCard.defaultProps = {
    item: {}
 
  };


export default CategoryCard
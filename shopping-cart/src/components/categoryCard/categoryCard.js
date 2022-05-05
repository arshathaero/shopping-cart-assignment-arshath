import React from 'react'
import Button from 'components/button/button'
import PropTypes from 'prop-types';
import styles from './categoryCard.module.scss'
import {getImageNameFromUrl} from 'utils/service'

const CategoryCard = ({item}) => {
  let evenData = item.order % 2 === 0;
    return (<div style={{flexFlow:evenData && 'row-reverse'}}  className={styles.categoryWrapper}>
        <img className={styles.categoryWrapper__img} src={require('assets/' + getImageNameFromUrl(item.imageUrl))} />
        <div className={styles.categoryWrapper__content}>

            <h1 className={styles.categoryWrapper__content__title}>{item.name}</h1>
            <p className={styles.categoryWrapper__content__description}>{item.description}</p>
            <Button  className={styles.categoryWrapper__content__button} >{`Explore ${item.key}`}</Button>
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
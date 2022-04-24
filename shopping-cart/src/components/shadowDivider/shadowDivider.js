import React from 'react'
import styles from './shadowDivider.module.scss'


const ShadowDivider = () =>{
    return (<div className={styles.shadowWrapper}>
    <div className={styles.shadowWrapper__shadow}></div>
  </div>)
}

export default  ShadowDivider
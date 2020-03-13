import React from 'react'

import arrow from '../../images/down-chevron.png'

import styles from './button.module.css'

const Button = () => {
  return (
    <a href="#about"> <div className={styles.container}>
      <img src={arrow} alt="arrow to page" />
    </div>
    </a>
  )
}

export default Button
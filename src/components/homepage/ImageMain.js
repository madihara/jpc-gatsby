import React from 'react'
import styles from './imagemain.module.css'

import image from '../../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg';

const ImageMain = () => {
  return (
    <div>
      <img src={image} alt='' className={styles.image} />
    </div>
  )
}

export default ImageMain;

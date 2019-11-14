import React from "react"
import LazyHero from "react-lazy-hero"

import heroimg from "../images/arts-and-crafts-close-up-colors-2973392.jpg"

import styles from "../styles/largeimage.module.css"

const LargeImage = () => {
  return (
    <LazyHero
      imageSrc={heroimg}
      opacity="0.5"
      color="#ececec"
      parallaxOffset="1"
      minHeight="65vh"
      isCentered={true}
      className="hero-container"
    >
      <h5 className={styles.text}>
        Contact us today to discuss your needs and timeline for your next
        project!
      </h5>
    </LazyHero>
  )
}

export default LargeImage

import React from "react"
import LazyHero from "react-lazy-hero"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import styles from "./largeimage.module.css"

const LargeImage = () => {
  return (
    <LazyHero
      imageSrc={heroimg}
      opacity="0.9"
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

import React from "react"
import LazyHero from "react-lazy-hero"
import heroimg from "../images/adult-analogue-indoors-2249290.jpg"
import Fade from "react-reveal"

import { Link } from "gatsby"

import styles from "../styles/simplehero.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannerTitle}>{title}</h1>
      <p className={styles.bannerInfo}>{info}</p>
      {children}
    </div>
  )
}

const SimpleHero = () => {
  return (
    <LazyHero
      imageSrc={heroimg}
      opacity="0.5"
      color="#0a1128"
      parallaxOffset="1"
      minHeight="83vh"
      isCentered={false}
      className="hero-container"
    >
      <Fade left>
        <Banner
          title="we specialize in commercial sewing"
          info="Here at JPC we have been manufacturing quality industrial textiles since 1984. From large commercial production to custom projects, we have everything to make your next project a success."
        >
          <Link
            to="/capabilities"
            className={`${styles.heroBtn} ${styles.btnBlue}`}
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className={`${styles.heroBtn} ${styles.btnWhite}`}
          >
            Contact Us
          </Link>
        </Banner>
      </Fade>
    </LazyHero>
  )
}

export default SimpleHero

import React from "react"
import LazyHero from "react-lazy-hero"

import heroImg from "../../images/adult-analogue-indoors-2249290.jpg"

import { Link } from "gatsby"

import styles from "./simplehero.module.css"

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
      imageSrc={heroImg}
      opacity="0.5"
      color="#0a1128"
      parallaxOffset="1"
      minHeight="110vh"
      isCentered={false}
      className="hero-container"
    >
      <div className={styles.navSub}>
        (574)444-7787
      </div>
      <Banner
        title="we specialize in commercial sewing."
        info="Here at JPC we have been manufacturing quality industrial textiles since 1984. From large commercial production to custom projects, we have everything to make your next project a success."
      >
        {/*}
        <button className={`${styles.heroBtn} ${styles.btnBlue}`}>
          <Link to="/capabilities" className={styles.link}>
            Learn More
          </Link>
        </button>
        <button className={`${styles.heroBtn} ${styles.btnWhite}`}>
          <Link to="/contact" className={styles.link}>
            Contact Us
          </Link>
        </button>
  {*/}
      </Banner>
    </LazyHero>
  )
}

export default SimpleHero

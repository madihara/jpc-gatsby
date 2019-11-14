import React from "react"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/HeroHeader"
import Zoom from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"
import image1 from "../images/fabrics-factory-industry-236748.jpg"

import styles from "../styles/services.module.css"

const services = () => (
  <Layout>
    <LazyHero
      imageSrc={heroimg}
      opacity="0.5"
      color="#0a1128"
      parallaxOffset="1"
      minHeight="45vh"
      isCentered={true}
      className="hero-container"
    >
      <Zoom>
        <HeroHeader title="Our services"></HeroHeader>
      </Zoom>
    </LazyHero>

    <section className={styles.services}></section>
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img
          src={image1}
          alt="sewing machine vector"
          className={styles.image}
        />
        <div className={styles.info}>Info</div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.image}>Image</div>
      <div className={styles.info}>Info</div>
    </div>
    <div className={styles.container}>
      <div className={styles.info}>Info</div>
      <div className={styles.image}>Image</div>
    </div>
  </Layout>
)

export default services

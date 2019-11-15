import React from "react"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import Zoom from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"
import image1 from "../images/fabrics-factory-industry-236748.jpg"

import styles from "./styles-pages/services.module.css"

const services = () => (
  <Layout>
    <LazyHero
      imageSrc={heroimg}
      opacity="0.7"
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

    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <img
            src={image1}
            alt="sewing machine vector"
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h1>Commercial Production</h1>
          <span>text</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.info}>
          <h1>Custom Projects</h1>
          <span>text</span>
        </div>

        <div className={styles.image}>
          <img
            src={image1}
            alt="sewing machine vector"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageBox}>
          <img
            src={image1}
            alt="sewing machine vector"
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h1>3D Cad Design</h1>
          <span>text</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default services

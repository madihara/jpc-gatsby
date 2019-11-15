import React from "react"
import Layout from "../components/Layout"
import data from "../constants/featurecards"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import Zoom from "react-reveal"
import cards from "../constants/featurecards"

import photo from "../images/fabrics-factory-industry-236748.jpg"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import styles from "./styles-pages/capabilities.module.css"

const FeatureCard = ({ icon, title, info }) => {
  return (
    <div>
      <img src={photo} alt={title} className={styles.photo} />
      <div className={styles.textBox}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.info}>{info}</p>
        <button className={styles.btn}>
          <a href="/capabilities">Learn More</a>
        </button>
      </div>
    </div>
  )
}

const capabilities = () => {
  return (
    <Layout>
      <LazyHero
        imageSrc={heroimg}
        opacity="0.7"
        color="#0a1128"
        parallaxOffset="1"
        minHeight="45vh"
        isCentered={true}
      >
        <Zoom>
          <HeroHeader title="manufacturing capabilities" />
        </Zoom>
      </LazyHero>
      <div>
        <h1> Many Capabilties</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </Layout>
  )
}

export default capabilities

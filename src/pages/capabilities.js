import React from "react"
import Layout from "../components/Layout"
import data from "../constants/featurecards"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/HeroHeader"
import Zoom from "react-reveal"
import cards from "../constants/featurecards"

import photo from "../images/fabrics-factory-industry-236748.jpg"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import styles from "../styles/capabilities.module.css"

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
        opacity="0.5"
        color="#0a1128"
        parallaxOffset="1"
        minHeight="45vh"
        isCentered={true}
      >
        <Zoom>
          <HeroHeader title="manufacturing capabilities" />
        </Zoom>
      </LazyHero>
      <div className={styles.box}>
        <div className={styles.container}>
          {cards.map(item => {
            return (
              <div className={styles.card}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  info={item.info}
                ></FeatureCard>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default capabilities

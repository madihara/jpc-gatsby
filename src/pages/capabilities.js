import React from "react"
import Layout from "../components/Layout"
import data from "../constants/featurecards"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/HeroHeader"
import Zoom from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import img from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import styles from "../styles/capabilities.module.css"
import reactReveal from "react-reveal"

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
      <div className={styles.container}>
        <ul className={styles.list}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <h5 className={styles.listItem}>{item.title}</h5>
              </li>
            )
          })}
        </ul>
        <div className={styles.info}>
          <div>info</div>
          <div>
            <img src={img} className={styles.img} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default capabilities

import React from "react"
import cards from "../constants/featurecards"

import photo from "../images/fabrics-factory-industry-236748.jpg"

import styles from "../styles/iconfeatures.module.css"

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

const IconFeatures = () => {
  return (
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
  )
}

export default IconFeatures

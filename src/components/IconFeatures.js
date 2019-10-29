import React from "react"
import cards from "../constants/featurecards"

import styles from "../styles/iconfeatures.module.css"

const FeatureCard = ({ icon, title, info }) => {
  return (
    <div>
      <img src={icon} alt={title} />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.info}>{info}</p>
    </div>
  )
}

const IconFeatures = () => {
  return (
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
  )
}

export default IconFeatures

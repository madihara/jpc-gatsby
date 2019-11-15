import React from "react"
import Fade from "react-reveal"

import cards from "../constants/featurecards"
import image1 from "../images/icons/logistics-delivery-truck-and-clock.svg"
import image2 from "../images/icons/sewing-machine.svg"
import image3 from "../images/icons/3d-printing-software.svg"

import styles from "../styles/iconfeatures.module.css"

const FeatureCard = ({ icon, title, info }) => {
  return (
    <div>
      <img src={icon} alt={title} className={styles.photo} />
      <div className={styles.textBox}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  )
}

const IconFeatures = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.card}>
          <FeatureCard
            icon={image1}
            title="Commercial Production"
            info="text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible its unbelievable a good girl she smells horrible its unbelievable
            text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horriblea good girl she smells horrible its unbelievable
            text is she sick how are her poops she doesn't really  she smells horrible"
          ></FeatureCard>
        </div>
        <div className={styles.card}>
          <FeatureCard
            icon={image2}
            title="Custom Projects"
            info="text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible its unbelievable a good girl she smells horrible its unbelievable
            text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible"
          ></FeatureCard>
        </div>
        <div className={styles.card}>
          <FeatureCard
            icon={image3}
            title="3D Cad Design"
            info="text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible its unbelievabletext is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible its unbelievable
            text is she sick how are her poops she doesn't really poop she just lies there like a good girl she smells horrible "
          ></FeatureCard>
        </div>
      </div>
    </div>
  )
}

export default IconFeatures

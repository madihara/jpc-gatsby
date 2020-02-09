import React from "react"
import { Zoom } from "react-reveal"

import image1 from "../../images/icons/logistics-delivery-truck-and-clock.svg"
import image2 from "../../images/icons/sewing-machine.svg"
import image3 from "../../images/icons/3d-printing-software.svg"

import styles from "./iconfeatures.module.css"

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
      <Zoom>
        <div className={styles.container}>
          <div className={styles.card}>
            <FeatureCard
              icon={image1}
              title="Commercial Production"
              info="We have a long history of producing consistent, large quantities of products with short lead times.  We have worked with many large industries, including automotive, marine, and airline and ****____****"
            ></FeatureCard>
          </div>
          <div className={styles.card}>
            <FeatureCard
              icon={image2}
              title="Custom Projects"
              info="We want to be the first you call for all your custom needs. We know that no matter how big or small a project is, it needs to be done right. We are happy to help you with your fabric needs from conception to finished product."
            ></FeatureCard>
          </div>
          <div className={styles.card}>
            <FeatureCard
              icon={image3}
              title="3D Cad Design"
              info="Our 3D CAD *****MACHINE****??? Need info on this.
              text text text  text text text  text text text  text text text  text text text  text text text  "
            ></FeatureCard>
          </div>
        </div>
      </Zoom>
    </div>
  )
}

export default IconFeatures

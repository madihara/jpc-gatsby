import React from "react"
import { Fade } from "react-reveal"
import image1 from "../../images/Sewing-Machine-PNG-File.png"

import styles from "./maininfo.module.css"

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.info}>
          <header className={styles.title}>About us</header>
          <h3 className={styles.subTitle}>
            JPC has been sewing quality textiles for over 28 years.
          </h3>
          <p className={styles.subText}>
            Beginning in 1984, JPC started as a small, family run business in
            Elkhart, Indiana. We manufactured and provided floor mats for the
            thriving van conversion industry for many years. In time, JPC grew
            larger and we expanded our resources and expertise to provide sewn
            textiles to a variety of industries around the world.
          </p>
          <p className={styles.subText}>
            At JPC we offer best in class commercial sewing and innovative
            solutions for our customers. If you have any fabric production
            needs, we are here to help! We pride ourselves in our long history
            of providing our customers with top of the line products and
            services. Quality and consistency are our highest priorities and we
            strive to ensure client satisfaction with short lead times. 
          </p>
          <p className={styles.subText}>
            We are also happy to now offer ___ with top of the line 3D CAD
            scanning capabilities, ensuring our measurements will be precise and
            fit perfectly. ADD A BIT MORE
          </p>
          <p className={styles.subText}>
            {" "}
            We look forward to bringing your next project to life.
          </p>
        </div>

        <div className={styles.imagebox}>
          <img src={image1} alt="sewing" className={styles.image}></img>
        </div>
      </div>
    </div>
  )
}

export default MainInfo

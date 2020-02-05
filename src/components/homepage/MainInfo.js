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
          <p className={styles.subText}>Starting in Year,lsdkfjljsdkfj</p>
          <p className={styles.subText}>
            The new common language will be more simple and regular than the
            existing European languages. It will be as simple as Occidental; in
            fact, it will be Occidental.
          </p>
          <p className={styles.subText}>
            The new common language will be more simple and regular than the
            existing European languages. It will be as simple as Occidental; in
            fact, it will be Occidental.
          </p>
          <p className={styles.subText}>
            The new common language will be more simple and regular than the
            existing European languages. It will be as simple as Occidental; in
            fact, it will be Occidental.
          </p>
          <p className={styles.subText}>
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary.The new common language will be more simple
            and regular than the existing European languages. It will be as
            simple as Occidental; in fact, it will be Occidental.
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

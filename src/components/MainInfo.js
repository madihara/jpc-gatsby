import React from "react"
import image1 from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import styles from "../styles/maininfo.module.css"

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Our company</h1>
        <h3 className={styles.subTitle}>
          JPC has been sewing for over 28 years.
        </h3>
        <p className={styles.subText}>
          The European languages are members of the same family. Their separate
          existence is a myth. For science, music, sport, etc, Europe uses the
          same vocabulary.
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
      </div>
      <div className={styles.imagebox}>
        <img src={image1} alt="sewing" className={styles.image}></img>
      </div>
    </div>
  )
}

export default MainInfo

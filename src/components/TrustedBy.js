import React from "react"

import icon from "../images/jpc-logocir.png"

import styles from "../styles/trustedby.module.css"

const TrustedBy = () => {
  return (
    <div>
      <div className={styles.titleBox}>
        <h5 className={styles.title}>Trusted By</h5>
      </div>
      <div className={styles.container}>
        <img src={icon} alt="" className={styles.icon} />{" "}
        <img src={icon} alt="" className={styles.icon} />{" "}
        <img src={icon} alt="" className={styles.icon} />{" "}
        <img src={icon} alt="" className={styles.icon} />
      </div>
    </div>
  )
}

export default TrustedBy

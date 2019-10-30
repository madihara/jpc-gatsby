import React from "react"

import styles from "../styles/heroheader.module.css"

const HeroHeader = ({ title }) => {
  return <div className={styles.header}>{title}</div>
}

export default HeroHeader

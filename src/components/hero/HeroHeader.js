import React from "react"

import styles from "./heroheader.module.css"

const HeroHeader = ({ title }) => {
  return <div className={styles.header}>{title.toUpperCase()}</div>
}

export default HeroHeader

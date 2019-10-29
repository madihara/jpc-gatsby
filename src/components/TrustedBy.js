import React from "react"

import icons from "../constants/icons"

import styles from "../styles/trustedby.module.css"

const TrustedBy = () => {
  return (
    <div className={styles.container}>
      <div>
        <h5>Trusted By</h5>
      </div>
      <div>
        {icons.map(item => {
          return <img src={item.icon} alt={item.title} />
        })}
      </div>
    </div>
  )
}

export default TrustedBy

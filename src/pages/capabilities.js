import React from "react"
import Layout from "../components/Layout"
import data from "../constants/featurecards"

import styles from "../styles/capabilities.module.css"

const capabilities = () => {
  return (
    <Layout>
      <ul className={styles.list}>
        {data.map((item, index) => {
          return <li key={item.index}>{item.title}</li>
        })}
      </ul>
    </Layout>
  )
}

export default capabilities

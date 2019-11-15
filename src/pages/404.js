import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import styles from "./styles-pages/error.module.css"

const error = () => (
  <Layout>
    <div className={styles.errorpage}>
      <h1 className={styles.message}>Oops! It's a dead-end</h1>
      <Link className={styles.btn} to="/">
        Back to the home page
      </Link>
    </div>
  </Layout>
)

export default error

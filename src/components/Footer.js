import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"

import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.box}>JPC</div>
        <div className={styles.box}>
          <div className={styles.links}>
            {links.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  activeClassName={styles.active}
                >
                  {item.text}
                </Link>
              )
            })}
          </div>
        </div>
        <div className={styles.box}>Map</div>
        <div className={styles.box}>Map</div>
      </section>
      <div className={styles.copyright}>
        Copyright All Rights Reserved by JPC, LLC
      </div>
    </div>
  )
}

export default Footer

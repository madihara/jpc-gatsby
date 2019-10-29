import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import logo from "../images/jpc-logocir.png"

import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.footer}>
        <div className={styles.box}>
          <div className={styles.links}>
            <h5 className={styles.title}> Navigation</h5>
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
        <div className={styles.boxImg}>
          <img src={logo} alt="jpc" className={styles.logo} />
        </div>
        <div className={styles.box}>JPC, LLC</div>
      </section>
      <div className={styles.copyright}>
        Copyright &copy; All Rights Reserved by JPC, LLC
      </div>
    </div>
  )
}

export default Footer

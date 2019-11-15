import React from "react"
import { Link } from "gatsby"
import links from "../../constants/links"

import logo from "../../images/jpc-logocir.png"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.footer}>
        <div className={styles.boxImg}>
          <img src={logo} alt="jpc" className={styles.logo} />

          <h5>JPC, LLC</h5>
          <h5>2926 Paul Dr</h5>
          <h5>Elkhart, IN 44444</h5>
          <h5>jpccustom@gmail.com</h5>
          <h5>574 444 7787</h5>
        </div>
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
        <div className={styles.box}></div>
      </section>
      <div className={styles.copyright}>
        2019 Copyright &copy; All Rights Reserved by JPC, LLC
      </div>
    </div>
  )
}

export default Footer
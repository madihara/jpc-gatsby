import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import contact from "../constants/contact"
import logo from "../images/jpc-logo.png"
import menubtn from "../images/hamburgermenu.svg"
import phoneicon from "../images/call-answer.png"

import styles from "../styles/navbar.module.css"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  console.log(isOpen)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="jpc" className={styles.logo} />
          <button className={styles.logoBtn} onClick={toggleNav}>
            <img src={menubtn} className={styles.logoIcon} alt="menubtn" />
          </button>
        </div>
        <div>
          <ul
            className={
              isOpen
                ? `${styles.navlinks} ${styles.showNav}`
                : `${styles.navlinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName={styles.active}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={styles.navSub}>
        <img src={phoneicon} alt="phone" className={styles.phoneIcon}></img>
        &nbsp; +1 574 293 8030
      </div>
    </nav>
  )
}

export default NavBar

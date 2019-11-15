import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../../constants/links"
import logo from "../../images/jpc-logocir.png"
import menubtn from "../../images/icons/menu-button.svg"

import styles from "./navbar.module.css"

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
        <div className={styles.fixed}>
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
    </nav>
  )
}

export default NavBar

import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../../constants/links"
import logo from "../../images/jpc-logocir.png"
import menuBtn from "../../images/icons/menu-button.svg"

import styles from "./navbar.module.css"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  console.log(isOpen)

  return (
    <nav className={styles.navbar}>
      <section className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="jpc" className={styles.logo} />
          <button className={styles.menuBtn} onClick={toggleNav}>
            <img src={menuBtn} className={styles.logoIcon} alt="menu button" />
          </button>
        </div>
        <div className={styles.fixed}>
          <ul
            className={
              isOpen
                ? `${styles.menuBtn} ${styles.navLinks} ${styles.showNav} `
                : `${styles.navLinks}`
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
      </section>
    </nav>
  )
}

export default NavBar

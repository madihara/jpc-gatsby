import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../../constants/links"
import logo from "../../images/jpc-logocir.png"
import menuBtn from "../../images/icons/menu-button.svg"

import styles from "./navbar.module.css"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)
  const [isSticky, setSticky] = useState(false)


  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const stickyNav = () => {
    if (window.windowYOffset > 50) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }


  console.log(isSticky)

  return (
    <><div style={{
      position: "relative"
    }}>
      <nav onScroll={stickyNav} className={isSticky ? `${styles.navbar} ${styles.sticky}` : `${styles.navbar} `}>
        <section className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src={logo} alt="jpc logo" className={styles.logo} />
            <button className={styles.menuBtn} onClick={toggleNav}>
              <img src={menuBtn} className={styles.logoIcon} alt="menu button" />
            </button>
          </div>
          <div className={styles.fixed}>
            <ul
              className={
                isOpen
                  ? `${styles.navLinks} ${styles.showNav} `
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
    </div>
    </>
  )
}

export default NavBar

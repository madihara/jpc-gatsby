import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import links from "../../constants/links"

import logo from "../../images/icons/jpc-logocir.png"

import styles from "./footer.module.css"

const Footer = () => {

  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          business{
            name
            streetAddress
            cityAddress
            phone
            email
      }
    }
  }
}
`)

  const { name, streetAddress, cityAddress, phone, email } = data.site.siteMetadata.business

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
        <div className={styles.box}>
          <h5 className={styles.title}>Contact</h5>
          <h5>{name}</h5>
          <h5>{streetAddress} </h5>
          <h5>{cityAddress}</h5>
          <h5>{phone}</h5>
          <h5>{email}</h5>
        </div>
        <div className={styles.boxImg}>
          <img src={logo} alt="jpc" className={styles.logo} />
        </div>
      </section>
      <div className={styles.copyright}>
        2020 Copyright &copy; All Rights Reserved by JPC, LLC
      </div>
    </div >
  )
}

export default Footer

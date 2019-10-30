import React from "react"

import styles from "../styles/contactform.module.css"

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Connect with us</h2>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Full Name"
            ></input>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            ></input>
          </div>
          <div>
            <textarea
              type="message"
              name="message"
              id="message"
              className={`${styles.formControl} ${styles.text}`}
              placeholder="Tell us more about your project needs and timeline"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="send" className={styles.submit}></input>
          </div>
        </form>
      </div>
      <div>
        <h2 className={styles.ino}>Call us today!</h2>
      </div>
    </section>
  )
}

export default ContactForm

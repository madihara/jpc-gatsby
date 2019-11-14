import React from "react"

import styles from "../styles/contactform.module.css"

const ContactForm = () => {
  return (
    <>
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
                placeholder="Name"
              ></input>
            </div>
            <div>
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
              <input
                type="submit"
                value="send"
                className={styles.submit}
              ></input>
            </div>
          </form>
        </div>
        <div className={styles.box}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.203895273583!2d-86.02549457468723!3d41.72893430399752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791dd64e67%3A0x25f3651a67b5576!2s2926%20Paul%20Dr%2C%20Elkhart%2C%20IN%2046514!5e0!3m2!1sen!2sus!4v1573413624243!5m2!1sen!2sus"
            width="400"
            height="300"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default ContactForm

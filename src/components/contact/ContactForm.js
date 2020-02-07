import React from "react"

import phoneImg from "../../images/icons/call-answer.png"
import emailImg from "../../images/icons/e-mail-envelope.svg"
import addressImg from "../../images/icons/maps-and-flags.svg"

import styles from "./contactform.module.css"

const ContactForm = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box1}>
          <h2 className={styles.title}>Send us a message</h2>
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
                title="Email"
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
                placeholder="Tell us more about your project needs and timeline."
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
        <div className={styles.box2}>
          <h3 className={styles.title2}>Contact Us</h3>

          <div className={styles.contact}>
            <h3 className={styles.subs}>Phone</h3>
            <img src={phoneImg} alt="" className={styles.icons} />
            <span> &nbsp; +1 574 293 8030</span>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.subs}>Email</h3>
            <img src={emailImg} alt="" className={styles.icons}></img>
            <span> &nbsp; jpccustom@gmail.com</span>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.subs}>Address</h3>
            <div className={styles.flex}>
              <img src={addressImg} alt="" className={styles.icons} />
              &nbsp; &nbsp;
              <div>
                <p> 2926 Paul Dr.</p>
                <p> Elkhart, Indiana 48100</p>
              </div>
            </div>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.203895273583!2d-86.02549457468723!3d41.72893430399752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816db791dd64e67%3A0x25f3651a67b5576!2s2926%20Paul%20Dr%2C%20Elkhart%2C%20IN%2046514!5e0!3m2!1sen!2sus!4v1573413624243!5m2!1sen!2sus"
            width="400"
            height="300"
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default ContactForm

import React from "react"

import Layout from "../components/Layout/Layout"
import Head from '../components/Head'
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import { Zoom, Fade } from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"
import image1 from '../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg'
import image2 from "../images/fabrics-factory-industry-236748.jpg"
import image3 from '../images/arts-and-crafts-close-up-colors-2973392.jpg'
import image4 from '../images/j-williams-ehePIW7RA2g-unsplash.jpg'

import styles from "./styles-pages/services.module.css"

const services = () => {

  return (
    <Layout>
      <Head title="Services" />
      <LazyHero
        imageSrc={heroimg}
        opacity="0.7"
        color="#0a1128"
        parallaxOffset="1"
        minHeight="45vh"
        isCentered={true}
        className="hero-container"
      >
        <Zoom>
          <HeroHeader title="Our services"></HeroHeader>
        </Zoom>
      </LazyHero>
      <div className={styles.flex}>
        <Fade left>
          <div className={styles.container}>
            <div className={styles.info}>
              <h3 className={styles.title}>
                commercial
          </h3>
              <p className={styles.first}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              <p>Magna fugiat do deserunt veniam culpa sunt excepteur mollit nisi ea laborum. In ut consectetur ut esse cillum excepteur officia ea. Non et laboris sit non aliqua cillum adipisicing tempor labore ex enim aliquip sint aute.</p>
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${image3})` }} ></div>
          </div ></Fade>
        <Fade right>
          <div className={styles.container}>
            <div className={styles.image} style={{ backgroundImage: `url(${image2})` }} ></div>
            <div className={`${styles.info} ${styles.right}`}>
              <h3 className={styles.title}>
                custom
          </h3>
              <p className={styles.first}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              <p>Magna fugiat do deserunt veniam culpa sunt excepteur mollit nisi ea laborum. In ut consectetur ut esse cillum excepteur officia ea. Non et laboris sit non aliqua cillum adipisicing tempor labore ex enim aliquip sint aute.</p>
            </div>

          </div >
        </Fade>
        <Fade left>
          <div className={styles.container}>
            <div className={styles.info}>
              <h3 className={styles.title} style={{ textTransform: 'uppercase' }}>
                3d cad
          </h3>
              <p className={styles.first}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              <p>Magna fugiat do deserunt veniam culpa sunt excepteur mollit nisi ea laborum. In ut consectetur ut esse cillum excepteur officia ea. Non et laboris sit non aliqua cillum adipisicing tempor labore ex enim aliquip sint aute.</p>
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${image4})` }} ></div>
          </div >
        </Fade>
      </div>
    </Layout>
  )
}

export default services

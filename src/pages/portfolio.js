import React from "react"
import Layout from "../components/Layout/Layout"
import Head from '../components/Head'
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import { Zoom, Fade } from "react-reveal"

import ImageGallery from "../components/portfolio/ImageGallery"

import heroImg from '../images/hero3.jpg'

import styles from "./styles-pages/portfolio.module.css"

const portfolio = () => {


  return (
    <Layout>
      <Head title="Portfolio" />
      <LazyHero
        imageSrc={heroImg}
        opacity="0.7"
        color="#0a1128"
        parallaxOffset="1"
        minHeight="45vh"
        isCentered={true}
        className="hero-container"
      >
        <Zoom>
          <HeroHeader title="Recent Projects"></HeroHeader>
        </Zoom>
      </LazyHero>
      <Fade up>
        <ImageGallery />
      </Fade>
      <Fade>
        <div className={styles.box}>
          <div className={styles.paragraph}>
            This is just a small sample of the work we can do. With our 3D CAD
            Image Scanner, we can have precise measurements of anything quickly.
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default portfolio

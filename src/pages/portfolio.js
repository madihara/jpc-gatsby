import React from "react"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/HeroHeader"
import { Zoom, Fade } from "react-reveal"

import ImageGallery from "../components/ImageGallery"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

const portfolio = () => {
  return (
    <Layout>
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
          <HeroHeader title="Recent Projects"></HeroHeader>
        </Zoom>
      </LazyHero>
      <Fade up>
        <ImageGallery />
      </Fade>
    </Layout>
  )
}

export default portfolio

import React from "react"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import { Zoom, Fade } from "react-reveal"

import ImageGallery from "../components/portfolio/ImageGallery"

import heroImg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"



const portfolio = () => {
  var style = {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    margin: '10rem',
    paddingRight: '10rem',
    paddingLeft: '10rem'
  }

  return (
    <Layout>
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
        <div style={style}>
          This is just a small sample of the work we can do. With our 3D CAD Image Scanner, we can have precise measurements of anything quickly.
        </div>
      </Fade>
    </Layout>
  )
}

export default portfolio

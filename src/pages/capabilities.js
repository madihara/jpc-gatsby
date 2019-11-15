import React from "react"
import Layout from "../components/Layout"

import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import Zoom from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

const capabilities = () => {
  return (
    <Layout>
      <LazyHero
        imageSrc={heroimg}
        opacity="0.7"
        color="#0a1128"
        parallaxOffset="1"
        minHeight="45vh"
        isCentered={true}
      >
        <Zoom>
          <HeroHeader title="manufacturing capabilities" />
        </Zoom>
      </LazyHero>
      <div>
        <h1> Many Capabilties</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </Layout>
  )
}

export default capabilities

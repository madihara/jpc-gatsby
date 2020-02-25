import React from "react"
import Layout from "../components/Layout/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import Zoom from "react-reveal"
import ContactForm from "../components/contact/ContactForm"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

const contact = () => (
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
        <HeroHeader title="Contact Us"></HeroHeader>
      </Zoom>
    </LazyHero>
    <ContactForm />
  </Layout>
)

export default contact

import React from "react"
import Layout from "../components/Layout/Layout"
import Head from '../components/Head'
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import Zoom from "react-reveal"
import ContactForm from "../components/contact/ContactForm"

import heroimg from '../images/herocontact.jpg'

const contact = () => (
  <Layout>
    <Head title="Contact" />
    <LazyHero
      imageSrc={heroimg}
      opacity="0.8"
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

import React from "react"
import SimpleHero from "../components/hero/SimpleHero"
import IconFeatures from "../components/homepage/IconFeatures"
import MainInfo from "../components/homepage/MainInfo"
import ImageMain from '../components/homepage/ImageMain';

import "../styles/styles.css"

import Layout from "../components/Layout/Layout"

export default () => (
  <>
    <Layout>
      <SimpleHero />
      <MainInfo />
      <ImageMain />
      <IconFeatures />
    </Layout>
  </>
)

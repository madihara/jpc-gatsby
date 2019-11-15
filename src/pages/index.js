import React from "react"
import SimpleHero from "../components/hero/SimpleHero"
import IconFeatures from "../components/homepage/IconFeatures"
import MainInfo from "../components/homepage/MainInfo"
import LargeImage from "../components/LargeImage"

import "../styles/styles.css"

import Layout from "../components/Layout"

export default () => (
  <>
    <Layout>
      <SimpleHero />

      <IconFeatures />
      <MainInfo />
      <LargeImage />
    </Layout>
  </>
)

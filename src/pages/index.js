import React from "react"
import SimpleHero from "../components/SimpleHero"
import IconFeatures from "../components/IconFeatures"
import MainInfo from "../components/MainInfo"
import TrustedBy from "../components/TrustedBy"

import "../styles/styles.css"

import Layout from "../components/Layout"

export default () => (
  <>
    <Layout>
      <SimpleHero />
      <IconFeatures />
      <MainInfo />
      <TrustedBy />
    </Layout>
  </>
)

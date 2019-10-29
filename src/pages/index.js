import React from "react"
import SimpleHero from "../components/SimpleHero"
import IconFeatures from "../components/IconFeatures"
import TrustedBy from "../components/TrustedBy"

import "../styles/styles.css"

import Layout from "../components/Layout"

export default () => (
  <>
    <Layout>
      <SimpleHero />
      <IconFeatures />
      <TrustedBy />
    </Layout>
  </>
)

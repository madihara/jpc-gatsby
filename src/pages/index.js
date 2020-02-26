import React from "react"
import SimpleHero from "../components/hero/SimpleHero"
import IconFeatures from "../components/homepage/IconFeatures"
import MainInfo from "../components/homepage/MainInfo"
import ImageMain from '../components/homepage/ImageMain';


import "../styles/styles.css"

import Layout from "../components/Layout/Layout"
import Head from '../components/Head'

export default () => (
  <>
    <Layout>
      <Head title="Home" />
      <SimpleHero />
      <MainInfo />
      <ImageMain />
      <IconFeatures />
    </Layout>
  </>
)

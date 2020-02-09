import React from "react"
import Layout from "../components/Layout"

import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import { Zoom, Fade } from "react-reveal"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"

import "react-tabs/style/react-tabs.css"
import styles from "./styles-pages/capabilities.module.css"

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
      <Fade right>
        <div className={styles.container}>
          <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
              <Tab>Single Lock Stitching</Tab>
              <Tab>Double Lock Stitching</Tab>
              <Tab>Long Arm Sewing</Tab>
              <Tab>Double Axis Cutting Table</Tab>
              <Tab>Bar Tackers</Tab>
              <Tab>Grommetting</Tab>
            </TabList>
            <TabPanel className={styles.panel}>
              <ul>
                <li>thing 1</li>
                <li> thing 2</li>
                <li> thing 3</li>
              </ul>
            </TabPanel>
            <TabPanel className={styles.panel2}>Goodbye</TabPanel>
            <TabPanel className={styles.panel2}>3</TabPanel>
            <TabPanel className={styles.panel2}>4</TabPanel>
            <TabPanel className={styles.panel2}>5</TabPanel>
            <TabPanel className={styles.panel2}>6</TabPanel>
          </Tabs>
        </div>
      </Fade>
    </Layout>
  )
}

export default capabilities

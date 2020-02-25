import React from "react"
import Layout from "../components/Layout/Layout"
import LazyHero from "react-lazy-hero"
import HeroHeader from "../components/hero/HeroHeader"
import { Zoom, Fade } from "react-reveal"

import heroimg from "../images/jezael-melgoza-HYQvV8wWX18-unsplash.jpg"
import image1 from "../images/fabrics-factory-industry-236748.jpg"

import styles from "./styles-pages/services.module.css"

const services = () => (
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
        <HeroHeader title="Our services"></HeroHeader>
      </Zoom>
    </LazyHero>

    <Fade up>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <img
              src={image1}
              alt="sewing machine vector"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h1>Commercial Production</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              augue ipsum, euismod quis massa eu, aliquet faucibus risus. Nullam
              bibendum dapibus nibh, ut pellentesque libero posuere sed. Sed a
              justo id justo dapibus condimentum nec vitae nibh. Praesent
              luctus, odio in ornare lobortis, augue leo efficitur metus, id
              porttitor ligula lacus nec arcu. Nullam fringilla, massa in mollis
              sodales, ipsum sapien iaculis erat, in facilisis tellus metus id
              purus. In in risus et nisi tempor porta. Proin id sem ut metus
              lobortis euismod. Suspendisse potenti. Ut ac turpis eros. Mauris
              varius at sem eu lobortis. Sed sollicitudin a magna et vestibulum.
              Nam aliquet quis dui vitae egestas. Aenean cursus mauris vitae est
              eleifend placerat. Duis in facilisis odio, ac mollis magna.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum eu leo mauris. Morbi eu sapien odio. Maecenas justo
              libero, rhoncus et pharetra id, porttitor et leo. Nulla vel
              eleifend elit. Aenean et diam gravida, convallis ante et, bibendum
              est. Praesent consequat leo non accumsan viverra. Etiam hendrerit
              convallis urna vitae tempus. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </span>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.info}>
            <h1>Custom Projects</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              augue ipsum, euismod quis massa eu, aliquet faucibus risus. Nullam
              bibendum dapibus nibh, ut pellentesque libero posuere sed. Sed a
              justo id justo dapibus condimentum nec vitae nibh. Praesent
              luctus, odio in ornare lobortis, augue leo efficitur metus, id
              porttitor ligula lacus nec arcu. Nullam fringilla, massa in mollis
              sodales, ipsum sapien iaculis erat, in facilisis tellus metus id
              purus. In in risus et nisi tempor porta. Proin id sem ut metus
              lobortis euismod. Suspendisse potenti. Ut ac turpis eros. Mauris
              varius at sem eu lobortis. Sed sollicitudin a magna et vestibulum.
              Nam aliquet quis dui vitae egestas. Aenean cursus mauris vitae est
              eleifend placerat. Duis in facilisis odio, ac mollis magna.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum eu leo mauris. Morbi eu sapien odio. Maecenas justo
              libero, rhoncus et pharetra id, porttitor et leo. Nulla vel
              eleifend elit. Aenean et diam gravida, convallis ante et, bibendum
              est. Praesent consequat leo non accumsan viverra. Etiam hendrerit
              convallis urna vitae tempus. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </span>
          </div>

          <div className={styles.image}>
            <img
              src={image1}
              alt="sewing machine vector"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.imageBox}>
            <img
              src={image1}
              alt="sewing machine vector"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h1>3D Cad Design</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              augue ipsum, euismod quis massa eu, aliquet faucibus risus. Nullam
              bibendum dapibus nibh, ut pellentesque libero posuere sed. Sed a
              justo id justo dapibus condimentum nec vitae nibh. Praesent
              luctus, odio in ornare lobortis, augue leo efficitur metus, id
              porttitor ligula lacus nec arcu. Nullam fringilla, massa in mollis
              sodales, ipsum sapien iaculis erat, in facilisis tellus metus id
              purus. In in risus et nisi tempor porta. Proin id sem ut metus
              lobortis euismod. Suspendisse potenti. Ut ac turpis eros. Mauris
              varius at sem eu lobortis. Sed sollicitudin a magna et vestibulum.
              Nam aliquet quis dui vitae egestas. Aenean cursus mauris vitae est
              eleifend placerat. Duis in facilisis odio, ac mollis magna.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum eu leo mauris. Morbi eu sapien odio. Maecenas justo
              libero, rhoncus et pharetra id, porttitor et leo. Nulla vel
              eleifend elit. Aenean et diam gravida, convallis ante et, bibendum
              est. Praesent consequat leo non accumsan viverra. Etiam hendrerit
              convallis urna vitae tempus. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </span>
          </div>
        </div>
      </section>
    </Fade>
  </Layout>
)

export default services

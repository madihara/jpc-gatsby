import React, { Component } from "react"
import ImageCard from "./ImageCard"

import "./image-gallery.scss"

export default class ImageGallery extends Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: "boat covers",
          imageUrl: "https://i.imgur.com/K1h8dEI.jpg",
          id: 1,
          features: {
            1: "durable",
            2: "weather resistant",
          },
        },

        {
          title: "PCA Layflat Ducting",
          imageUrl: "https://i.imgur.com/FvlR0yo.jpg",
          id: 3,
        },
        {
          title: "boat interior",
          imageUrl:
            "https://lh3.googleusercontent.com/izlcRo2qS6q88aWuj4983UcxGXtBEUclxl2SLUBgUGgM8w6IEuH19kxe96QwVJVYIDbBFxKNwSF-MEOxdMtRI1wyBKQ_-YITGvzAH_v0WViS4GxytlHct67wKTstfo1HlrVA4GgmLQ=w2400",
          id: 4,
        },
        {
          title: "motorcycle covers",
          imageUrl:
            "https://www.covercraft.com/images/products/hero/custom-fit-motorcycle-covers-for-harley-davidson_psmh_silver_main1.jpg",
          size: "large",
          id: 5,
        },
        {
          title: "bimini tops",
          imageUrl:
            "https://www.paulscanvas.com/wp-content/uploads/2016/11/boats-with-towers-15.jpg",
          size: "large",
          id: 6,
        },
        {
          title: "marine mat",
          imageUrl:
            "https://lh3.googleusercontent.com/JUbMQkstcipxotZGfQTN-2H0vNLy3GSv_Eu-fQmAH6PDBtaTZdaOI3yqTNyil7jJGXQe8J6dWBlN0uGDyYk0YfxC91iT-L21jKKGGsJh1kAgxw0rUOJ19B8lx1Fk6Sym0iRwnAW_PA=w2400",
          id: 7,
        },

        {
          title: "JetSki Covers",
          imageUrl:
            "https://lh3.googleusercontent.com/Jp3fRbzUhuRPvlenmczP_TpKMLG0y1MfBv0kjPgmfLNfA2YRqINHXRu8FE8ClAvBNcppG0Q8ljDubU_7yQjMPI8_XRNV2wYDqTF5kk2EssOxqpx52ZBjCShelUKaCsDIIX9iNOHfYQ=w2400",
          id: 8,
        },
        {
          title: "outdoor equipment",
          imageUrl:
            "https://lh3.googleusercontent.com/z2g9Cnoo9XqXBRF7dzHF9MROS3eLfbJcZSSXjE1eLOu4ILtJivLT6EFr8oSRZ5Nan_zqXRIhfFZZ_sJtUxxURbZXO2pmupYLOW0-ejmgKR0NHqu2VGOrP7oSqZxs1wDNV7NVOy94HA=w2400",
          id: 9,
        },
        {
          title: "lift curtains",
          imageUrl:
            "https://lh3.googleusercontent.com/jxgjCZ34yPjwhxYsdSmPDhRjRqzyV1JGHSsrIuBzuWUaB2nbMfpYfcgYOwX0QSDPKWX5og2EYDI3EkNJe1SqK69dq7mIG0YcAN183EpbP_RwiJRgpWmuw5_5zHB6KX8cQuhkI00dCw=w2400",
          size: "large",
          id: 10,
        },
        {
          title: "bimini tops",
          imageUrl:
            "https://lh3.googleusercontent.com/Wpdk_rmPMhlnZ_WAhCo3-bAlV93tAv5jXzkC10nM-tzwX95FjzA7ePNWlbLMp05taNFb8FOcm7zn9DFWj4kIWCPoMFB3rA5fGUEZH9QqUxQL02gHtK_6Jjdf2JNrwKDaKimSnkhskA=w2400",
          size: "large",
          id: 11,
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ImageCard key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

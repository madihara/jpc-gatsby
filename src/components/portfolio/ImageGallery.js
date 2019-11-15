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
          imageUrl:
            "https://coverquest-catalog.imgix.net/uploads/media/2018/03/1521752028-westland-t-top-boat-cover.lg.jpg?crop=entropy&fit=clip&h=400&w=600&wm=jpg&q=90",
          id: 1,
          linkUrl: "shop/hats",
        },

        {
          title: "PCA Hose",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK0F1ibo4Py2SONhlCbK0Awz3e6NjWVGXDx4kRMZ2ArH7XcIq&s",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "clear curtains",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK0F1ibo4Py2SONhlCbK0Awz3e6NjWVGXDx4kRMZ2ArH7XcIq&s",
          id: 4,
          linkUrl: "shop/jackets",
        },
        {
          title: "motorcycle covers",
          imageUrl:
            "https://www.covercraft.com/images/products/hero/custom-fit-motorcycle-covers-for-harley-davidson_psmh_silver_main1.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/womens",
        },
        {
          title: "bimini tops",
          imageUrl:
            "https://www.paulscanvas.com/wp-content/uploads/2016/11/boats-with-towers-15.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
        },
        {
          title: "boat covers",
          imageUrl:
            "https://coverquest-catalog.imgix.net/uploads/media/2018/03/1521752028-westland-t-top-boat-cover.lg.jpg?crop=entropy&fit=clip&h=400&w=600&wm=jpg&q=90",
          id: 7,
          linkUrl: "shop/hats",
        },

        {
          title: "PCA Hose",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK0F1ibo4Py2SONhlCbK0Awz3e6NjWVGXDx4kRMZ2ArH7XcIq&s",
          id: 8,
          linkUrl: "shop/sneakers",
        },
        {
          title: "clear curtains",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK0F1ibo4Py2SONhlCbK0Awz3e6NjWVGXDx4kRMZ2ArH7XcIq&s",
          id: 9,
          linkUrl: "shop/jackets",
        },
        {
          title: "motorcycle covers",
          imageUrl:
            "https://www.covercraft.com/images/products/hero/custom-fit-motorcycle-covers-for-harley-davidson_psmh_silver_main1.jpg",
          size: "large",
          id: 10,
          linkUrl: "shop/womens",
        },
        {
          title: "bimini tops",
          imageUrl:
            "https://www.paulscanvas.com/wp-content/uploads/2016/11/boats-with-towers-15.jpg",
          size: "large",
          id: 11,
          linkUrl: "shop/mens",
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

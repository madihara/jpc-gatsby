import React from "react"

import "./image-card.scss"

const ImageCard = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Learn More</span>
        <span className="features hidden">
          <ul>
            <li>feature 1</li>
            <li>feature 2</li>
            <li>feature 3</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default ImageCard

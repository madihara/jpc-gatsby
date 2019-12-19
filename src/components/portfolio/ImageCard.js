import React from "react"

import "./image-card.scss"

const ImageCard = ({ title, imageUrl, size, features }) => {
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
          {/*} <ul>
            {features.map((item, index) => {
              <li key={index}>
                {item.text}
              </li>
            })}
          </ul>
          {*/}
        </span>
      </div>
    </div>
  )
}



export default ImageCard

import React from 'react'
import './card.scss'

const Card = ({ cover, title }) => {
   return (
      <div className="gallery__card">
         <div className="gallery__card--gradient">
            <img src={cover} alt="visuel de la location" />
         </div>
         <h2>{title}</h2>
      </div>
   )
}

export default Card

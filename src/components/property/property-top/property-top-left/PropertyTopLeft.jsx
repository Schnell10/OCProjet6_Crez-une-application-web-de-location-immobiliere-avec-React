import React from 'react'
import './property-top-left.scss'

const PropertyTopLeft = ({ dataLogement }) => {
   return (
      <div className="property__top__left">
         <h2>{dataLogement[0].title}</h2>
         <h3>{dataLogement[0].location}</h3>
         <div className="property__top__left__tags">
            {dataLogement[0].tags.map((tag, index) => (
               <div key={`${tag}-${index}`}>{tag}</div>
            ))}
         </div>
      </div>
   )
}

export default PropertyTopLeft

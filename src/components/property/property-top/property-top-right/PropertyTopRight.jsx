import React from 'react'
import './property-top-right.scss'

const PropertyTopRight = ({ dataLogement }) => {
   // On transforme la chaîne de caractère rating en nombre entier.
   const rating = parseInt(dataLogement[0].rating)

   return (
      <div className="property__top__right">
         <div className="property__top__host">
            {/*  On divise la chaîne de caractère name pour mettre un saut à la ligne après chaque mot. */}
            <p>
               {dataLogement[0].host.name.split(' ').map((mot, index) => (
                  <span key={`${mot} - ${index}`}>
                     {mot} <br />
                  </span>
               ))}
            </p>
            <img src={dataLogement[0].host.picture} alt="portrait d'identité" />
         </div>
         <div className="property__rating">
            {/* On met des conditions afin d'afficher les étoiles en gris ou pas. */}
            <i
               className={`fa-solid fa-star ${rating === 0 ? 'fa-grey' : ''}`}
            />
            <i className={`fa-solid fa-star ${rating < 2 ? 'fa-grey' : ''}`} />
            <i className={`fa-solid fa-star ${rating < 3 ? 'fa-grey' : ''}`} />
            <i className={`fa-solid fa-star ${rating < 4 ? 'fa-grey' : ''}`} />
            <i className={`fa-solid fa-star ${rating < 5 ? 'fa-grey' : ''}`} />
         </div>
      </div>
   )
}

export default PropertyTopRight

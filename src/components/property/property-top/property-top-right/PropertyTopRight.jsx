import React from 'react'
import './property-top-right.scss'

const PropertyTopRight = ({ dataLogement }) => {
   // On transforme la chaîne de caractère rating en nombre entier.
   const rating = parseInt(dataLogement.rating)

   return (
      <div className="property__top__right">
         <div className="property__top__host">
            {/*  On divise la chaîne de caractère name pour mettre un saut à la ligne après chaque mot. */}
            <p>
               {dataLogement.host.name.split(' ').map((mot, index) => (
                  <span key={`${mot} - ${index}`}>
                     {mot} <br />
                  </span>
               ))}
            </p>
            <img src={dataLogement.host.picture} alt="portrait d'identité" />
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

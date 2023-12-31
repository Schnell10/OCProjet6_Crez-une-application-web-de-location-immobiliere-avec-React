import React, { useState } from 'react'
import arrowLeft from '../../assets/logo/arrow-left.png'
import arrowRight from '../../assets/logo/arrow-right.png'
import './slideshow.scss'

const Slideshow = ({ dataLogement }) => {
   // Utilisation du hook useState pour gérer l'état de l'index de l'image affichée
   const [index, setIndex] = useState(0)

   const handleClickUp = () => {
      //Au click sur la flêche droite on passe à l'image suivante en ajoutant 1 à l'index
      if (index < dataLogement.pictures.length - 1) {
         setIndex(index + 1)
      } else {
         setIndex(0)
      }
   }

   const handleClickDown = () => {
      //Inversement, on enlève 1 à l'index
      if (index > 0) {
         setIndex(index - 1)
      } else {
         setIndex(dataLogement.pictures.length - 1)
      }
   }

   return (
      <div className="slideshow">
         <img
            className="slideshow__img"
            src={dataLogement.pictures[index]}
            alt="représentation du logement"
         />
         <div //On rajoute une class hidden si il n'y a qu'une image afin d'enlever via le scss les flêches et la numérotation
            className={
               dataLogement.pictures.length === 1
                  ? 'hidden'
                  : 'slideshow__arrow'
            }
         >
            <img
               src={arrowLeft}
               alt="flêche gauche pour naviguer"
               onClick={handleClickDown}
            ></img>
            <p>
               {index + 1}/{dataLogement.pictures.length}
            </p>
            <img
               src={arrowRight}
               alt="flêche droite pour naviguer"
               onClick={handleClickUp}
            ></img>
         </div>
      </div>
   )
}

export default Slideshow

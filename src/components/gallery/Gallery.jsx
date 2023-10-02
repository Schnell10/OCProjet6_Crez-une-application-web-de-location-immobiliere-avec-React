import React from 'react'
import cardsData from '../../datas.json'
import Card from './card/Card'
import './gallery.scss'
import { Link } from 'react-router-dom'

const Gallery = () => {
   return (
      <div className="gallery">
         {cardsData.map((card) => (
            <figure key={card.id}>
               <Link to={'/fiche-logement/' + card.id}>
                  <Card cover={card.cover} title={card.title} />
                  {/* On fait passer les props au composant Card*/}
               </Link>
            </figure>
         ))}
      </div>
   )
}

export default Gallery

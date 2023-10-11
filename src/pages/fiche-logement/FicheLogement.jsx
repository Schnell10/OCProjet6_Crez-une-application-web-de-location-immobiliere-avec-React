import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import datas from '../../datas.json'
import { useParams, Navigate } from 'react-router-dom'
import './fiche-logement.scss'
import Property from '../../components/property/Property'

const FicheLogement = () => {
   const { id } = useParams() // Utilisez useParams pour extraire l'ID de l'URL

   const dataLogement = datas.find((data) => data.id === id)

   if (!dataLogement) {
      //Si dataLogement = false c'est que l'id de notre url correspond à aucun id de logement donc on est redirigé vers la page 404
      return <Navigate to="/page-404" replace={true} />
   }

   return (
      <div className="main-logement">
         <Slideshow dataLogement={dataLogement} />
         <Property dataLogement={dataLogement} />
      </div>
   )
}

export default FicheLogement

import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import datas from '../../datas.json'
import { useLocation } from 'react-router-dom'
import './fiche-logement.scss'
import Property from '../../components/property/Property'

const FicheLogement = () => {
   const location = useLocation() //useLocation nous permet de récupérer l'url
   const datasBis = [...datas] //On crée une copie du tableau data
   const dataLogement = datasBis.filter(
      //On filtre le tableau pour avoir uniquement les datas du logement cliqué
      (data) => `/fiche-logement/${data.id}` === `${location.pathname}`,
   )
   return (
      <div className="main-logement">
         <Slideshow dataLogement={dataLogement} />
         <Property dataLogement={dataLogement} />
      </div>
   )
}

export default FicheLogement

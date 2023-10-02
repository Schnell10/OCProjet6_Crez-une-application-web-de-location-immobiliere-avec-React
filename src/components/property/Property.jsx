import React from 'react'
import './property.scss'
import Collapse from '../collapse/Collapse'
import Equipements from '../collapse/collapse-content/Equipements'
import Description from '../collapse/collapse-content/Description'
import PropertyTopLeft from './property-top/property-top-left/PropertyTopLeft'
import PropertyTopRight from './property-top/property-top-right/PropertyTopRight'

const Property = ({ dataLogement }) => {
   return (
      <div className="property">
         <div className="property__top">
            <PropertyTopLeft dataLogement={dataLogement} />
            <PropertyTopRight dataLogement={dataLogement} />
         </div>
         <div className="property__bottom">
            <Collapse label="Description">
               <Description dataLogement={dataLogement} />
            </Collapse>
            <Collapse label="Équipements">
               <Equipements dataLogement={dataLogement} />
            </Collapse>
         </div>
      </div>
   )
}

export default Property

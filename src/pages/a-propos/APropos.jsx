import React from 'react'
import Collapse from '../../components/collapse/Collapse'
import Fiabilite from '../../components/collapse/collapse-content/Fiabilite'
import Respect from '../../components/collapse/collapse-content/Respect'
import Service from '../../components/collapse/collapse-content/Service'
import Securite from '../../components/collapse/collapse-content/Securite'
import imageBanner from '../../assets/images/image-banner-a-propos.png'
import './aPropos.scss'

const APropos = () => {
   return (
      <div className="main-apropos">
         <img
            className="main-apropos__imgBanner"
            src={imageBanner}
            alt="Vallée entre des montagnes enneigées"
         />
         <div className="collapse-a-propos">
            <Collapse label="Fiabilité">
               <Fiabilite />
            </Collapse>
            <Collapse label="Respect">
               <Respect />
            </Collapse>
            <Collapse label="Service">
               <Service />
            </Collapse>
            <Collapse label="Sécurité">
               <Securite />
            </Collapse>
         </div>
      </div>
   )
}

export default APropos

import React from 'react'
import imageBanner from '../../assets/images/image-banner-home.png'
import './banner.scss'

const Banner = () => {
   return (
      <div className="banner">
         <img src={imageBanner} alt="paysage de falaises en bord de mer" />
         <h2>
            Chez vous,<span> partout et ailleurs</span>
         </h2>
      </div>
   )
}

export default Banner

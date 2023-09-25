import React from 'react'
import imageBanner from '../../assets/images/image-banner-home.png'
import './banner.scss'

const Banner = () => {
   return (
      <div className="banner">
         <div className="banner__background-img" />
         <img src={imageBanner} alt="paysage de falaises en bord de mer" />
         <h1>Chez vous, partout et ailleurs</h1>
      </div>
   )
}

export default Banner

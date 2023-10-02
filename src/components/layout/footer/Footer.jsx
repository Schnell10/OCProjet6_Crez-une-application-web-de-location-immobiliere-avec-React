import React from 'react'
import logo from '../../../assets/logo/logo-footer.png'
import './footer.scss'

const Footer = () => {
   return (
      <footer>
         <img src={logo} alt="Logo Kasa" />
         <p>© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer

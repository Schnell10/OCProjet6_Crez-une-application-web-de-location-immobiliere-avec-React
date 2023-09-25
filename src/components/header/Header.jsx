import React from 'react'
import logo from '../../assets/logo/logo-header.jpg'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'
//useLocation est un hook qui renvoit la localisation actulel, avec .pathname il renvoit la route de notre page
const Header = () => {
   const location = useLocation()
   return (
      <header>
         <img src={logo} alt="logo Kasa" />
         <ul className="header__list">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
               <li>Acceuil</li>
            </Link>
            <Link
               to="/a-propos"
               className={location.pathname === '/a-propos' ? 'active' : ''}
            >
               <li>À propos</li>
            </Link>
         </ul>
      </header>
   )
}

export default Header

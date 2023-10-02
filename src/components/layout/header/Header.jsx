import React from 'react'
import logo from '../../../assets/logo/logo-header.jpg'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'
//useLocation est un hook qui renvoit la localisation actuel, avec .pathname il renvoit le nom de la route de notre page
const Header = () => {
   const location = useLocation()
   return (
      <header>
         <h1>
            <img src={logo} alt="logo Kasa" />
         </h1>
         <ul className="header__list">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
               <li>Accueil</li>
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

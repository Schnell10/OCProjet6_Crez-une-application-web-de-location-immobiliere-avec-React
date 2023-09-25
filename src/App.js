import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import FicheLogement from './pages/fiche-logement/FicheLogement'
import APropos from './pages/a-propos/APropos'
import Page404 from './pages/page-404/Page404'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

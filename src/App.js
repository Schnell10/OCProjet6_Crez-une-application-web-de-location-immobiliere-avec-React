import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import FicheLogement from './pages/fiche-logement/FicheLogement'
import APropos from './pages/a-propos/APropos'
import Page404 from './pages/page-404/Page404'
import datas from './datas.json'
import Layout from './components/layout/Layout'

const App = () => {
   // On crée un tableau contenant tout les id
   const allId = datas.map((index) => index.id).flat()
   return (
      <div>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />

                  {allId.map((id) => (
                     <Route
                        key={id}
                        path={`/fiche-logement/${id}`}
                        element={<FicheLogement />}
                     />
                  ))}
                  <Route path="/a-propos" element={<APropos />} />
                  <Route path="*" element={<Page404 />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </div>
   )
}

export default App

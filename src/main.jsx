import React from 'react'
import ReactDOM from 'react-dom'
import FachadaVentilada from './pages/catalogos/FachadaVentilada'
import DolckerStep from './pages/catalogos/DolckerStep'
import Escamas from './pages/catalogos/Escamas'
// import FontStyles from './global/FontStyles'
import './assets/fonts/fonts.css'
import GlobalStyles from './global/GlobalStyles'
import ResetStyles from './global/ResetStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import QuienesSomos from './pages/QuienesSomos'
import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import MainEn from './pages/en/MainEn'
import QuienesSomosEn from './pages/en/QuienesSomoEn'
import FachadaVentiladaEn from './pages/en/catalogos/FachadaVentiladaEn'
import Contacto from './pages/Contacto'
import PaginaImagenes from './pages/PaginaImagen'

ReactDOM.render(
    <React.StrictMode>
        <ResetStyles />
        {/* <FontStyles /> */}
        <GlobalStyles />
        <BrowserRouter>
            <Routes>
                <Route
                    path='/fachadas-ventiladas/dolcker-system'
                    element={<FachadaVentilada />}
                />
                <Route
                    path='/fachadas-ventiladas/dolcker-step'
                    element={<DolckerStep />}
                />
                <Route
                    path='/fachadas-ventiladas/dolcker-escamas'
                    element={<Escamas />}
                />
                <Route
                    path='/cambios-pendientes'
                    element={<PaginaImagenes />}
                />
                <Route path='/' element={<Main />} />
                <Route path='/quienes-somos' element={<QuienesSomos />} />
                <Route path='/aviso-legal' element={<AvisoLegal />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route
                    path='/politica-privacidad'
                    element={<PoliticaPrivacidad />}
                />

                <Route
                    path='/en/fachadas-ventiladas/dolcker-system'
                    element={<FachadaVentiladaEn />}
                />
                <Route path='/en/' element={<MainEn />} />
                <Route path='/en/quienes-somos' element={<QuienesSomosEn />} />
                <Route
                    path='/en/aviso-legal'
                    element={<AvisoLegal lang='en' />}
                />
                <Route path='/en/contacto' element={<Contacto lang='en' />} />
                <Route
                    path='/en/politica-privacidad'
                    element={<PoliticaPrivacidad lang='en' />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

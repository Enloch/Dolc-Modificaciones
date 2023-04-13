import React, { useRef } from 'react'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzaderaLandingEn'
import useMenuDesplegable from '../../hooks/useMenuDesplegable'
import Loading from '../../components/LoadingEN'
import DolkSystem from './DolkSystemEn'
import Logo from '../../assets/images/Inicio/logo.png'

const MainEn = () => {
    const dolckerSystemRef = useRef(null)
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <img src={Logo} style={{ scale: '0.5', filter: 'invert(1)' }} />
    )

    const handleButtonClick = () => {
        dolckerSystemRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Loading onButtonClick={handleButtonClick} />
            <div ref={dolckerSystemRef}>
                <DolkSystem id='dolcker-system' />
            </div>
        </>
    )
}

export default MainEn

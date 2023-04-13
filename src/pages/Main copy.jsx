import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzaderaLanding'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import { StyledIndice } from '../modules/02_Indice/styleslanding'
import Final from '../modules/10_Final'
import Loading from '../components/Loading'
import Logo from '../assets/images/Inicio/logo.png'

const Main = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,

        <img src={Logo} style={{ scale: '0.5', filter: 'invert(1)' }} />
    )
    return (
        <>
            {/* {isLoading && <Loading />} */}
            {menuDesplegable}
            {btnIndice}
            <Loading />
            <StyledIndice>
                {/* <Titulo color={COLORS.gray01}>DOLCKER</Titulo> */}
                <img src={Logo} style={{ scale: '1.1', filter: 'invert(1)' }} />
                <MenuLanzadera />
                <div className='idiomas'>
                    <Link to='/' className='seleccionado'>
                        ES
                    </Link>
                    <Link to='/en'>EN</Link>
                </div>
            </StyledIndice>
            {/* <Final invert /> */}
        </>
    )
}

export default Main

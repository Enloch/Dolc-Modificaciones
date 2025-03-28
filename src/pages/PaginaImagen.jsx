import React from 'react'
import imagen0 from '../assets/Dolker-Completo-00.webp'
import imagen1 from '../assets/Dolker-Completo-01.webp'
import imagen2 from '../assets/Dolker-Completo-02.webp'
import imagen3 from '../assets/Dolker-Completo-03.webp'
import imagen4 from '../assets/Dolker-Completo-04.webp'
import imagen5 from '../assets/Dolker-Completo-05.webp'
import { IndiceEsc } from '../modules'
import { StyledIndice } from '../modules/ES/System/02_Indice/styles'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import MenuLanzaderaTemp from '../components/ListaContenidos/MenuLanzaderaTemp'
const PaginaImagenes = () => {
    return (
        <>
            <div>
                <StyledIndice backgroundColor={COLORS.gray08}>
                    <Titulo color={COLORS.gray01}>DOLCKER</Titulo>
                    <MenuLanzaderaTemp />
                </StyledIndice>
                <img src={imagen0} />
                <IndiceEsc />
                <img src={imagen1} />
                <img src={imagen2} />
                <img src={imagen3} />
                <img src={imagen4} />
                <img src={imagen5} />
            </div>
        </>
    )
}

export default PaginaImagenes

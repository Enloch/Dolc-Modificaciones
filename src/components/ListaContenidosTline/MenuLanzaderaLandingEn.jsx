import useListaContenidos from '../../hooks/useListaContenidos'
import menuLanzaderaEn from '../../utils/en/menuLanzaderaEn'
import menuLanzadera from '../../utils/menuLanzadera'
import StyledListaContenidos from './stylesLanding'
import Miniatura from './Miniatura'
import styled from 'styled-components'
import Imagen1 from '../../assets/images/Novedades/1.webp'
import Imagen2 from '../../assets/images/Novedades/2.webp'
import Imagen3 from '../../assets/images/Novedades/3.webp'
import Imagen4 from '../../assets/images/Novedades/4.webp'
import Imagen5 from '../../assets/images/Novedades/5.webp'
import Imagen6 from '../../assets/images/Novedades/6.webp'
import Imagen7 from '../../assets/images/Novedades/7.webp'
import Imagen8 from '../../assets/images/Novedades/8.webp'
import Imagen9 from '../../assets/images/Novedades/9.webp'
import Imagen10 from '../../assets/images/Novedades/10.webp'
import Imagen11 from '../../assets/images/Novedades/11.webp'
import Imagen12 from '../../assets/images/Novedades/12.webp'
import Imagen13 from '../../assets/images/Novedades/13.webp'
import Imagen14 from '../../assets/images/Novedades/14.webp'

const MenuLanzadera = () => {
    const contenidos = useListaContenidos(menuLanzaderaEn, [], true)

    const miniaturas = [
        {
            id: 1,
            imagen: Imagen1,
            texto: 'DO&BASALT',
            enlace: 'en/fachadas-ventiladas/dolcker-system#basalt',
        },
        {
            id: 2,
            imagen: Imagen2,
            texto: 'DO&DOLM',
            enlace: 'en/fachadas-ventiladas/dolcker-system#dolm',
        },
        {
            id: 3,
            imagen: Imagen3,
            texto: 'DO&DQUARTZ',
            enlace: 'en/fachadas-ventiladas/dolcker-system#dquartz',
        },
        {
            id: 4,
            imagen: Imagen4,
            texto: 'DO&MARBLE',
            enlace: 'en/fachadas-ventiladas/dolcker-system#marble',
        },
        {
            id: 5,
            imagen: Imagen5,
            texto: 'DO&STONE',
            enlace: 'en/fachadas-ventiladas/dolcker-system#stone',
        },
        {
            id: 6,
            imagen: Imagen6,
            texto: 'DO&QUARCITY',
            enlace: 'en/fachadas-ventiladas/dolcker-system#quarcity',
        },
        {
            id: 7,
            imagen: Imagen7,
            texto: 'DO&CRETE',
            enlace: 'en/fachadas-ventiladas/dolcker-system#crete',
        },
        {
            id: 8,
            imagen: Imagen8,
            texto: 'DO&PORTLAND',
            enlace: 'en/fachadas-ventiladas/dolcker-system#portland',
        },
        {
            id: 9,
            imagen: Imagen9,
            texto: 'DO&SPACE',
            enlace: 'en/fachadas-ventiladas/dolcker-system#space',
        },
        {
            id: 10,
            imagen: Imagen10,
            texto: 'DO&TZMENT',
            enlace: 'en/fachadas-ventiladas/dolcker-system#tzment',
        },
        {
            id: 11,
            imagen: Imagen11,
            texto: 'DO&WOOD',
            enlace: 'en/fachadas-ventiladas/dolcker-system#wood',
        },
        {
            id: 12,
            imagen: Imagen12,
            texto: 'DO&TERRAZO',
            enlace: 'en/fachadas-ventiladas/dolcker-system#terrazo',
        },
        {
            id: 13,
            imagen: Imagen13,
            texto: 'DO&ARQUITECT',
            enlace: 'en/fachadas-ventiladas/dolcker-system#arquitect',
        },
        {
            id: 14,
            imagen: Imagen14,
            texto: 'DO&VOLUMEN',
            enlace: 'en/fachadas-ventiladas/dolcker-system#volumen',
        },
    ]

    return (
        <>
            <StyledListaContenidos>
                <ul>{contenidos}</ul>
            </StyledListaContenidos>
            {/* <StyledMiniaturasContainer>
                <div className='titulo'>
                    <TituloSerie>OUR SERIES</TituloSerie>
                </div>
                {miniaturas.map(miniatura => (
                    <Miniatura key={miniatura.id} miniatura={miniatura} />
                ))}
            </StyledMiniaturasContainer> */}
        </>
    )
}

export default MenuLanzadera

const StyledMiniaturasContainer = styled.div`
    grid-column: 6/12;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    column-gap: 1rem;
    @media (max-width: 980px) {
        grid-column: 1/-1;
    }

    .titulo {
        grid-column: 1/-1;
        width: 100%;
    }
`
const TituloSerie = styled.h1`
    color: white;
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
`

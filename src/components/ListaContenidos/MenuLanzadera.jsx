import useListaContenidos from '../../hooks/useListaContenidos'
import menuLanzaderaFr from '../../utils/fr/menuLanzaderaFR'
import menuLanzaderaEn from '../../utils/en/menuLanzaderaEn'
import menuLanzadera from '../../utils/menuLanzadera'
import StyledListaContenidos from './styles'

const MenuLanzadera = ({ fr = false }) => {
    const contenidos = fr
        ? useListaContenidos(menuLanzaderaFr, [], true)
        : useListaContenidos(menuLanzadera, [], true)

    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default MenuLanzadera

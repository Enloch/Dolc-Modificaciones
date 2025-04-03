import useListaContenidos from '../../hooks/useListaContenidos'
import menuLanzaderaEn from '../../utils/en/menuLanzaderaEn'
import menuLanzaderaTemp from '../../utils/menuLanzaderaTemp'
import StyledListaContenidos from './styles'

const MenuLanzaderaTemp = ({ en = false }) => {
    const contenidos = en
        ? useListaContenidos(menuLanzaderaEn, [], true)
        : useListaContenidos(menuLanzaderaTemp, [], true)
    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default MenuLanzaderaTemp

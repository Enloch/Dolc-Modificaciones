import useListaContenidos from '../../hooks/useListaContenidosEscamas'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContextEscamas from '../../contexts/ListaContenidosContextEscamas'
import inglesLista from '../../utils/en/listaContenidos.json'

const ListaContenidosEscamas = ({ en = false, isMenuDesplegable = false }) => {
    const contendiosJSON = useContext(ListaContenidosContextEscamas)
    const contenidos = en
        ? useListaContenidos(inglesLista)
        : useListaContenidos(contendiosJSON)

    return (
        <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidosEscamas

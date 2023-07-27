import useListaContenidos from '../../hooks/useListaContenidosTline'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContextTline'
import inglesLista from '../../utils/en/listaContenidos.json'

const ListaContenidos = ({ en = false, isMenuDesplegable = false }) => {
    const contendiosJSON = useContext(ListaContenidosContext)
    const contenidos = en
        ? useListaContenidos(inglesLista)
        : useListaContenidos(contendiosJSON)

    return (
        <StyledListawContenidos isMenuDesplegable={isMenuDesplegable}>
            <ul>{contenidos}</ul>
        </StyledListawContenidos>
    )
}

export default ListaContenidos

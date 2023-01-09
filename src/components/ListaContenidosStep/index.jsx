import useListaContenidos from '../../hooks/useListaContenidos'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContextStep'
import inglesLista from '../../utils/en/listaContenidos.json'

const ListaContenidosStep = ({ en = false, isMenuDesplegable = false }) => {
    const contendiosJSON = useContext(ListaContenidosContext)
    const contenidos = en
        ? useListaContenidos(inglesLista)
        : useListaContenidos(contendiosJSON)

    return (
        <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidosStep

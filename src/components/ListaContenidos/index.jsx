import useListaContenidos from '../../hooks/useListaContenidos'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContext'
import inglesLista from '../../utils/en/listaContenidos.json'
import francesLista from '../../utils/fr/listaContenidos.json'

const ListaContenidos = ({
    en = false,
    isMenuDesplegable = false,
    fr = false,
}) => {
    const contendiosJSON = useContext(ListaContenidosContext)

    let contenidos

    switch (true) {
        case en:
            contenidos = useListaContenidos(inglesLista)
            break
        case fr:
            contenidos = useListaContenidos(francesLista)
            break
        default:
            contenidos = useListaContenidos(contendiosJSON)
            break
    }
    return (
        <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidos

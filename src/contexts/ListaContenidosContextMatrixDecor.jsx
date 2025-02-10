import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosMatrixDecor.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext

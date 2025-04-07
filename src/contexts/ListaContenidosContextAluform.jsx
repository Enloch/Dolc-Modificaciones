import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosAluform.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext

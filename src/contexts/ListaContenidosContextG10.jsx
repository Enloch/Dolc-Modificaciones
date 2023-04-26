import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosG10.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext

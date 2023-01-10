import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosEscamas.json'

const ListaContenidosContextEscamas = createContext(listaContenidosJSON)

export default ListaContenidosContextEscamas

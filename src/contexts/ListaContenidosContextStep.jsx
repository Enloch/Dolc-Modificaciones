import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosStep.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext

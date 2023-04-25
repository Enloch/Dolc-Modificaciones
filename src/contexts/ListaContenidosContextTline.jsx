import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidosTline.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext

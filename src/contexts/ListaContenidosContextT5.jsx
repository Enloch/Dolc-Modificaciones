import { createContext } from 'react';
import listaContenidosJSON from '../utils/listaContenidosT5.json';

const ListaContenidosContext = createContext(listaContenidosJSON);

export default ListaContenidosContext;

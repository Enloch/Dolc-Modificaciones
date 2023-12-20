import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosLeiva.json";

const ListaContenidosContext = createContext(listaContenidosJSON);

export default ListaContenidosContext;

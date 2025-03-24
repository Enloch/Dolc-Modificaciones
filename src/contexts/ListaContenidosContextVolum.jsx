import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosVolum.json";

const ListaContenidosContextVolum = createContext(listaContenidosJSON);

export default ListaContenidosContextVolum;

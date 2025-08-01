import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosMatrix.json";

const ListaContenidosContext = createContext(listaContenidosJSON);

export default ListaContenidosContext;

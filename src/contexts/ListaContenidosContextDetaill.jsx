import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosDetaill.json";

const ListaContenidosContextDetaill = createContext(listaContenidosJSON);

export default ListaContenidosContextDetaill;

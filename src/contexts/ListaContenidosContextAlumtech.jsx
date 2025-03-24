import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosAlumtech.json";

const ListaContenidosContextAlumtech = createContext(listaContenidosJSON);

export default ListaContenidosContextAlumtech;

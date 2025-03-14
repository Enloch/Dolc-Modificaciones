import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosArchiform.json";

const ListaContenidosContextLeiva = createContext(listaContenidosJSON);

export default ListaContenidosContextLeiva;

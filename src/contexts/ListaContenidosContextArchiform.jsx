import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosAlumtech.json";

const ListaContenidosContextLeiva = createContext(listaContenidosJSON);

export default ListaContenidosContextLeiva;

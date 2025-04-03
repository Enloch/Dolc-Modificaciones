import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosFusion.json";

const ListaContenidosContextFusion = createContext(listaContenidosJSON);

export default ListaContenidosContextFusion;

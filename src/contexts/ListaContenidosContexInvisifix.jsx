import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosInvisifix.json";

const ListaContenidosContextFusion = createContext(listaContenidosJSON);

export default ListaContenidosContextFusion;

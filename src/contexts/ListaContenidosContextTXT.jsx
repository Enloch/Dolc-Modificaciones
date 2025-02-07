import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosTXT.json";

const ListaContenidosContext = createContext(listaContenidosJSON);

export default ListaContenidosContext;

import { createContext } from "react";
import listaContenidosJSON from "../utils/listaContenidosScala.json";

const ListaContenidosContextScala = createContext(listaContenidosJSON);

export default ListaContenidosContextScala;

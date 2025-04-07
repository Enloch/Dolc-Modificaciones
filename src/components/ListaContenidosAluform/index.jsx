import useListaContenidos from "../../hooks/useListaContenidosTline";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContext from "../../contexts/ListaContenidosContextAluform";
import inglesLista from "../../utils/en/listaContenidos.json";

const ListaContenidos = ({ en = false, isMenuDesplegable = false }) => {
  const contendiosJSON = useContext(ListaContenidosContext);
  const dataToUse = en ? inglesLista : contendiosJSON;
  const contenidos = useListaContenidos(dataToUse);

  return (
    <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
      <ul>{contenidos}</ul>
    </StyledListaContenidos>
  );
};

export default ListaContenidos;

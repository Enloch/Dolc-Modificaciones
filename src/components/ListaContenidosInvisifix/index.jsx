import useListaContenidos from "../../hooks/useListaContenidos";
import StyledListaContenidos from "./styles";
import { useContext } from "react";
import ListaContenidosContextFusion from "../../contexts/ListaContenidosContexInvisifix";
import inglesLista from "../../utils/en/listaContenidos.json";

const ListaContenidos = ({ en = false, isMenuDesplegable = false }) => {
  const contendiosJSON = useContext(ListaContenidosContextFusion);
  const contenidos = en ? useListaContenidos(inglesLista) : useListaContenidos(contendiosJSON);

  return (
    <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
      <ul>{contenidos}</ul>
    </StyledListaContenidos>
  );
};

export default ListaContenidos;

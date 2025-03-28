import useListaContenidos from "../../hooks/useListaContenidos";
import menuLanzaderaFr from "../../utils/fr/menuLanzaderaFr";
import menuLanzaderaEn from "../../utils/en/menuLanzaderaEn";
import menuLanzadera from "../../utils/menuLanzadera";
import StyledListaContenidos from "./styles";

const MenuLanzadera = ({ fr = false, en = false }) => {
  const contenidos = fr
    ? useListaContenidos(menuLanzaderaFr, [], true)
    : en
    ? useListaContenidos(menuLanzaderaEn, [], true)
    : useListaContenidos(menuLanzadera, [], true);

  return (
    <StyledListaContenidos>
      <ul>{contenidos}</ul>
    </StyledListaContenidos>
  );
};

export default MenuLanzadera;

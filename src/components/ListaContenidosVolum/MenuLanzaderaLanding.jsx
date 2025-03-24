import useListaContenidos from "../../hooks/useListaContenidos";
import menuLanzaderaEn from "../../utils/en/menuLanzaderaEn";
import menuLanzadera from "../../utils/menuLanzadera";
import StyledListaContenidos from "./stylesLanding";
import Miniatura from "./Miniatura";
import styled from "styled-components";
import Imagen1 from "../../assets/images/Novedades/1.webp";
import Imagen2 from "../../assets/images/Novedades/2.webp";
import Imagen3 from "../../assets/images/Novedades/3.webp";
import Imagen4 from "../../assets/images/Novedades/4.webp";
import Imagen5 from "../../assets/images/Novedades/5.webp";
import Imagen6 from "../../assets/images/Novedades/6.webp";

const MiniaturaVolum = styled(Miniatura)`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${COLORS.white};
    }
`;

const MenuLanzaderaLanding = ({ en = false }) => {
    const contenidos = en
        ? useListaContenidos(menuLanzaderaEn, [], true)
        : useListaContenidos(menuLanzadera, [], true);

    return (
        <StyledListaContenidos>
            <div className="contenedor-miniaturas">
                <MiniaturaVolum imagen={Imagen1} titulo="Novedades" />
                <MiniaturaVolum imagen={Imagen2} titulo="Novedades" />
                <MiniaturaVolum imagen={Imagen3} titulo="Novedades" />
                <MiniaturaVolum imagen={Imagen4} titulo="Novedades" />
                <MiniaturaVolum imagen={Imagen5} titulo="Novedades" />
                <MiniaturaVolum imagen={Imagen6} titulo="Novedades" />
            </div>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    );
};

export default MenuLanzaderaLanding;

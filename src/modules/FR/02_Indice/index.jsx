import ListaContenidos from "../../../components/ListaContenidos";
import { Titulo } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import { StyledIndice } from "./styles";
import flecha from "../../../assets/icons/flechita.svg";
import scrollTo from "../../../helpers/scrollTo";
import useMenuDesplegableFr from "../../../hooks/useMenuDesplegableFr";
import { Link } from "react-router-dom";

const Indice = ({ indiceRef }) => {
  const { menuDesplegable, btnIndice } = useMenuDesplegableFr(
    ListaContenidos,
    "Index",
    indiceRef
  );

  const handleClickFlecha = () => {
    const position =
      indiceRef.current.offsetHeight + indiceRef.current.offsetTop;
    scrollTo(position, 2000);
  };

  return (
    <>
      <StyledIndice backgroundColor={COLORS.gray06} ref={indiceRef} id='indice'>
        <Titulo color={COLORS.gray01}>Index</Titulo>
        <ListaContenidos fr={true} />
        <img
          src={flecha}
          alt=''
          className='flecha-indice'
          onClick={handleClickFlecha}
        />
        <div className='idiomas'>
          <Link to='/dolcker-system'>ES</Link>
          <Link to='/en/dolcker-system'>EN</Link>
          <Link to='#' className='seleccionado'>
            FR
          </Link>
        </div>
      </StyledIndice>
      {menuDesplegable}
      {btnIndice}
    </>
  );
};

export default Indice;

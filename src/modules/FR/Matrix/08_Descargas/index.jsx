import { Titulo } from "../../../../components/Titulos";
import configDescargas from "../../../../configs/configDescargasMatrix";
import { COLORS } from "../../../../global/GlobalStyles";
import useDescargas from "../../../../hooks/useDescargas";
import StyledDescargas from "./styles";

const DescargasTline = ({ id }) => {
  const descargas = useDescargas(configDescargas);

  return (
    <StyledDescargas id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Téléchargements</Titulo>
      {/* <h1>Arquitecto da Catálogo</h1> */}
      <div className='download-container'>{descargas}</div>
    </StyledDescargas>
  );
};

export default DescargasTline;

import { useState } from "react";
import Cita from "../../../components/Cita";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Diseno/catalogo3-1-14.jpg";
import fondo from "../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../utils/indicadoresFormato";
import RotadorLeiva from "../../../components/Rotadores/Leiva/Rotador";
import IndiceSeries from "./05_1_IndiceSeries";
import Series from "./05_2_Series";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
const DisenosTline = ({ id }) => {


  const [serieActiva, setSerieActiva] = useState("");
  return (
    <>
      <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Diseño</Titulo>
        <ImageWithCaption
          src={Reemplazo}
          alt='Imagen de Diseños 1'
          columnSpan='6'
        />
        <Cita cita='Cita' author='Autor' colorAutor={COLORS.gray05} />
      </StyledDisenos>
      <IndiceSeries id={id[1]} queSerieActiva={setSerieActiva} />
      <StyledDisenos id={id[2]} backgroundColor={COLORS.gray01}>
        <Titulo2>Configurador</Titulo2>
        <div className='rotador'>
          <RotadorLeiva />
        </div>
      </StyledDisenos>
    </>
  );
};

export default DisenosTline;

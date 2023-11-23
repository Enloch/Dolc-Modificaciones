import { useState } from "react";
import Cita from "../../../components/Cita";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Diseno/catalogo3-1-14.jpg";
import fondo from "../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../utils/indicadoresFormato";
import RotadorMatrix from "../../../components/Rotadores/Matrix/Rotador";
import IndiceSeries from "./05_1_IndiceSeries";
import Series from "./05_2_Series";
const DisenosTline = ({ id }) => {
  const ids = [
    "ard",
    "balm",
    "bella",
    "brun",
    "byb",
    "cap",
    "cor",
    "crom",
    "dom",
    "eter",
    "grav",
    "habi",
    "han",
    "inv",
    "kur",
    "nik",
    "stone",
    "stor",
    "uni",
  ];

  const propsFormato = {
    anotacion: {
      text: "Pulsa en el punto para ver las posibilidades de formato",
      type: "click",
    },
    visualizador: {
      config: indicadoresFormato,
      srcfondo: fondo,
      altFondo: "Imagen de fondo con indicadores",
    },
  };
  const [serieActiva, setSerieActiva] = useState("");
  return (
    <>
      <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Diseño</Titulo>
        <ImageWithCaption src={img1} alt='Imagen de Diseños 1' columnSpan='6' />
        <Cita
          cita='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          author='Autor '
          colorAutor={COLORS.gray05}
        />
      </StyledDisenos>
      <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo2>Configurador</Titulo2>
        <div className='rotador'>
          <RotadorMatrix />
        </div>
      </StyledDisenos>
      <IndiceSeries id={id[6]} queSerieActiva={setSerieActiva} />
      <Series id={ids} serieActivaMostrar={serieActiva} />
    </>
  );
};

export default DisenosTline;

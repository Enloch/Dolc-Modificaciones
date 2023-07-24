import { useState } from "react";
import Cita from "../../../components/Cita";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import img1 from "../../../assets/images/DolckerTline/Diseno/catalogo3-1-14.webp";
import fondo from "../../../assets/images/Diseno/Formato/fondo.webp";
import indicadoresFormato from "../../../utils/indicadoresFormato";
import Anotacion from "../../../components/Anotacion";
import VisualizadorVariaciones from "../../../components/VisualizadorVariaciones";
import Anotaciones from "../../../components/Anotacion/Anotaciones";
import VisualizadorRotador from "../../../components/VisualizadorRotador";
import config from "../../../configs/configPiezasEspeciales";
import configAcabados from "../../../configs/configAcabadosTline";
import Series from "./05_2_Series";
import img2 from "../../../assets/images/Diseno/Espesores/img1.webp";
import img3 from "../../../assets/images/Diseno/Espesores/img2.webp";
import ranurado6 from "../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_6mm.jpg";
import ranurado9 from "../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_9mm.jpg";
import ranurado11 from "../../../assets/images/DolckerTline/Diseno/Espesores/Dolcker_espesor_11mm.jpg";
import VisualizadorDesplazador from "../../../components/Tline/VisualizadorDesplazador";
import Text from "../../../components/Text";
import IndiceSeries from "./05_1_IndiceSeries";
import Intercambiador from "../../../assets/images/DolckerTline/intercambiador.jpg";
import ConfiguradorImg from "../../../assets/images/DolckerTline/formatoscolor.webp";
import interactivoImg from "../../../assets/images/DolckerTline/interactivo.webp";
import rotadorImg from "../../../assets/images/DolckerTline/config.jpg";
import RotadorTline from "../../../components/Rotadores/Tline/Rotador";
import ConfiguradorFormatosTine from "../../../components/VisualizadorVariacionesTline";

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
        <ImageWithCaption
          src={img1}
          alt='Imagen de Diseños 1'
          // caption='Arquitectos pasan la referencia'
          columnSpan='6'
        />
        <Cita
          cita='“La regla de la arquitectura es hacer las cosas con amor y obsesión en gran proporción.”'
          author='Miguel Fisac (1913-2006)'
          colorAutor={COLORS.gray05}
        />
      </StyledDisenos>
      <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo2>Formato</Titulo2>
        <Anotacion {...propsFormato.anotacion} />
        {/* <VisualizadorVariaciones {...propsFormato.visualizador} /> */}
        <ConfiguradorFormatosTine />
        {/*
        <ImageWithCaption
          src={ConfiguradorImg}
          alt='Imagen de Diseños 1'
          caption='Configurador interactivo'
          columnSpan='6'
        /> */}
      </StyledDisenos>
      <StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
        <Titulo2>Acabados Cerámica</Titulo2>
        <Anotaciones>
          <Anotacion
            type='normal'
            text='Pulsa en el punto para ver todas las posibilidades de piezas especiales'
          />
          <Anotacion
            type='swipe'
            text='Desliza con el ratón o el dedo para apreciar la textura'
          />
        </Anotaciones>
        <VisualizadorDesplazador config={configAcabados} />
      </StyledDisenos>
      <StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
        <Titulo2>Acabados y Perfiles de Cenefas</Titulo2>
        <Anotaciones>
          <Anotacion
            type='normal'
            text='Pulsa en el punto para ver todas las posibilidades de piezas especiales'
          />
          <Anotacion
            type='swipe'
            text='Desliza con el ratón o el dedo para apreciar la textura'
          />
        </Anotaciones>
        <div className='rotador'>
          <RotadorTline />
        </div>
      </StyledDisenos>
      <StyledDisenos id={id[4]} backgroundColor={COLORS.gray01} isEspesores>
        <Titulo2>Espesores</Titulo2>
        <div className='espesor espesor-1'>
          <img src={ranurado6} alt='' />
          <ul>
            <strong>TC 6 / 6 mm.</strong>
            <li>Suelo</li>
            <li>Techo</li>
            <li>Fachada</li>
            <li>Recerco</li>
          </ul>
        </div>
        <div className='espesor espesor-2'>
          <img src={ranurado9} alt='' />
          <ul>
            <strong>TC 9 / 9 mm.</strong>
            <li>Suelo</li>
            <li>Techo</li>
            <li>Fachada</li>
            <li>Recerco</li>
          </ul>
        </div>
        <div className='espesor espesor-3'>
          <img src={ranurado11} alt='' />
          <ul>
            <strong>TC 11 / 11 mm.</strong>
            <li>Suelo</li>
            <li>Techo</li>
            <li>Fachada</li>
            <li>Recerco</li>
          </ul>
        </div>
      </StyledDisenos>

      <IndiceSeries id={id[6]} queSerieActiva={setSerieActiva} />
      <Series id={ids} serieActivaMostrar={serieActiva} />
    </>
  );
};

export default DisenosTline;

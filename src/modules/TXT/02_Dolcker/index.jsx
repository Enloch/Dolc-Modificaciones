import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
import img2 from "../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/Tline/VisualizadorNota";
import Text from "../../../components/Text";

import config from "../../../configs/configDolckerTline";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Pasa el ratón por los puntos para ver la información",
    type: "normal",
    indicadores: config,
    imgBackground: img3,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker TXT soluciona</Titulo>
      <div className='dolcker-info'>
        <ImageWithCaption
          src={Reemplazo}
          alt='Imagen Dolcker 2'
          caption='Sistema Matrix con matrices de aluminio extruido.'
        />

        <Text>
        Un nuevo concepto en fachadas ventiladas.
        <br/>
        <br/>
        Con su innovador sistema de revestimiento  Dolcker combinado con perfiles de aluminio, Dolcker TX redefine el diseño arquitectónico, permitiendo:
        <br/>
        <br/>
        Volúmenes personalizados que transforman la percepción del espacio
        <br/>
        Diferentes paños y dimensiones para jugar con formas y sombras únicas
        <br/>
        Total libertad creativa para diseñadores y técnicos
        </Text>
      </div>
      <VisualizadorNota {...propsVisualizador} />
      <Text>
        <br />
      </Text>
    </StyledDolcker>
  );
};

export default DolckerTline;

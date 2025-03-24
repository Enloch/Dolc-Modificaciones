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
    imgBackground: Reemplazo,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker Steps soluciona</Titulo>
      <div className='dolcker-info'>
        <ImageWithCaption
          src={Reemplazo}
          alt='Imagen Dolcker 2'
          caption='Sistema Steps con matrices de aluminio extruido.'
        />

        <Text>
          textos Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          illo rerum repellendus molestiae id quisquam nemo illum provident,
          aliquid animi quo ipsum ex voluptatibus odio inventore iste
          consectetur sunt consequuntur?
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

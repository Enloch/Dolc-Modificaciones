import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import Reemplazo from "../../../assets/images/DolckerTXT/temporal.webp";
import img2 from "../../../assets/images/DolckerTXT/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../assets/images/DolckerTXT/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/TXT/VisualizadorNota";
import Text from "../../../components/Text";

import config from "../../../configs/configDolckerTXT";

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
          src={img2}
          alt='Imagen Dolcker 2'
          caption='Sistema TXT con perfiles de aluminio.'
        />

        <Text>
        Innovacion en fachadas ventiladas.
        <br/>
        <br/>
        La nueva línea de fachadas ventiladas Dolcker TXT está diseñada para ofrecer versatilidad, eficiencia y un diseño innovador, adaptándose a las exigencias arquitectónicas más vanguardistas.
        <br/>
        Su estructura modular y sus diferentes opciones de fijación permiten configuraciones personalizadas que garantizan un resultado estético y funcional de alto nivel.
        </Text>
      </div>
      <VisualizadorNota {...propsVisualizador} />
      {/* <Text>
        <br />
      </Text> */}
    </StyledDolcker>
  );
};

export default DolckerTline;

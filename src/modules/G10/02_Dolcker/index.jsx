import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";

import img2 from "../../../assets/images/DolckerTline/jorgeobra.jpg";
import img3 from "../../../assets/images/DolckerTline/arquitecto.webp";
import VisualizadorNota from "../../../components/VisualizadorNota";
import Text from "../../../components/Text";

import config from "../../../configs/configDolcker";

const Dolcker = ({ id }) => {
  const propsVisualizador = {
    text: "Pasa el ratón por los puntos para ver la información",
    type: "normal",
    //indicadores: config,
    imgBackground: img3,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker G10 soluciona</Titulo>
      <div className='dolcker-info'>
        <ImageWithCaption
          src={img2}
          alt='Imagen Dolcker 2'
          caption='Imagen Obra G10 (Jorge)'
        />
        <Text>
          <strong>Texto(Jorge)</strong>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, <strong>consectetur adipiscing elit.</strong> Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend odio
          in lectus lacinia consectetur. Quisque ut nulla libero. Maecenas non
          hendrerit nisl.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi eleifend
          odio in lectus lacinia consectetur.
        </Text>
      </div>
      <VisualizadorNota {...propsVisualizador} />
      <Text>
        <strong>Imagen Exterior G10(Arquitecto )</strong>
        <br />
        -Esquina {"( dibujo técnico/croquis por parte del arquitecto)"}
        <br />
        -Recerco {"( dibujo técnico/croquis por parte del arquitecto)"}
        <br />
        -Coronación {"( dibujo técnico/croquis por parte del arquitecto)"}
        <br />
        -Arranque {"( dibujo técnico/croquis por parte del arquitecto)"}
        <br />
        -Fachada {"( dibujo técnico/croquis por parte del arquitecto)"}
      </Text>
    </StyledDolcker>
  );
};

export default Dolcker;

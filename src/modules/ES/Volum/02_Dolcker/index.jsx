import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Volumen/Dolcker/Volum55.jpg";
import Imagen2 from "../../../../assets/images/Volumen/Dolcker/Volum62.jpg";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Pasa el ratón por los puntos para ver la información",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Sistema Volumen soluciona</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Sistema Volumen"
        />

        <Text>
          DOLCKER VOLUMEN es el primer sistema de ranura continua{" "}
          <strong>full&body</strong>, que ofrece infinitas posibilidades de
          modulación. Combina placas de distintos espesores —11, 14 y 20 mm—
          para generar relieves, sombras y espacios entre las piezas de la
          fachada.
          <br />
          <br />
          Este innovador sistema permite diseñar envolventes arquitectónicas con
          soluciones técnicas aplicables también a suelos elevados, techos,
          recercados de ventanas y tapas de coronación, utilizando siempre el
          mismo material para lograr una estética continua y coherente en todo
          el proyecto.
          <br />
          <br />
          Gracias a la tecnología full&body, es posible diseñar aristas
          completamente continuas, obteniendo un acabado uniforme, preciso y de
          alta calidad arquitectónica.
        </Text>
      </div>
      {/* <VisualizadorNota {...propsVisualizador} /> */}
      <ImageWithCaption
        src={Imagen2}
        alt="Imagen Dolcker 2"
        // caption="Sistema Volumen"
      />
      <Text />
    </StyledDolcker>
  );
};

export default DolckerTline;

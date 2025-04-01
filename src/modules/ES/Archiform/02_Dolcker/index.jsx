import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Archiform/Dolcker/Archiform41.jpg";
import Imagen2 from "../../../../assets/images/Archiform/Dolcker/Archiform01.jpg";

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
      <Titulo>Sistema Archiform soluciona</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Sistema Archiform"
        />

        <Text>
          DOLCKER & Archiform presenta su innovador sistema para formatos
          trapezoidales con ranura continua en espesores de 14 y 20 mm: el
          primer sistema <strong>full&body</strong> con ranura continua, que
          ofrece infinitas posibilidades de modulación y diseño.
          <br />
          <br />
          Gracias a la tecnología full&body, es posible crear fachadas con
          aristas totalmente continuas, aportando una estética diferenciadora
          respecto a los formatos tradicionales cuadrados o rectangulares. Una
          solución ideal para envolventes arquitectónicas elegantes y
          distintivas.
          <br />
          <br />
          El sistema DOLCKER & Archiform va más allá de las fachadas, ofreciendo
          soluciones integrales también para suelos elevados, techos, recercados
          de ventanas y tapas de coronación, manteniendo siempre el mismo
          material y acabado. Esto permite una coherencia total en el diseño
          arquitectónico.
          <br />
          <br />
          Además, DOLCKER ha desarrollado un sistema de colocación de alta
          seguridad, diseñado para facilitar el trabajo de los técnicos y
          garantizar las máximas prestaciones en edificios singulares, tanto a
          nivel técnico como estético.
        </Text>
        <ImageWithCaption
          src={Imagen2}
          alt="Imagen Dolcker 2"
          // caption="Sistema Volumen"
        />
      </div>
      {/* <VisualizadorNota {...propsVisualizador} /> */}

      <Text />
    </StyledDolcker>
  );
};

export default DolckerTline;

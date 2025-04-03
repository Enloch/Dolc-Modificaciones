import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Fusion/Dolcker/IMG_7282.jpg";
import Imagen2 from "../../../../assets/images/Fusion/Dolcker/IMG_7346.jpg";

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
      <Titulo>Sistema Fusion soluciona</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Sistema Fusion"
        />

        <Text>
          Sistema de fachadas modulares con combinaciones personalizadas
          <br />
          <br />
          DOLCKER FUSIÓN es la evolución natural del reconocido sistema DOLCKER
          SYSTEM, creado para ofrecer una libertad creativa sin precedentes en
          el diseño de envolventes arquitectónicas.
          <br />
          <br />
          Su principal valor diferencial reside en la posibilidad de combinar
          diferentes colecciones dentro de una misma fachada, permitiendo
          mezclar colores, texturas y acabados en los porcentajes definidos a
          medida por el arquitecto o prescriptor.
          <br />
          <br />
          Esta personalización se mantiene a lo largo de toda la cadena
          logística: el material se entrega clasificado, mezclado y combinado
          según proyecto, en palets preparados para su instalación directa,
          facilitando la ejecución y optimizando el trabajo en obra.
          <br />
          <br />
          Gracias a esta innovación, se pueden concebir fachadas con una
          estética única, donde el control del diseño está plenamente en manos
          del proyectista, permitiendo una expresión arquitectónica libre,
          sofisticada y eficiente.
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

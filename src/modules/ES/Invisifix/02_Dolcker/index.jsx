import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Invisifix/Dolcker/IMG_0727.jpg";
import Imagen2 from "../../../../assets/images/Invisifix/Dolcker/IMG_7842.jpg";

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
      <Titulo>Sistema Invisifix soluciona</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Sistema Invisifix"
        />

        <Text>
          La nueva generación de grapas invisibles Dolcker
          <br />
          <br />
          Invisifix es la evolución natural del sistema Dolcker T20, una grapa
          de diseño optimizado que sustituye el anclaje original por una
          solución más robusta, precisa y discreta, manteniendo la filosofía de
          mínima visibilidad y máxima integración estética.
          <br />
          <br />
          Pensada para proyectos donde el detalle constructivo es clave —como
          techos, balcones interiores o zonas con ángulos de visión cercanos—,
          Invisifix lleva la discreción visual al máximo nivel sin comprometer
          la seguridad estructural.
          <br />
          <br />
          <ul>
            Características principales de Invisifix:
            <li>
              - Composición mejorada y mayor rendimiento mecánico: acero de alta
              resistencia para una grapa más segura y duradera.
            </li>
            <li>
              - Patilla vista reducida y biselada, diseñada para pasar
              desapercibida incluso en condiciones de observación próxima.
            </li>
            <li>
              - Sujeción retranqueada, que aleja el punto de anclaje del borde
              visible de la placa, reduciendo su impacto visual.
            </li>
            <li>
              - Lacado QUALICOAT parcial en la zona vista, disponible en
              cualquier RAL, con fondo negro para integración estética con la
              junta.
            </li>
            <li>
              - Compatible con piezas cerámicas de distintos espesores,
              totalmente integrada en el sistema Dolcker T20.
            </li>
          </ul>
          <br />
          Invisifix es una solución discreta, precisa y adaptable, ideal para
          arquitecturas de alto valor añadido, donde la integración entre
          técnica y diseño es esencial.
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

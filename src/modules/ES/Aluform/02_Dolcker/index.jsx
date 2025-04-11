import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/Aluform/Dolcker/IMG_7884.jpg";
import img3 from "../../../../assets/images/Aluform/Dolcker/IMG_7677.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerMatrix";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Pasa el ratón por los puntos para ver la información",
    type: "normal",
    // indicadores: config,
    imgBackground: img3,
    alt: "Imagen de fondo con indicadores",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker Aluform soluciona</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={img2}
          alt="Imagen Dolcker 2"
          caption="Sistema Aluform con matrices de aluminio plegado."
        />

        <Text>
          Sistema de fachadas en chapa de aluminio plegado
          <br />
          <br />
          Dolcker presenta su innovador sistema de fachadas ventiladas en
          aluminio plegado con lacados de última generación, diseñado
          específicamente para responder a los retos de la nueva arquitectura
          contemporánea.
          <br />
          <br />
          Este sistema incorpora una perfilería técnica avanzada, que garantiza
          una instalación segura, precisa y adaptable, permitiendo a arquitectos
          y proyectistas crear edificios singulares con total libertad creativa.
          <br />
          <br />
          Ventajas del sistema:
          <br />
          <br />
          • Fachadas Modernas y Expresivas
          <br />
          La chapa de aluminio plegado permite generar volúmenes, ritmos y
          geometrías únicas, aportando carácter arquitectónico a cualquier
          fachada. Cada pliegue se convierte en una herramienta de diseño.
          <br />
          <br />
          • Durabilidad y Resistencia
          <br />
          Gracias a su composición y acabados lacados de alta calidad, el
          sistema ofrece gran resistencia a agentes climáticos, estabilidad
          dimensional y bajo mantenimiento.
          <br />
          <br />
          • Versatilidad Total
          <br />
          Las posibilidades de diseño, formato y color son infinitas. El sistema
          admite distintos tipos de plegado y se adapta a proyectos
          residenciales, terciarios o institucionales.
          <br />
          <br />
          • Sistema de Fijación Dolcker
          <br />
          Un sistema de colocación oculto y seguro, desarrollado por el equipo
          técnico de Dolcker, que garantiza una instalación rápida, fiable y
          alineada con los estándares técnicos más exigentes.
          <br />
          <br />
          Dolcker Soluciona es más que una fachada:
          <br />
          es la respuesta innovadora a la arquitectura que busca diseño,
          rendimiento y singularidad.
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

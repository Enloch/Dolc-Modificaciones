import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import img2 from "../../../assets/images/DolckerTline/Dolcker/catalogo3-1-5.webp";
import img3 from "../../../assets/images/DolckerTline/Dolcker/catalogo3-1-7.webp";
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
      <Titulo>Dolcker T-LINE soluciona</Titulo>
      <div className='dolcker-info'>
        <ImageWithCaption
          src={img2}
          alt='Imagen Dolcker 2'
          caption='Imagen sistema T-LINE'
        />
        <Text>
          El sistema DOLCKER & line para fachadas de cerámica tipo Dolcker line
          es un sistema con perfilería de alta inercia y doble seguridad. Todos
          y cada uno de los elementos que componen este sistema están fabricados
          con materias primas de máxima calidad.
          <br />
          <br />
          <br />
          Se trata de un sistema de fijación mecánica de clip + fijación química
          + fijación mecánica cenefa continua perimetral de aluminio lacada a su
          color , mediante una subestructura que está compuesta por ménsulas
          regulables de aluminio de alta calidad en forma de “L” de 3 mm de
          espesor, que transmiten esfuerzos y que van fijadas mediante anclaje a
          la estructura base del edificio (pared de ladrillo o forjado de
          hormigón).Sobre estas ménsulas se fijan mediante tornillos
          autotaladrantes de acero inoxidable los perfiles verticales de
          aluminio extruidos en forma de“T”de 3 mm de espesor.
          <br />
          <br />
          <br />
          En estos perfiles en forma de “T” se atornillan unos perfiles
          horizontales en forma de “G”, permitiendo así que la pieza esté
          apoyada en su totalidad. Se trata del sistema idóneo para la
          colocación de cerámicas, permitiendo sustituir las piezas ya que
          dispone de un clip corredera de acero inoxidable logrando infinidad de
          colocaciones. Además permite lacar el perfil cenefa horizontal en
          función del color que el cliente elija. Se colocan al menos dos clips
          correderos en la parte superior de la pieza de arranque. En el resto
          de piezas intermedias, se procederá a la colocación de al menos 4
          clips por cada pieza de cerámica. Se le añadirá puntos de masilla
          poliuretano de pegado y sellado sika-111 o similar (4 por pieza) que
          nos permita absorber las dilataciones de la fachada en los clips
          correderas.
          <br />
          <br />
          <br />
          Se trata sin duda de un sistema con múltiples opciones de composición
          de fachada ya que es posible romper las juntas verticales. Estas
          juntas verticales se ven minimizadas a tan solo 1 mm potenciando de
          esta manera las juntas horizontales. La salida de la cerámica es entre
          43-47 mm dependiendo del espesor de la cerámica escogida
        </Text>
      </div>
      <VisualizadorNota {...propsVisualizador} />
      <Text>
        <br />

        <br />
      </Text>
    </StyledDolcker>
  );
};

export default DolckerTline;

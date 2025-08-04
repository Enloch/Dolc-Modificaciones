import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Archiform/Dolcker/Archiform54.jpg";
import Imagen2 from "../../../../assets/images/Archiform/Dolcker/Archiform01.jpg";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Hover over the points to see information",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Background image with indicators",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Archiform System solves</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Imagen Dolcker 2"
          caption="Archiform System"
        />

        <Text>
          DOLCKER & Archiform presents its innovative system for trapezoidal formats
          with continuous groove in 14 and 20 mm thicknesses: the
          first <strong>full&body</strong> system with continuous groove, offering
          infinite possibilities of modulation and design.
          <br />
          <br />
          Thanks to full&body technology, it's possible to create facades with
          completely continuous edges, providing a differentiating aesthetic
          compared to traditional square or rectangular formats. An
          ideal solution for elegant and distinctive architectural envelopes.
          <br />
          <br />
          The DOLCKER & Archiform system goes beyond facades, offering
          comprehensive solutions also for raised floors, ceilings, window frames
          and coping caps, always maintaining the same material and finish. This
          allows total coherence in architectural design.
          <br />
          <br />
          Additionally, DOLCKER has developed a high-security installation system,
          designed to facilitate technicians' work and guarantee maximum
          performance in unique buildings, both technically and aesthetically.
        </Text>
        <ImageWithCaption
          src={Imagen2}
          alt="Dolcker Image 2"
          // caption="Volume System"
        />
      </div>
      {/* <VisualizadorNota {...propsVisualizador} /> */}

      <Text />
    </StyledDolcker>
  );
};

export default DolckerTline;

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
    text: "Hover over the points to see information",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Background image with indicators",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Invisifix System solves</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Dolcker image 2"
          caption="Invisifix System"
        />

        <div className="text-content">
          The new generation of Dolcker invisible clips
          <br />
          <br />
          Invisifix is the natural evolution of the Dolcker T20 system, a clip with optimized design that replaces the original anchorage with a more robust, precise and discreet solution, maintaining the philosophy of minimal visibility and maximum aesthetic integration.
          <br />
          <br />
          Designed for projects where the constructive detail is key —such as ceilings, interior balconies or areas with close viewing angles—, Invisifix takes visual discretion to the maximum level without compromising structural safety.
          <br />
          <br />
          Main features of Invisifix:
          <ul>
            <li>
              Improved composition and higher mechanical performance: high-strength steel for a safer and more durable clip.
            </li>
            <li>
              Reduced and beveled visible tab, designed to go unnoticed even in close observation conditions.
            </li>
            <li>
              Recessed fastening, which moves the anchorage point away from the visible edge of the plate, reducing its visual impact.
            </li>
            <li>
              Partial QUALICOAT coating in the visible area, available in any RAL, with a black background for aesthetic integration with the joint.
            </li>
            <li>
              Compatible with ceramic pieces of different thicknesses, fully integrated into the Dolcker T20 system.
            </li>
          </ul>
          <br />
          Invisifix is a discreet, precise and adaptable solution, ideal for high-value-added architectures, where the integration between technique and design is essential.
        </div>
      </div>
      <ImageWithCaption columnSpan="6" src={Imagen2} alt="Dolcker image 2" />
    </StyledDolcker>
  );
};

export default DolckerTline;

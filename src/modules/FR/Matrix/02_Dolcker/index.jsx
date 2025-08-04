import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/DolckerMatrix/Dolcker/IMG_7532.jpg";
import img3 from "../../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorNota";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerMatrix";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Passez la souris sur les points pour voir les informations",
    type: "normal",
    indicadores: config,
    imgBackground: img3,
    alt: "Image de fond avec indicateurs",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker Matrix Facade résout</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={img2}
          alt="Image Dolcker 2"
          caption="Système Matrix Facade avec matrices en aluminium extrudé."
        />

        <Text>
          SYSTÈME MATRIX FACADE est un système de revêtement de lames en
          aluminium pour un montage clip facile. La grande
          variété de designs lui confère une grande polyvalence pour la
          conception de façades ventilées, de revêtements intérieurs et de panneaux
          décoratifs.
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

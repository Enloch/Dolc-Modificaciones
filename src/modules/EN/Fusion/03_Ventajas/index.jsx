import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Fusion/Ventajas/IMG_7220.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Advantages of the Dolcker Fusion system</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Image of Advantages 1"
        caption="DOLCKER Fusion Terracotta"
        columnSpan="6"
      />
      <Text>
        DOLCKER FUSION has developed an innovative modular system that allows
        complete facade customization by combining:
        <br />
        <br />
        <strong>1. </strong>
        Three plate thicknesses: 11, 14 and 20 mm.
        <br />
        <strong>2. </strong>
        Three textures per model, fully combinable with each other
        <br />
        <strong>3. </strong>
        Predefined percentage modulation according to the designer's specifications
        <br />
        <br />
        Thanks to our exclusive classification system, orders are delivered
        organized according to defined color and texture percentages, so the
        installer doesn't need to perform any prior classification on site.
        <br />
        <br />
        The DOLCKER FUSION system incorporates a technical fixing development
        for ventilated facades, designed to meet both aesthetic and functional
        project requirements.
      </Text>
      <Listado>
        <li>Hidden mechanical fixing system + elastic fixing</li>
        <li>Demountable system</li>
        <li>
          Sliding clips (safety for scaffolding bracing pieces)
        </li>
        <li>Continuous profile with high inertia for supporting heavy loads</li>
        <li>Factory-calibrated continuous slot</li>
        <li>Free placement system</li>
        <li>Multiple piece sizes</li>
        <li>Custom cutting</li>
        <li>Different piece thicknesses (11, 14 and 20 mm)</li>
        <li>System developed for chambers up to 20 cm</li>
        <li>Pieces with "full body" visible edge</li>
        <li>Manufacture of pieces with matte, flamed and honed textures</li>
        <li>Fast and secure assembly</li>
        <li>Versatile system for facade design</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Invisifix/Ventajas/IMG_0060.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Advantages of the Dolcker Invisifix system</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Advantages image 1"
        caption="DOLCKER Invisifix"
        columnSpan="6"
      />
      <Text>
        DOLCKER INVISIFIX has developed an innovative modular system that allows complete customization of facades, combining:
        <br />
        <br />
        <strong>1. </strong>
        Three plate thicknesses: 11, 14 and 20 mm.
        <br />
        <strong>2. </strong>
        Three textures per model, fully combinable with each other
        <br />
        <strong>3. </strong>
        Predefined modulation by percentage, according to the designer's specifications
        <br />
        <br />
        Thanks to our exclusive classification system, orders are supplied organized according to the defined percentages of color and texture, so that the installer does not need to make any prior classification on site.
        <br />
        <br />
        The DOLCKER INVISIFIX system incorporates a technical development of fixation for ventilated facades, designed to meet both aesthetic and functional requirements of the project.
      </Text>
      <Listado>
        <li>Mechanical fixation system + elastic fixation</li>
        <li>Removable system</li>
        <li>
          Sliding clips (safety for scaffolding and lifting equipment)
        </li>
        <li>Continuous profile of high inertia for supporting large loads</li>
        <li>Continuous calibrated groove in the factory</li>
        <li>Free placement system</li>
        <li>Multiple sizes of pieces</li>
        <li>Made-to-measure cutting</li>
        <li>Different thicknesses of pieces (11, 14 and 20 mm)</li>
        <li>System developed for chambers up to 20 cm</li>
        <li>Pieces with visible edge "full body"</li>
        <li>Manufacture of pieces with matte, flamed and honed textures</li>
        <li>Fast and secure assembly</li>
        <li>Versatile system for designing the facade</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

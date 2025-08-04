import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Archiform/Ventajas/Archiform24.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Advantages of the Dolcker Archiform System</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Advantages Image 1"
        caption="DOLCKER & CLIP Archiform"
        columnSpan="6"
      />
      <Text>
        DOLCKER has developed two slab thicknesses, 14 and 20 mm combinable
        within its high-security installation system, making it easier for
        technicians to create unique and customized buildings.
        <br />
        <br />
        It has a technical development of <strong>improved fixing system for ventilated facades</strong>, to
        adapt to both the aesthetic and functional needs of the
        project.
      </Text>
      <Listado>
        <li>Mechanical hidden fixing system + elastic fixing</li>
        <li>Removable system</li>
        <li>
          Sliding clips (safety for scaffolding and lifting pieces)
        </li>
        <li>Continuous profile with high inertia for supporting large loads</li>
        <li>Continuous calibrated groove in the factory</li>
        <li>Free placement system</li>
        <li>Multiple sizes of pieces</li>
        <li>Made-to-measure cutting</li>
        <li>Different thicknesses of pieces (14 and 20 mm)</li>
        <li>System developed for chambers up to 20 cm</li>
        <li>Pieces with visible edge "full body"</li>
        <li>Manufacturing of pieces with matte, flamed and honed textures</li>
        <li>Fast and secure assembly</li>
        <li>Versatile system for designing the facade</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

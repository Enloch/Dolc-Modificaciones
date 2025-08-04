import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledVentajas from "./styles";
import img1 from "@assets/images/DolckerTXT/Ventajas/catalogo3-1-8.jpg";
import Text from "@components/Text";
import { COLORS } from "@global/GlobalStyles";
import Listado from "@components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Advantages of the Dolcker TXT system</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Imagen de Ventajas 1"
        caption=""
        columnSpan="6"
      />
      <Text>
        Design, innovation and functionality in a single system for ventilated
        facades.
      </Text>
      <Listado>
        <li>
          <strong>Improved technical fastening:</strong> Adaptable to the
          aesthetic and functional needs of each project.
        </li>
        <li>
          <strong>Mechanical fastening system:</strong> Option of hidden
          or visible fastening combined with elastic fastening.
        </li>
        <li>
          Profiles designed for a{" "}
          <strong>free placement system</strong>, providing total
          flexibility in design.
        </li>
        <li>
          <strong>Dimensional versatility:</strong> Pieces in multiple
          sizes, thicknesses of 6, 9, 11 and 14 mm, and custom cutting.
        </li>
        <li>
          Chambers up to 20 cm, optimizing{" "}
          <strong>thermal and acoustic efficiency.</strong>
        </li>
        <li>
          <strong>Premium finishes:</strong> Pieces with hidden edge lacquered and
          matte, flamed and honed textures.
        </li>
        <li>
          <strong>Quick and secure assembly</strong>, optimizing installation
          times.
        </li>
        <li>
          <strong>Unlimited creativity:</strong> System with multiple placement
          forms, allowing innovative designs with unique volumes and panels.
        </li>
        <li>
          <strong>Customizable profiling:</strong> Lacquered in RAL colors,
          wood imitations and anodized options.
        </li>
        <li>
          <strong>Fastening options:</strong> Placement with visible clip or
          hidden clip, according to the project style.
        </li>
      </Listado>
      <Text>
        More than a cladding, a solution that transforms architecture.
      </Text>
    </StyledVentajas>
  );
};

export default VentajasTline;

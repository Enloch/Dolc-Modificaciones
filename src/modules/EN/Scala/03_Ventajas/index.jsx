import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Scala/Ventajas/Volum17.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Advantages of the Dolcker Scala system</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Imagen de Ventajas 1"
        caption="DOLCKER &CLIP"
        columnSpan="6"
      />
      <Text>
        DOLCKER has developed three plate thicknesses, 11, 14, 20 mm
        combinable within its high-security installation system,
        facilitating technicians to create unique and
        personalized buildings.
        <br />
        <br />
        It has a technical development of{" "}
        <strong>improved fixing for ventilated facades,</strong> to
        adapt to both aesthetic and functional needs of the
        project.
      </Text>
      <Listado>
        <li>Hidden mechanical fixing system + elastic fixing</li>
        <li>Demountable system</li>
        <li>
          Sliding clips (security for scaffold anchoring pieces)
        </li>
        <li>Continuous profile with high inertia to support heavy loads</li>
        <li>Factory-calibrated continuous groove</li>
        <li>Free placement system</li>
        <li>Multiple piece sizes</li>
        <li>Custom cutting</li>
        <li>Different piece thicknesses (11, 14 and 20 mm)</li>
        <li>System developed for chambers up to 20 cm</li>
        <li>Pieces with visible edge &quot;full body&quot;</li>
        <li>Manufacturing of pieces with matte, flamed and honed textures</li>
        <li>Quick and secure assembly</li>
        <li>Versatile system when designing the facade</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

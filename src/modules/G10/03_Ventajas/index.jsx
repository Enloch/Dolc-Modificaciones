import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerTline/7475.webp";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";

const Ventajas = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker G10</Titulo>
      <ImageWithCaption
        src={img1}
        alt='Imagen de Ventajas 1'
        caption='A consultar Jorge( Arquitecto dará referencia para que 7475 cree la imagen)'
        columnSpan='6'
      />
      <Text>
        Dispone de un desarrollo técnico de fijación para fachadas mejorado,para
        adaptarse tanto a las necesidades estéticas como funcionales del
        proyecto.
      </Text>
      <Listado>
        <li>
          <strong>Texto de la lista (Jorge).</strong>
        </li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Morbi eleifend odio in lectus lacinia consectetur.</li>
        <li>
          Pellentesque justo turpis, interdum ut laoreet et, aliquet nec libero.
        </li>
        <li>Donec sit amet dapibus mauris. </li>
        <li>Proin a urna vel ex dapibus congue nec eget lacus. </li>
        <li>Suspendisse potenti. Nunc lobortis ut lacus et sollicitudin.</li>
        <li>Nulla facilisi. In viverra a urna quis tincidunt.</li>
        <li>Praesent vitae elementum tortor, et faucibus augue.(1, 2 y 3)</li>
        <li>Suspendisse potenti. Nunc lobortis ut lacus et sollicitudin. 1 </li>
        <li>
          Nulla facilisi. In viverra a urna quis tincidunt.&quot;praesent
          vitae&quot;
        </li>
      </Listado>
    </StyledVentajas>
  );
};

export default Ventajas;

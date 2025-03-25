import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker Detaill</Titulo>
      <ImageWithCaption
        src={Reemplazo}
        alt='Imagen de Ventajas 1'
        caption=''
        columnSpan='6'
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
        tenetur molestiae veritatis perspiciatis neque, ad odio facilis nulla,
        dolor obcaecati maxime hic officiis aut, voluptas ullam laborum quam
        sapiente?
      </Text>
      <Listado>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
        <li>elemento lista</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

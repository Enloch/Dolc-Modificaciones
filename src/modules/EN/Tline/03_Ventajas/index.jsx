import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerTline/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";

const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker T-LINE</Titulo>
      <ImageWithCaption
        src={img1}
        alt='Imagen de Ventajas 1'
        caption=''
        columnSpan='6'
      />
      <Text>
        Sistema dolcker line dispone de un desarrollo técnico de fijación oculta
        en las piezas porcelanicas para poder clipar una cenefa lacada en
        diferentes acabados
      </Text>
      <Listado>
        <li>Sistema desmontable</li>
        <li>
          Clip correderos (seguridad para piezas de ariostamiento andamios)
        </li>
        <li>Perfil continuo de gran inercia para soporte de grandes cargas</li>
        <li>Sistema de libre colocación</li>
        <li>Multitud de tamaños de piezas</li>
        <li>Despiece a medida</li>
        <li>Diferentes espesores de piezas (6, 9 y 11 mm)</li>
        <li>Sistema desarrollado para cámaras de hasta 20 cm</li>
        <li>Fabricación de piezas con texturas mate, flamed y honed</li>
        <li>Montaje rápido y seguro</li>
        <li>Sistema versátil a la hora de diseñar la fachada</li>
        <li>Sistema versátil en la decoración de las cenefas</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

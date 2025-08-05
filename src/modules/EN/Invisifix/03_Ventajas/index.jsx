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
      <Titulo>Ventajas del sistema Dolcker Invisifix</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Imagen de Ventajas 1"
        caption="DOLCKER Invisifix"
        columnSpan="6"
      />
      <Text>
        DOLCKER INVISIFIX ha desarrollado un innovador sistema modular que
        permite una personalización total de la fachada, combinando:
        <br />
        <br />
        <strong>1. </strong>
        Tres espesores de placa: 11, 14 y 20 mm.
        <br />
        <strong>2. </strong>
        Tres texturas por modelo, totalmente combinables entre sí
        <br />
        <strong>3. </strong>
        Modulación predefinida por porcentaje, según el diseño del prescriptor
        <br />
        <br />
        Gracias a nuestro exclusivo sistema de clasificación, los pedidos se
        suministran organizados según los porcentajes definidos de color y
        textura, de forma que el instalador no necesita realizar ninguna
        clasificación previa en obra.
        <br />
        <br />
        El sistema DOLCKER INVISIFIX incorpora un desarrollo técnico de fijación
        para fachadas ventiladas, diseñado para satisfacer tanto exigencias
        estéticas como funcionales del proyecto.
      </Text>
      <Listado>
        <li>Sistema de fijación mecánica oculta + fijación elástica</li>
        <li>Sistema desmontable</li>
        <li>
          Clip correderos (seguridad para piezas de ariostamiento andamios)
        </li>
        <li>Perfil continuo de gran inercia para soporte de grandes cargas</li>
        <li>Ranura continua calibrada en fábrica</li>
        <li>Sistema de libre colocación</li>
        <li>Multitud de tamaños de piezas</li>
        <li>Despiece a medida</li>
        <li>Diferentes espesores de piezas (11, 14 y 20 mm)</li>
        <li>Sistema desarrollado para cámaras de hasta 20 cm</li>
        <li>Piezas con canto visto &quot;full body&quot;</li>
        <li>Fabricación de piezas con texturas mate, flamed y honed</li>
        <li>Montaje rápido y seguro</li>
        <li>Sistema versátil a la hora de diseñar la fachada</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

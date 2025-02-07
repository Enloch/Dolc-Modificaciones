import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerTXT/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker TXT</Titulo>
      <ImageWithCaption
        src={img1}
        alt='Imagen de Ventajas 1'
        caption=''
        columnSpan='6'
      />
      <Text>
      Diseño, innovación y funcionalidad en un solo sistema para fachadas ventiladas.
      </Text>
      <Listado>
        <li>Fijación técnica mejorada: Adaptable a las necesidades estéticas y funcionales de cada proyecto.</li>
        <li>Sistema de fijación mecánica: Opción de fijación oculta o vista combinada con fijación elástica.</li>
        <li>Perfiles diseñados para un sistema de libre colocación, brindando flexibilidad total en el diseño.</li>
        <li>Versatilidad dimensional: Piezas en múltiples tamaños, espesores de 6, 9, 11 y 14 mm, y despiece a medida.</li>
        <li>Cámaras de hasta 20 cm, optimizando la eficiencia térmica y acústica.</li>
        <li>Acabados premium: Piezas con canto oculto lacado y texturas mate, flamed y honed.</li>
        <li>Montaje rápido y seguro, optimizando tiempos de instalación.</li>
        <li>Creatividad sin límites: Sistema con múltiples formas de colocación, permitiendo diseños innovadores con volúmenes y paños únicos.</li>
        <li>Perfilería personalizable: Lacado en colores RAL, imitaciones madera y opciones anodizadas.</li>
        <li>Opciones de fijación: Colocación con grapa vista o grapa oculta, según el estilo del proyecto.</li>
      </Listado>
      <Text>
      Más que un revestimiento, una solución que transforma la arquitectura.
      </Text>
    </StyledVentajas>
  );
};

export default VentajasTline;

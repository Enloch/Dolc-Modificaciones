import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Aluform/Ventajas/IMG_7664.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";

const Ventajas = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker Aluform</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Imagen de Ventajas 1"
        caption=""
        columnSpan="6"
      />
      <Text>
        DOLCKER ha desarrollado un sistema técnico de fijación avanzada para
        fachadas ventiladas, capaz de responder con precisión a las exigencias
        estéticas, funcionales y estructurales de la arquitectura contemporánea.
        <br />
        <br />
        Este sistema se adapta a proyectos de cualquier escala, combinando
        diseño, seguridad y libertad creativa.
      </Text>
      <Listado>
        <li>
          <strong>Sistema de Fijación Mixto:</strong> Fijación mecánica vista +
          fijación elástica para una sujeción segura y eficiente.
        </li>
        <li>
          <strong>Sistema desmontable:</strong> Permite sustitución o
          mantenimiento sin necesidad de desmontar toda la fachada.
        </li>
        <li>
          <strong>Perfilería de Alta Inercia:</strong> Estructura robusta y
          adaptable, pensada para grandes formatos y máximas exigencias
          estructurales.
        </li>
        <li>
          <strong>Solución con Ménsulas de Retención:</strong> Seguridad
          adicional frente a cargas de viento, succión y movimiento estructural.
        </li>
        <li>
          <strong>Colocación Libre y Modular:</strong> Sistema versátil que
          permite total libertad en el diseño y disposición de las piezas.
        </li>
        <li>
          <strong>Multiformato:</strong> Acepta una amplia variedad de medidas
          de piezas y despieces a medida según proyecto.
        </li>
        <li>
          <strong>Espesores Variables:</strong> Posibilidad de fabricar piezas
          en aluminio de 0,8 mm / 1 mm / 1,5 mm / 2 mm / 3 mm, según necesidades
          técnicas y estéticas.
        </li>
        <li>
          <strong>Cámaras de Hasta 20 cm:</strong> Diseño optimizado para
          proyectos que requieren altas prestaciones en aislamiento térmico y
          ventilación.
        </li>
        <li>
          <strong>Piezas con Perforaciones Personalizadas:</strong> Posibilidad
          de añadir microperforaciones o diseños especiales según criterio
          arquitectónico.
        </li>
        <li>
          <strong>Acabados de Alta Calidad:</strong> Lacado a una o dos caras,
          con acabado sedase que proporciona una estética sofisticada y
          uniforme.
        </li>
        <li>
          <strong>Montaje Rápido y Seguro:</strong> Soluciones pensadas para
          optimizar tiempos de instalación en obra sin comprometer la calidad
          del resultado.
        </li>
      </Listado>
      <Text>
        DOLCKER pone en manos de arquitectos, diseñadores y constructores una
        solución integral, versátil y eficiente para la envolvente del edificio.
        Diseñado para destacar.
      </Text>
    </StyledVentajas>
  );
};

export default Ventajas;

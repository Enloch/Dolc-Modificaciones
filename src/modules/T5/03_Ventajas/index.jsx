import ImageWithCaption from '../../../components/ImageWithCaption';
import { Titulo } from '../../../components/Titulos';
import StyledVentajas from './styles';
import img1 from '../../../assets/images/DolckerTline/7475.webp';
import Text from '../../../components/Text';
import { COLORS } from '../../../global/GlobalStyles';
import Listado from '../../../components/Listado';

const Ventajas = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Ventajas del sistema Dolcker XL Porcelánico</Titulo>
      <ImageWithCaption
        src={img1}
        alt='Imagen de Ventajas 1'
        caption='Sistema T5'
        columnSpan='6'
      />
      <Text>
        Dispone de un desarrollo técnico de fijación química combinada con grapas para
        fachadas mejorado, para adaptarse tanto a las necesidades estéticas como funcionales
        del proyecto.
      </Text>
      <Listado>
        <li>
          <strong>Máxima durabilidad:</strong> Resistencia a impactos, agentes químicos y
          climatología adversa.
        </li>
        <li>
          <strong>Eficiencia energética:</strong> Contribuye al aislamiento térmico y
          acústico del edificio.
        </li>
        <li>
          <strong>Versatilidad de diseño:</strong> Gran variedad de acabados y formatos.
        </li>
        <li>
          <strong>Montaje rápido y seguro:</strong> Diferentes opciones de fijación
          adaptadas a cada necesidad.
        </li>
        <li>
          <strong>Bajo mantenimiento: </strong>Fácil limpieza y resistencia al paso del
          tiempo.
        </li>
      </Listado>
    </StyledVentajas>
  );
};

export default Ventajas;

import Text from '../../../components/Text';
import { Titulo, Titulo2 } from '../../../components/Titulos';
import StyledSistemas, { Enlaces } from './styles';
import { COLORS } from '../../../global/GlobalStyles';
import sistemas from '../../../assets/images/T5/Sistemas/sistemas.jpg';
import dolckerClip1 from '../../../assets/images/DolckerTline/detalles.jpg';
import dolckerClip2 from '../../../assets/images/DolckerTline/detalles.jpg';

import tc111 from '../../../assets/images/DolckerTline/detalles.jpg';
import tc112 from '../../../assets/images/DolckerTline/detalles.jpg';

import tc141 from '../../../assets/images/DolckerTline/detalles.jpg';
import tc142 from '../../../assets/images/DolckerTline/detalles.jpg';

import hc201 from '../../../assets/images/DolckerTline/detalles.jpg';
import hc202 from '../../../assets/images/DolckerTline/detalles.jpg';
import ImageWithCaption from '../../../components/ImageWithCaption';

const Sistemas = ({ id }) => {
  return (
    <>
      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Sistema constructivos</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt='Sistemas introducción'
          // caption="cita"
          columnSpan='5'
        />
        <Enlaces>
          <li>
            <a href={'#' + id[1]}>
              Sistema
              <br />
              <strong>T5 GO</strong>
            </a>
          </li>
          <li>
            <a href={'#' + id[2]}>
              Sistema
              <br />
              <strong>T5 GV</strong>
            </a>
          </li>
          <li>
            <a href={'#' + id[3]}>
              Sistema
              <br />
              <strong>T5 PLUS</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>T5 GO</Titulo2>
        <Text>
          <strong>Sistema de fijación química + grapa oculta de sustentación</strong>
          <br />
          <br />
          <li>Ideal para proyectos que requieren una fijación discreta y robusta.</li>
          <li>Asegura una sujeción sólida manteniendo una estética limpia.</li>
          <li>Permite la libre dilatación del porcelánico sin interferencias visuales.</li>
        </Text>
        <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[2]}>
        <Titulo2>T5 GV</Titulo2>
        <Text>
          <strong>Sistema de fijación química + grapa vista de sujeción</strong>
          <br />
          <br />
          <li>Incorpora grapas visibles como elemento de fijación y diseño.</li>
          <li>Aporta un toque técnico y contemporáneo a la fachada.</li>
          <li>
            Permite una instalación sencilla con un alto nivel de seguridad estructural.
          </li>
        </Text>
        <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>T5 PLUS</Titulo2>
        <Text>
          <strong>Sistema de fijación química + grapa oculta de retención trasera</strong>
          <br />
          <br />
          <li>Ofrece una sujeción reforzada sin afectar la estética del material.</li>
          <li>
            Perfecto para proyectos que requieren máxima seguridad en grandes formatos.
          </li>
          <li>Garantiza estabilidad ante cargas de viento y cambios de temperatura.</li>
        </Text>
        <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla'
          columnSpan='8'
          isGray
        />
      </StyledSistemas>
    </>
  );
};

export default Sistemas;

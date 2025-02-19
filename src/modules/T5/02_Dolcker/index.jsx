import ImageWithCaption from '../../../components/ImageWithCaption';
import { Titulo } from '../../../components/Titulos';
import StyledDolcker from './styles';
import { COLORS } from '../../../global/GlobalStyles';

import img2 from '../../../assets/images/T5/Dolcker/catalogo3-1-5.webp';
import img3 from '../../../assets/images/DolckerTline/arquitecto.webp';
import VisualizadorNota from '../../../components/VisualizadorNota';
import Text from '../../../components/Text';

import config from '../../../configs/configDolcker';

const Dolcker = ({ id }) => {
  const propsVisualizador = {
    text: 'Pasa el ratón por los puntos para ver la información',
    type: 'normal',
    // indicadores: config,
    imgBackground: img3,
    alt: 'Imagen de fondo con indicadores',
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Dolcker T5 soluciona</Titulo>
      <div className='dolcker-info'>
        <ImageWithCaption
          src={img2}
          alt='Imagen Dolcker 2'
          caption='Sistema T5.
'
        />
        <Text>
          El sistema Dolcker T5 está diseñado para ofrecer fachadas ventiladas
          de alta calidad, combinando eficiencia energética, resistencia y estética. Su
          tecnología de fijación química combinada con grapas ofrece soluciones adaptadas a
          diferentes requerimientos arquitectónicos, garantizando seguridad y durabilidad.
        </Text>
      </div>
      <VisualizadorNota {...propsVisualizador} />
      <Text>
        {/* <strong>Imagen Exterior G10(Arquitecto )</strong>
        <br />
        -Esquina {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Recerco {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Coronación {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Arranque {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Fachada {'( dibujo técnico/croquis por parte del arquitecto)'} */}
      </Text>
    </StyledDolcker>
  );
};

export default Dolcker;

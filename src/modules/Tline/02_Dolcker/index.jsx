import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledDolcker from './styles'
import { COLORS } from '../../../global/GlobalStyles'
import img2 from '../../../assets/images/DolckerTline/Dolcker/catalogo3-1-5.webp'
import img3 from '../../../assets/images/DolckerTline/Dolcker/catalogo3-1-7.webp'
import VisualizadorNota from '../../../components/Tline/VisualizadorNota'
import Text from '../../../components/Text'

import config from '../../../configs/configDolckerTline'

const DolckerTline = ({ id }) => {
    const propsVisualizador = {
        text: 'Pasa el ratón por los puntos para ver la información',
        type: 'normal',
        indicadores: config,
        imgBackground: img3,
        alt: 'Imagen de fondo con indicadores',
    }

    return (
        <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
            <Titulo>Dolcker T-LINE soluciona</Titulo>
            <div className='dolcker-info'>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen Dolcker 2'
                    caption='Imagen sistema T-LINE'
                />
                <Text>
                    El primer sistema de cenefa continua , con infinitas
                    posibilidades de modulaciones. El sistema DOLCKER line
                    permite diseñar fachadas, con soluciones decorativas al
                    disponer de numerosas cenefas con acabados metalicos ,
                    madera y colores metalizados.
                    <br />
                    <br />
                    DOLCKER line ha desarrollado un sistema de colocación de
                    alta seguridad para que los técnicos diseñen edificos
                    singulares modulando cenefas a juego con recercados de
                    ventanas.
                </Text>
            </div>
            <VisualizadorNota {...propsVisualizador} />
            <Text>

                <br />

                <br />


            </Text>
        </StyledDolcker>
    )
}

export default DolckerTline

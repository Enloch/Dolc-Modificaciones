import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledDolcker from './styles'
import { COLORS } from '../../../global/GlobalStyles'

import img2 from '../../../assets/images/DolckerStep/catalogo3-1-5.webp'
import img3 from '../../../assets/images/DolckerStep/catalogo3-1-7.webp'
import VisualizadorNota from '../../../components/VisualizadorNota'
import Text from '../../../components/Text'

import config from '../../../configs/configDolcker'

const DolckerTline = ({ id }) => {
    const propsVisualizador = {
        text: 'Pasa el ratón por los puntos para ver la información',
        type: 'normal',
        //indicadores: config,
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
                    caption='Imagen Obra T-LINE (Jorge)'
                />
                <Text>
                    <strong>Texto(Jorge)</strong>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,{' '}
                    <strong>consectetur adipiscing elit.</strong> Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Morbi eleifend
                    odio in lectus lacinia consectetur. Quisque ut nulla libero.
                    Maecenas non hendrerit nisl.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Morbi eleifend odio in lectus lacinia consectetur.
                </Text>
            </div>
            <VisualizadorNota {...propsVisualizador} />
            <Text>
                <strong>Imagen Exterior T-LINE(Arquitecto )</strong>
                <br />
                -Esquina
                <br />
                -Recerco
                <br />
                -Coronación
                <br />
                -Arranque
                <br />
                -Fachada
            </Text>
        </StyledDolcker>
    )
}

export default DolckerTline

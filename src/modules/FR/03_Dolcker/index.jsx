import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledDolcker from './styles'
import { COLORS } from '../../../global/GlobalStyles'

import img2 from '../../../assets/images/Dolcker/catalogo3-1-5.webp'
import img3 from '../../../assets/images/Dolcker/catalogo3-1-7.webp'
import VisualizadorNota from '../../../components/VisualizadorNota'
import Text from '../../../components/Text'

import config from '../../../configs/FR/configDolcker'

const Dolcker = ({ id }) => {
    const propsVisualizador = {
        text: 'Déplacez la souris sur les points pour voir les informations.',
        type: 'normal',
        indicadores: config,
        imgBackground: img3,
        alt: 'Image de fond avec indicateurs',
    }

    return (
        <StyledDolcker id={id} backgroundColor={COLORS.gray02}>
            <Titulo>Dolcker résout</Titulo>
            <div className='dolcker-info'>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen Dolcker 2'
                    caption='DOLCKER &CLIP SYSTEM Sécurité mécanique et élastique dans le même système'
                />
                <Text>
                    Le premier ful&body système de rainurage continu,{' '}
                    <strong>
                        avec des possibilités de modulation infinies.
                    </strong>{' '}
                    Le système DOLCKER permet de concevoir des façades, avec des
                    solutions techniques pour l'aménagement de planchers
                    surélevés. des solutions techniques pour l'aménagement de
                    planchers surélevés, plafonds, ainsi que des encadrements de
                    fenêtres, des couronnes, en utilisant toujours le même
                    matériau. en utilisant toujours le même matériau.
                    <br />
                    <br />
                    La technologie ful&body permet de concevoir des arêtes de
                    continues.
                    <br />
                    <br />
                    DOLCKER a développé 4 systèmes de placement de haute
                    sécurité pour les techniciens pour concevoir des bâtiments
                    uniques.
                </Text>
            </div>
            <VisualizadorNota {...propsVisualizador} />
        </StyledDolcker>
    )
}

export default Dolcker

import Cita from '../../../../components/Cita'
import ImageWithCaption from '../../../../components/ImageWithCaption'
import { Titulo, Titulo2 } from '../../../../components/Titulos'
import { COLORS } from '../../../../global/GlobalStyles'
import StyledDisenos from './styles'
import img1 from '../../../../assets/images/Diseno/catalogo3-1-14.webp'
import fondo from '../../../../assets/images/Diseno/Formato/fondo.webp'
import indicadoresFormato from '../../../../utils/fr/indicadoresFormato'
import Anotacion from '../../../../components/Anotacion'
import VisualizadorVariaciones from '../../../../components/VisualizadorVariaciones'
import Anotaciones from '../../../../components/Anotacion/Anotaciones'
import VisualizadorRotador from '../../../../components/VisualizadorRotador'
import config from '../../../../configs/FR/configPiezasEspeciales'
import configAcabados from '../../../../configs/configAcabados'
import Series from './06_2_Series'
import ranurado11 from '../../../../assets/images/Diseno/Espesores/ranurado11mm.webp'
import ranurado14 from '../../../../assets/images/Diseno/Espesores/ranurado14.webp'
import ranurado20 from '../../../../assets/images/Diseno/Espesores/ranurado20.webp'
import VisualizadorDesplazador from '../../../../components/VisualizadorDesplazador'
import IndiceSeries from './06_1_IndiceSeries'

const Disenos = ({ id }) => {
    const propsFormato = {
        anotacion: {
            text: 'Cliquez sur le point pour voir les possibilités de mise en forme',
            type: 'click',
        },
        visualizador: {
            config: indicadoresFormato,
            srcfondo: fondo,
            altFondo: 'Image de fond avec indicateurs',
        },
    }

    return (
        <>
            <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>DESIGN</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Diseños 1'
                    caption='DOLCKER &CLIP. Do&Dolm Grafito'
                    columnSpan='6'
                />
                <Cita
                    cita="“La simplicité poussée à l'extrême devient élégance.”"
                    author='John Franklin'
                    colorAutor={COLORS.gray05}
                />
            </StyledDisenos>
            <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01}>
                <Titulo2>Format</Titulo2>
                <Anotacion {...propsFormato.anotacion} />
                <VisualizadorVariaciones {...propsFormato.visualizador} />
            </StyledDisenos>
            <StyledDisenos id={id[3]} backgroundColor={COLORS.gray01}>
                <Titulo2>Finishes</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Cliquez sur le point pour voir toutes les possibilités de pièces spéciales'
                    />
                    <Anotacion
                        type='swipe'
                        text='Balayez avec votre souris ou votre doigt pour apprécier la texture.'
                    />
                </Anotaciones>
                <VisualizadorDesplazador config={configAcabados} />
            </StyledDisenos>
            <StyledDisenos
                id={id[4]}
                backgroundColor={COLORS.gray01}
                isEspesores
            >
                <Titulo2>Épaisseurs</Titulo2>
                <div className='espesor espesor-1'>
                    <img src={ranurado11} alt='' />
                    <ul>
                        <strong>TC 11 / 11 mm.</strong>
                        <li>Plancher</li>
                        <li>Plafond</li>
                        <li>Façade</li>
                    </ul>
                </div>
                <div className='espesor espesor-2'>
                    <img src={ranurado14} alt='' />
                    <ul>
                        <strong>TC 14 / 14 mm.</strong>
                        <li>Plancher</li>
                        <li>Plafond</li>
                        <li>Façade</li>
                        <li>Clôture</li>
                    </ul>
                </div>
                <div className='espesor espesor-3'>
                    <img src={ranurado20} alt='' />
                    <ul>
                        <strong>TC 20 / 20 mm.</strong>
                        <li>Plancher surélevé</li>
                        <li>Façade</li>
                        <li>Clôture</li>
                        <li>Couvertures</li>
                        <li>Gouttière</li>
                        <li>Grille</li>
                        <li>Marche</li>
                    </ul>
                </div>
            </StyledDisenos>
            <StyledDisenos id={id[5]} backgroundColor={COLORS.gray01}>
                <Titulo2>Pièces spéciales</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Cliquez sur le point pour voir toutes les possibilités de pièces spéciales.'
                    />
                    <Anotacion
                        type='swipe'
                        text="Faites glisser votre souris ou votre doigt pour faire pivoter l'image à 360ºFaites glisser votre souris ou votre doigt pour faire pivoter l'image à 360º."
                    />
                </Anotaciones>
                <VisualizadorRotador config={config} />
            </StyledDisenos>
            <IndiceSeries id={id[6]} />
            <Series
                ids={[
                    'basalt',
                    'dolm',
                    'dquartz',
                    'marble',
                    'stone',
                    'quarcity',
                    'crete',
                    'portland',
                    'space',
                    'tzment',
                    'wood',
                    'terrazo',
                    'arquitect',
                    'volumen',
                ]}
            />
        </>
    )
}

export default Disenos

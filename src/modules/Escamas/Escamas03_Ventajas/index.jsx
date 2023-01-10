import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledVentajas from './styles'
import img1 from '../../../assets/images/VentajasStep/catalogo3-1-8.webp'
import Text from '../../../components/Text'
import { COLORS } from '../../../global/GlobalStyles'
import Listado from '../../../components/Listado'

const VentajasStep = ({ id }) => {
    return (
        <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
            <Titulo>Ventajas del sistema Escamas</Titulo>
            <ImageWithCaption
                src={img1}
                alt='Imagen de Ventajas 1'
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                columnSpan='6'
            />
            <Text>
                Lorem ipsum dolor sit amet,{' '}
                <strong>consectetur adipiscing elit.</strong>Morbi eleifend odio
                in lectus lacinia consectetur.
            </Text>
            <Listado>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Morbi eleifend odio in lectus lacinia consectetur.</li>
                <li>
                    Pellentesque justo turpis, interdum ut laoreet et, aliquet
                    nec libero.
                </li>
                <li>Donec sit amet dapibus mauris. </li>
                <li>Proin a urna vel ex dapibus congue nec eget lacus. </li>
                <li>
                    Suspendisse potenti. Nunc lobortis ut lacus et sollicitudin.
                </li>
                <li>Nulla facilisi. In viverra a urna quis tincidunt.</li>
                <li>
                    Praesent vitae elementum tortor, et faucibus augue.(1, 2 y
                    3)
                </li>
                <li>
                    Suspendisse potenti. Nunc lobortis ut lacus et sollicitudin.
                    1{' '}
                </li>
                <li>
                    Nulla facilisi. In viverra a urna quis
                    tincidunt.&quot;praesent vitae&quot;
                </li>
            </Listado>
        </StyledVentajas>
    )
}

export default VentajasStep

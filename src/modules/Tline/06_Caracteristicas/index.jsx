import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import { COLORS } from '../../../global/GlobalStyles'
import StyledCaracteristicas from './styles'
import caracter1 from '../../../assets/images/DolckerStep/catalogo3-1-5.webp'
import caracter2 from '../../../assets/icons/caracteristicas/caracteristicas_02.svg'
import caracter3 from '../../../assets/icons/caracteristicas/caracteristicas_03.svg'
import Text from '../../../components/Text'
import Listado from '../../../components/Listado'

const CaracteristicasTline = ({ id }) => {
    return (
        <>
            <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>Características técnicas</Titulo>
                <ImageWithCaption
                    src={caracter1}
                    alt='Render por parte de 7475'
                    caption='Render por parte de 7475'
                    columnSpan='6'
                />
                <Text>
                    <strong>Textos (Jorge)</strong>
                </Text>
                <Listado>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                </Listado>
                <Text>
                    <strong>Textos (Jorge)</strong>
                </Text>
                <Listado>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                </Listado>
                <Text>
                    <strong>Textos (Jorge)</strong>
                </Text>
                <Listado>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                    <li>texto características</li>
                </Listado>
            </StyledCaracteristicas>
            <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
                <Titulo>Datos técnicos</Titulo>
                <ImageWithCaption
                    src={caracter1}
                    alt='Imágenes técnicas (Jorge)'
                    caption='Imágenes técnicas (Jorge)'
                    columnSpan='6'
                />
                <Text>
                    <strong>Textos (Jorge)</strong>
                </Text>
                <ImageWithCaption
                    src={caracter1}
                    alt='Imágenes técnicas (Jorge)'
                    caption='Imágenes técnicas (Jorge)'
                    columnSpan='6'
                />
            </StyledCaracteristicas>
        </>
    )
}

export default CaracteristicasTline

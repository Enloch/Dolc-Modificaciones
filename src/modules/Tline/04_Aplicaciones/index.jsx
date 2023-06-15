import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo, Titulo2, Titulo3 } from '../../../components/Titulos'
import { COLORS, DISTANCES } from '../../../global/GlobalStyles'
import StyledAplicaciones from './styles'
import img1 from '../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-9.webp'
import img2 from '../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-10.webp'
import img3 from '../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-11.webp'
import img4 from '../../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-12.webp'
import img5 from '../../../assets/images/DolckerTline/arquitecto.webp'
import Cita from '../../../components/Cita'

const AplicacionesTline = ({ id }) => {
    return (
        <>
            <StyledAplicaciones
                id={id[0]}
                backgroundColor={COLORS.gray02}
                rowGap={DISTANCES.long}
            >
                <Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Aplicaciones 1'
                    caption=''
                    columnSpan='6'
                />
                <Cita
                    cita='Donec sit amet dapibus mauris. Quisque sem nulla, tincidunt ac consectetur eu, vehicula a elit. '
                    author='Psalm 3:14'
                    colorCita={COLORS.gray08}
                    colorAutor={COLORS.gray04}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[1]}
                backgroundColor={COLORS.gray01}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen de Aplicaciones 1'
                    caption=''
                    columnSpan='6'
                />
                <Cita
                    cita='Proin a urna vel ex dapibus congue nec eget lacus. Nullam in dolor orci.'
                    author='Durimote 1:23'
                    colorCita={COLORS.gray08}
                    colorAutor={COLORS.gray04}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[2]}
                backgroundColor={COLORS.gray01}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
                <ImageWithCaption
                    src={img3}
                    alt='Imagen de Aplicaciones 1'
                    caption='Jorge dará la referencia o imágen.'
                    columnSpan='6'
                />
                <Cita
                    cita=' Duis fringilla ultrices est et pharetra. Fusce iaculis mollis magna vitae aliquam. Donec eu maximus ex. Suspendisse sem erat, tincidunt non varius non, mattis sed metus. '
                    author='Nunc Lobortis '
                    colorCita={COLORS.gray08}
                    colorAutor={COLORS.gray04}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[3]}
                backgroundColor={COLORS.gray01}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray08}>- Fachadas</Titulo3>
                <ImageWithCaption
                    src={img4}
                    alt='Imagen de Aplicaciones 4'
                    caption='Arquitecto dará referencias.'
                    columnSpan='6'
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[4]}
                backgroundColor={COLORS.gray01}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray08}>— Interior</Titulo3>
                <ImageWithCaption
                    src={img5}
                    alt='Imagen de Aplicaciones 5'
                    caption='Arquitecto dará referencias.'
                    columnSpan='6'
                />
            </StyledAplicaciones>
        </>
    )
}

export default AplicacionesTline

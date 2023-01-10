import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo, Titulo2, Titulo3 } from '../../../components/Titulos'
import { COLORS, DISTANCES } from '../../../global/GlobalStyles'
import StyledAplicaciones from './styles'
import img1 from '../../../assets/images/AplicacionesStep/catalogo3-1-9.webp'
import img2 from '../../../assets/images/AplicacionesStep/catalogo3-1-10.webp'
import img3 from '../../../assets/images/AplicacionesStep/catalogo3-1-11.webp'
import img4 from '../../../assets/images/AplicacionesStep/catalogo3-1-12.webp'
import img5 from '../../../assets/images/AplicacionesStep/catalogo3-1-13.webp'
import Cita from '../../../components/Cita'

const AplicacionesStep = ({ id }) => {
    return (
        <>
            <StyledAplicaciones
                id={id[0]}
                backgroundColor={COLORS.gray08}
                rowGap={DISTANCES.long}
            >
                <Titulo color={COLORS.gray01}>Aplicaciones del sistema Escamas</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Aplicaciones 1'
                    caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    columnSpan='6'
                />
                <Cita
                    big
                    cita='Donec sit amet dapibus mauris. Quisque sem nulla, tincidunt ac consectetur eu, vehicula a elit. '
                    author='Psalm 3:14'
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[1]}
                backgroundColor={COLORS.gray08}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray01}>Rehabilitación</Titulo2>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen de Aplicaciones 1'
                    caption='Vestibulum ut neque urna. '
                    columnSpan='6'
                />
                <Cita
                    cita='Proin a urna vel ex dapibus congue nec eget lacus. Nullam in dolor orci.'
                    author='Durimote 1:23'
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[2]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray01}>Obra nueva</Titulo2>
                <ImageWithCaption
                    src={img3}
                    alt='Imagen de Aplicaciones 1'
                    caption='Praesent vitae elementum tortor, et faucibus augue.'
                    columnSpan='6'
                />
                <Cita
                    cita=' Duis fringilla ultrices est et pharetra. Fusce iaculis mollis magna vitae aliquam. Donec eu maximus ex. Suspendisse sem erat, tincidunt non varius non, mattis sed metus. '
                    author='Nunc Lobortis '
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[3]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray01}>— Fachadas</Titulo3>
                <ImageWithCaption
                    src={img4}
                    alt='Imagen de Aplicaciones 4'
                    caption='Duis fringilla ultrices est et pharetra.'
                    columnSpan='6'
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[4]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray01}>
                    — Terrazas, suelos elevados, techos y soluciones
                </Titulo3>
                <ImageWithCaption
                    src={img5}
                    alt='Imagen de Aplicaciones 5'
                    caption='DOL -TC11. Do&Space Ivory'
                    columnSpan='6'
                />
            </StyledAplicaciones>
        </>
    )
}

export default AplicacionesStep

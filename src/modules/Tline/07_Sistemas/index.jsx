import Text from '../../../components/Text'
import { Titulo, Titulo2 } from '../../../components/Titulos'
import StyledSistemas, { Enlaces } from './styles'
import { COLORS } from '../../../global/GlobalStyles'
import sistemas from '../../../assets/images/Dolckertline/7475.webp'
import dolckerClip1 from '../../../assets/images/Dolckertline/detalles.jpg'
import dolckerClip2 from '../../../assets/images/Dolckertline/detalles.jpg'

import tc111 from '../../../assets/images/Dolckertline/detalles.jpg'
import tc112 from '../../../assets/images/Dolckertline/detalles.jpg'

import tc141 from '../../../assets/images/Dolckertline/detalles.jpg'
import tc142 from '../../../assets/images/Dolckertline/detalles.jpg'

import hc201 from '../../../assets/images/Dolckertline/detalles.jpg'
import hc202 from '../../../assets/images/Dolckertline/detalles.jpg'
import ImageWithCaption from '../../../components/ImageWithCaption'

const SistemasTline = ({ id }) => {
    return (
        <>
            <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>Sistema constructivos</Titulo>
                <ImageWithCaption
                    src={sistemas}
                    alt='Sistemas introducción'
                    caption='Render creado por 7475'
                    columnSpan='5'
                />
                <Enlaces>
                    <li>
                        <a href={'#' + id[1]}>
                            Sistema
                            <br />
                            <strong>LINE .L</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[2]}>
                            Sistema
                            <br />
                            <strong>LINE .M</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[3]}>
                            Sistema
                            <br />
                            <strong>LINE .S</strong>
                        </a>
                    </li>
                </Enlaces>
            </StyledSistemas>

            <StyledSistemas id={id[1]}>
                <Titulo2>LINE .L</Titulo2>
                <Text>
                    El sistema DOLCKER LINE para fachadas de cerámica tipo
                    dolcker es un sistema con perfilería de alta inercia y doble
                    seguridad. Todos y cada uno de los elementos que componen
                    este sistema están fabricados con materias primas de máxima
                    calidad. Se trata de un sistema de fijación mecánica de clip
                    + fijación química para la colocación de una cenefa de
                    aluminio clipada al sistema , mediante una subestructura que
                    está compuesta por ménsulas regulables de aluminio de alta
                    calidad en forma de “L” de 3 mm de espesor, que transmiten
                    esfuerzos y que van fijadas mediante anclaje a la estructura
                    base del edificio (pared de ladrillo o forjado de
                    hormigón).Sobre estas ménsulas se fijan mediante tornillos
                    autotaladrantes de acero inoxidable los perfiles verticales
                    de aluminio extruidos en forma de“T”de 3 mm de espesor.
                    <br />
                    <br />
                    En estos perfiles en forma de “T” se atornillan unos
                    perfiles horizontales en forma de “G”, permitiendo así que
                    la pieza esté apoyada en su totalidad. Se trata del sistema
                    idóneo para la colocación de cerámicas, permitiendo
                    sustituir las piezas ya que dispone de un clip corredera de
                    acero inoxidable logrando infinidad de colocaciones. Además
                    permite lacar el perfil cenefa en función del color de su
                    carpintería, permitiendo que el cliente elija el color de la
                    misma . Se colocan al menos dos clips correderas en la parte
                    superior de la pieza de arranque a 1/5 de distancia respecto
                    a la longitud de la pieza. En el resto de piezas
                    intermedias, se procederá a la colocación de al menos 4
                    clips por cada pieza de cerámica. Se le añadirá puntos de
                    masilla poliuretano de pegado y sellado sika-111 o similar
                    (4 por pieza) que nos permita absorber las dilataciones de
                    la fachada en los clips correderas. Una vez situados todos
                    los clip se procede a la colocación de la cenefa decoratica
                    clipandose en los clips ya colocados.Este sistema dispone de
                    un perfil de seguridad para formatos de dimensiones
                    superiores a 100 cms para su colocacion con fijacion química
                    , que permiten mejorar subciones de viento.
                    <br />
                    <br />
                    Se trata sin duda de un sistema con múltiples opciones de
                    composición de fachada ya que es posible romper las juntas
                    verticales. Éstas juntas verticales se ven minimizadas a tan
                    solo 1 mm potenciando de esta manera las juntas
                    horizontales.
                </Text>
                <ImageWithCaption
                    src={dolckerClip1}
                    alt='Dolcker-clip demostración'
                    caption='Imágen demostración (Jorge)'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={dolckerClip2}
                    alt='Dolcker-clip tabla'
                    caption='Imágen tabla (Jorge)'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[2]}>
                <Titulo2>LINE .M</Titulo2>
                <Text>
                    <strong>Textos (Jorge)</strong>
                    <br />
                    <br />
                    Nam cursus ultricies diam ac tristique. Suspendisse maximus
                    augue a neque vehicula, non hendrerit libero ultrices. Fusce
                    non dapibus augue. Maecenas varius, orci non luctus aliquet,
                    mauris felis dapibus lorem, nec mattis quam nibh sed leo.
                    Sed molestie felis in ornare molestie. Morbi consectetur vel
                    quam ac commodo. Sed augue purus, rutrum et erat eu,
                    volutpat feugiat nisl.
                </Text>
                <ImageWithCaption
                    src={tc111}
                    alt='DOL-TC11 demostración'
                    caption='Imágen demostración (Jorge)'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc112}
                    alt='DOL-TC11 tabla'
                    caption='Imágen tabla (Jorge)'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[3]}>
                <Titulo2>LINE .S</Titulo2>
                <Text>
                    <strong>Textos (Jorge)</strong>
                    <br />
                    <br />
                    Nam cursus ultricies diam ac tristique. Suspendisse maximus
                    augue a neque vehicula, non hendrerit libero ultrices. Fusce
                    non dapibus augue. Maecenas varius, orci non luctus aliquet,
                    mauris felis dapibus lorem, nec mattis quam nibh sed leo.
                    Sed molestie felis in ornare molestie. Morbi consectetur vel
                    quam ac commodo. Sed augue purus, rutrum et erat eu,
                    volutpat feugiat nisl.
                </Text>
                <ImageWithCaption
                    src={tc141}
                    alt='DOL-TC14 demostración'
                    caption='Imágen demostración (Jorge)'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc142}
                    alt='DOL-TC14 tabla'
                    caption='Imágen tabla (Jorge)'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[4]}>
                <Titulo2>Sistema 4</Titulo2>
                <Text>
                    <strong>Textos (Jorge)</strong>
                    <br />
                    <br />
                    Nam cursus ultricies diam ac tristique. Suspendisse maximus
                    augue a neque vehicula, non hendrerit libero ultrices. Fusce
                    non dapibus augue. Maecenas varius, orci non luctus aliquet,
                    mauris felis dapibus lorem, nec mattis quam nibh sed leo.
                    Sed molestie felis in ornare molestie. Morbi consectetur vel
                    quam ac commodo. Sed augue purus, rutrum et erat eu,
                    volutpat feugiat nisl.
                </Text>
                <ImageWithCaption
                    src={hc201}
                    alt='DOL-HC20 demostración'
                    caption='Imágen demostración (Jorge)'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={hc202}
                    alt='DOL-HC20 tabla'
                    caption='Imágen tabla (Jorge)'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>
        </>
    )
}

export default SistemasTline

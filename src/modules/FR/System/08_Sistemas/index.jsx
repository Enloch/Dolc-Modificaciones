import Text from '../../../../components/Text'
import { Titulo, Titulo2 } from '../../../../components/Titulos'
import StyledSistemas, { Enlaces } from './styles'
import { COLORS } from '../../../../global/GlobalStyles'
import sistemas from "../../../../assets/images/Sistemas/sistemas.jpg";

import dolckerClip1 from '../../../../assets/images/Sistemas/sistema-dolcker-clip.webp'
import dolckerClip2 from '../../../../assets/icons/Sistemas/EN/dolcker-clip.svg'

import tc111 from '../../../../assets/images/Sistemas/sistema-dolcker-tc11.webp'
import tc112 from '../../../../assets/icons/Sistemas/EN/dol-tc11.svg'

import tc141 from '../../../../assets/images/Sistemas/sistema-dolcker-tc14.webp'
import tc142 from '../../../../assets/icons/Sistemas/EN/dol-tc14.svg'

import hc201 from '../../../../assets/images/Sistemas/sistema-dolcker-hc20.webp'
import hc202 from '../../../../assets/icons/Sistemas/EN/dol-hc20.svg'
import ImageWithCaption from '../../../../components/ImageWithCaption'

const Sistemas = ({ id }) => {
    return (
        <>
            <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>SYSTÈME CONSTRUCTIF</Titulo>
                <ImageWithCaption
                    src={sistemas}
                    alt='Sistemas introducción'
                    columnSpan='5'
                />
                <Enlaces>
                    <li>
                        <a href={'#' + id[1]}>
                            Système
                            <br />
                            <strong>Dolcker & Clip</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[2]}>
                            Système
                            <br />
                            <strong>DOL - TC11</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[3]}>
                            Système
                            <br />
                            <strong>DOL - TC14</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[4]}>
                            Système
                            <br />
                            <strong>DOL - HC20</strong>
                        </a>
                    </li>
                </Enlaces>
            </StyledSistemas>

            <StyledSistemas id={id[1]}>
                <Titulo2>Dolcker & Clip</Titulo2>
                <Text>
                    Le système DOLCKER & CLIP pour les façades en céramique de
                    type dolcker est un système avec des profils à haute inertie
                    et une double sécurité. Chacun des éléments qui composent ce
                    système sont fabriqués avec des matières premières de la
                    plus haute qualité.
                    <br />
                    <br />
                    C'est un système de fixation mécanique par clip + fixation
                    chimique par au moyen d'une sous-structure constituée
                    d'éléments réglables supports en aluminium de haute qualité
                    en forme de "L", 3 mm d'épaisseur, qui transmettent les
                    efforts et sont fixés par moyen d'ancrage à la structure de
                    base du bâtiment (mur de brique ou dalle de béton). Sur ces
                    supports, les 3 mm des profilés en aluminium extrudés
                    verticaux épais en forme de "T" sont fixé au moyen de vis
                    autoperceuses en acier inoxydable.
                    <br />
                    <br />
                    Des profils horizontaux en forme de "G" sont vissés dans ces
                    Profils en forme de "T", permettant ainsi de soutenir la
                    pièce dans son intégralité. C'est le système idéal pour
                    placer céramique, permettant le remplacement des pièces car
                    il a un clip coulissant en acier inoxydable, réalisant un
                    nombre infini de placements. Il permet également au profil
                    horizontal d'être laqué selon la couleur de sa menuiserie,
                    permettant au client de choisir la couleur du joint. Au
                    moins deux des clips coulissants sont placés sur le dessus
                    de la pièce de départ à 1/5 de la longueur de la pièce. Dans
                    le reste de l'intermédiaire pièces, au moins 4 clips seront
                    placés pour chaque pièce de céramique. Points de collage et
                    d'étanchéité polyuréthane sika-111 mastic ou similaire (4
                    par pièce) sera ajouté pour nous permettre de absorber la
                    dilatation de la façade dans les clips coulissants.
                    <br />
                    <br />
                    Il s'agit, sans aucun doute, d'un système offrant de
                    multiples possibilités de composition de la façade,
                    puisqu'il est possible de rompre avec la structure de la
                    façade. de composition de façade puisqu'il est possible de
                    rompre les les joints verticaux. Ces joints verticaux sont
                    réduits à seulement 1 mm, ce qui permet de renforcer les
                    joints horizontaux. Le rendement de la de la céramique se
                    situe entre 43 et 47 mm, en fonction de l'épaisseur de la
                    céramique choisie. de la céramique choisie.
                </Text>
                <ImageWithCaption
                    src={dolckerClip1}
                    alt='Dolcker-clip demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={dolckerClip2}
                    alt='Dolcker-clip tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[2]}>
                <Titulo2>DOL - TC11</Titulo2>
                <Text>
                    Le système DOL-TC11 pour les façades en céramique avec des
                    clips cachés est un système sûr, facile et simple à
                    installer. Chacun des éléments tous les éléments qui
                    composent ce système sont fabriqués avec des matières
                    premières de la plus haute qualité.
                    <br />
                    <br />
                    Il s'agit d'une fixation mécanique cachée à travers une
                    sous-structure composée d'équerres réglables en aluminium de
                    haute qualité, d'une épaisseur de 3 mm, avec une fonction de
                    séparation. en aluminium de haute qualité, d'une épaisseur
                    de 3 mm, avec une fonction de séparation, qui transmettent
                    également les forces et sont fixés à la structure de base de
                    l'édifice. transmettent également les forces et sont fixés à
                    la structure de base du bâtiment (mur en briques ou sol en
                    béton)
                </Text>
                <ImageWithCaption
                    src={tc111}
                    alt='DOL-TC11 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc112}
                    alt='DOL-TC11 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[3]}>
                <Titulo2>DOL - TC14</Titulo2>
                <Text>
                    Le système DOL-TC14 pour les façades en céramique avec des
                    clips cachés est un système sûr, facile et simple à
                    installer. Chacun des éléments tous les éléments qui
                    composent ce système sont fabriqués avec des matières
                    premières de la plus haute qualité.
                    <br />
                    <br />
                    Il s'agit d'une fixation mécanique cachée à travers une
                    sous-structure composée d'équerres réglables en aluminium de
                    haute qualité, d'une épaisseur de 3 mm, avec une fonction de
                    séparation. en aluminium de haute qualité, d'une épaisseur
                    de 3 mm, avec une fonction de séparation, qui transmettent
                    également les forces et sont fixés à la structure de base de
                    l'édifice. transmettent également les forces et sont fixés à
                    la structure de base du bâtiment (mur en briques ou sol en
                    béton)
                </Text>
                <ImageWithCaption
                    src={tc141}
                    alt='DOL-TC14 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc142}
                    alt='DOL-TC14 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[4]}>
                <Titulo2>DOL - HC20</Titulo2>
                <Text>
                    Le système DOL-HC20 pour les façades en céramique ou en
                    pierre de 20 mm avec Le système DOL-HC20 pour façades en
                    céramique ou en pierre de 20 mm avec clip caché est un
                    système sûr, facile et simple à installer. Tous les éléments
                    qui composent ce système sont fabriqués avec des matières
                    premières de la plus haute qualité. sont fabriqués avec des
                    matières premières de la plus haute qualité.
                    <br />
                    <br />
                    Il s'agit d'une fixation mécanique cachée à travers une
                    sous-structure composée d'équerres réglables en aluminium de
                    haute qualité de 3 mm d'épaisseur avec une fonction
                    d'espacement, qui transmettent également les forces et sont
                    fixées à la structure de base du bâtiment. forces et sont
                    fixés à la structure de base du bâtiment (mur en briques ou
                    sol en béton). (mur en briques ou sol en béton)
                </Text>
                <ImageWithCaption
                    src={hc201}
                    alt='DOL-HC20 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={hc202}
                    alt='DOL-HC20 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>
        </>
    )
}

export default Sistemas

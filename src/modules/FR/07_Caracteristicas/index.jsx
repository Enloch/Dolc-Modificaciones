/* eslint-disable react/no-unescaped-entities */
import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import { COLORS } from '../../../global/GlobalStyles'
import StyledCaracteristicas from './styles'
import caracter1 from '../../../assets/images/Caracteristicas/caracteristicas_01.webp'
import caracter2 from '../../../assets/icons/caracteristicas/caracteristicas_02.svg'
import caracter3 from '../../../assets/icons/caracteristicas/caracteristicas_03.svg'
import Text from '../../../components/Text'
import Listado from '../../../components/Listado'

const Caracteristicas = ({ id }) => {
    return (
        <>
            <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>CARACTÉRISTIQUES TECHNIQUES</Titulo>
                <ImageWithCaption
                    src={caracter1}
                    alt='características técnicas imagen'
                    columnSpan='6'
                />
                <Text>
                    DOLCKER est un matériau compact et résistant caractérisé par
                    une porosité quasi inexistante et par moins de 0,1% d'eau
                    absorption.
                    <br />
                    <br />
                    Sa structure vitrifiée, à faible degré de porosité, garantit
                    une haute imperméabilité à la saleté et à la glace.
                    <br />
                    <br />
                    full&body corp
                    <br />
                    <br />
                    Les avantages d'un matériau unique.
                </Text>
                <Listado>
                    <li>
                        <strong>
                            Large gamme de couleurs, formats, épaisseurs et
                            finitions.
                        </strong>
                    </li>
                    <li>
                        <strong>C'est antiacide.</strong>Il est insensible à les
                        acides les plus répandus (il ne résiste pas à l'attaque
                        d'acide fluorhydrique).
                    </li>
                    <li>
                        <strong>Il est résistant.</strong> Résistant à
                        l'abrasion et porter plus que n'importe quel matériau
                        naturel.
                    </li>
                    <li>
                        <strong>Incombustible.</strong> Le matériau ne brûle pas
                        ou ne produit pas de gaz ou de fumées nocifs en cas
                        d'incendie ou d'exposition aux flammes. en cas
                        d'incendie ou d'exposition aux flammes.
                    </li>
                    <li>
                        <strong>
                            Il ne retient pas les substances organiques et les
                            bactéries, qui sont la cause d'allergies et de
                            troubles.
                        </strong>
                    </li>
                    <li>
                        <strong>Facile à travailler.</strong> Le produit se
                        prête se prête à être travaillé (coupé, percé, etc.)
                        comme la pierre comme la pierre naturelle pour répondre
                        à tout type de personnalisation.
                    </li>
                    <li>
                        <strong>Il est inattaquable.</strong> No problem with
                        with hot pots or lit cigarettes, which can otherwise
                        damage wood damage wood, plastic or resin-bonded
                        laminates. plastic or resin-bonded laminates.
                    </li>
                    <li>
                        <strong>Facile à nettoyer.</strong>Il est possible Il
                        est possible d'utiliser des détergents ou des solvants
                        très puissants sans risquer d'endommager le matériel.
                        risque d'endommager le matériau.
                    </li>
                    <li>
                        <strong>Résistant au gel.</strong> Le matériau est
                        résistant au froid et à la glace.
                    </li>
                    <li>
                        <strong>Stabilité chromatique.</strong> Les couleurs
                        sont complètement stables et ne sont pas altérées par
                        l'exposition au soleil au soleil, aux agents
                        atmosphériques ou au smog.
                    </li>
                </Listado>
                <Text>
                    <strong>ECOLOGIQUE</strong>
                    <br />
                    <br />
                    Il ne contient pas d'imperméabilisants chimiques, de vernis
                    ou de résines. résines, il n'émet pas d'exhalaisons même à
                    la chaleur d'une d'une flamme. Contrairement à certaines
                    pierres naturelles, elle n'émet pas de Radon ou d'autres gaz
                    radioactifs et n'est pas polie. Radon ou d'autres gaz
                    radioactifs et n'est pas polie au plomb. avec du plomb. Elle
                    est produite dans le respect de l'environnement.
                    <br />
                    <br />
                    <strong>
                        LA RÉSISTANCE AUX CHANGEMENTS BRUSQUES DE TEMPÉRATURE
                    </strong>
                    <br />
                    <br />
                    <strong>
                        RÉSISTANCE À LA FLEXION SOUS CHARGES FIXE ET STATIQUE
                    </strong>
                    <br />
                    <br />
                    <strong>
                        RÉSISTANCE AUX CHOCS, RÉSISTANCE À L'ABRASION SÉCURITÉ
                    </strong>
                </Text>
                <Listado>
                    <li>Extension d'humidité négligeable</li>
                    <li>Ignifuge</li>
                    <li>Ignifuge</li>
                    <li>Absence de danger en cas d'incendie</li>
                    <li>Sécurité électrique</li>
                </Listado>
                <Text>
                    <strong>SANTÉ ET BIEN-ÊTRE</strong>
                </Text>
                <Listado>
                    <li>Absence d'odeur propre ou acquise</li>
                    <li>Résistance à la libération de sa propre poussière</li>
                    <li>Poussière acquise facile à nettoyer</li>
                    <li>Nettoyage et entretien faciles</li>
                    <li>
                        C'est un produit qui, en raison de sa capacité isolante
                        électrique, empêche l'accumulation de poussière
                        environnementale électriquement actif
                    </li>
                    <li>Convient là où la consommation d'eau est abondante</li>
                    <li>
                        C'est l'installation définitive : vous n'avez besoin
                        d'aucune entretien après mise en service
                    </li>
                </Listado>
            </StyledCaracteristicas>
            <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
                <Titulo>DONNÉES TECHNIQUES</Titulo>
                <ImageWithCaption
                    src={caracter2}
                    alt='características dimensionales y mecanicas'
                    columnSpan='6'
                />
                <Text>
                    <strong>CARACTERISTIQUES PHYSIQUES ET MECANIQUES</strong>
                    <br />
                    <br />
                    Les pièces en céramique sont classées comme carreaux de
                    céramique pressés à sec à faible absorption d'eau selon la
                    norme UNE-EN 14411 standard, avec les caractéristiques
                    suivantes déclarées par le fabricant:
                </Text>
                <ImageWithCaption
                    src={caracter3}
                    alt='características higiencias y normas complementarias'
                    columnSpan='6'
                />
            </StyledCaracteristicas>
        </>
    )
}

export default Caracteristicas

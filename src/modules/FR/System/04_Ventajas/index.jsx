import ImageWithCaption from '../../../../components/ImageWithCaption'
import { Titulo } from '../../../../components/Titulos'
import StyledVentajas from './styles'
import img1 from '../../../../assets/images/Ventajas/catalogo3-1-8.webp'
import Text from '../../../../components/Text'
import { COLORS } from '../../../../global/GlobalStyles'
import Listado from '../../../../components/Listado'

const Ventajas = ({ id }) => {
    return (
        <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
            <Titulo>AVANTAGES DU DOLCKER SYSTEM</Titulo>
            <ImageWithCaption
                src={img1}
                alt='Avantage Image 1'
                caption='DOLCKER &CLIP. Do &Conce Gris+Do&Arquitect'
                columnSpan='6'
            />
            <Text>
                Il est doté d'une technique améliorée{' '}
                <strong>
                    développement de la fixation pour les façades ventilées,
                </strong>{' '}
                pour s'adapter aux besoins esthétiques et fonctionnels du
                projet.
            </Text>
            <Listado>
                <li>
                    Système de fixation mécanique caché + fixation élastique
                </li>
                <li>Système amovible</li>
                <li>
                    Clip coulissant (sécurité pour les pièces d'échafaudage)
                </li>
                <li>
                    Profil continu à forte inertie pour supporter des charges
                    élevées
                </li>
                <li>Rainure continue étalonnée en usine</li>
                <li>Système autoportant</li>
                <li>Multitude de tailles de pièces</li>
                <li>Découpage à mi-hauteur</li>
                <li>Différentes épaisseurs de pièces(11, 14 and 20 mm)</li>
                <li>Système développé pour les caméras jusqu'à 20 cm</li>
                <li>Pièces avec bord exposé &quot;full body &quot;</li>
                <li>
                    Fabrication de pièces texturées mates, flammées et adoucies
                </li>
                <li>Assemblage rapide et sûr</li>
                <li>Système polyvalent pour la conception de façades</li>
            </Listado>
        </StyledVentajas>
    )
}

export default Ventajas

import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Fusion/Ventajas/IMG_7220.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Avantages du système Dolcker Fusion</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Image of Advantages 1"
        caption="DOLCKER Fusion Terracotta"
        columnSpan="6"
      />
      <Text>
        DOLCKER FUSION a développé un système modulaire innovant qui permet une personnalisation complète de la façade en combinant :
        <br />
        <br />
        <strong>1. </strong>
        Trois épaisseurs de plaques : 11, 14 et 20 mm.
        <br />
        <strong>2. </strong>
        Trois textures par modèle, entièrement combinables entre elles
        <br />
        <strong>3. </strong>
        Modulation de pourcentage prédéfinie selon les spécifications du concepteur
        <br />
        <br />
        Grâce à notre système de classification exclusif, les commandes sont livrées organisées selon les pourcentages de couleur et de texture définis, de sorte que l'installateur n'a pas besoin d'effectuer une classification préalable sur site.
        <br />
        <br />
        Le système DOLCKER FUSION intègre un développement technique de fixation pour les façades ventilées, conçu pour répondre aux exigences esthétiques et fonctionnelles des projets.
      </Text>
      <Listado>
        <li>Système de fixation mécanique caché + fixation élastique</li>
        <li>Système démontable</li>
        <li>
          Clips coulissants (sécurité pour les pièces de brasage des échafaudages)
        </li>
        <li>Profil continu à haute inertie pour supporter des charges lourdes</li>
        <li>Fente continue calibrée en usine</li>
        <li>Système de placement libre</li>
        <li>Tailles de pièces multiples</li>
        <li>Coupe sur mesure</li>
        <li>Épaisseurs de pièces différentes (11, 14 et 20 mm)</li>
        <li>Système développé pour des chambres jusqu'à 20 cm</li>
        <li>Pièces avec bord visible "full body"</li>
        <li>Fabrication de pièces avec des textures mates, flammées et polies</li>
        <li>Assemblage rapide et sécurisé</li>
        <li>Système versatile pour la conception de façades</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

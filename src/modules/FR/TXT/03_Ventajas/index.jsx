import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledVentajas from "./styles";
import img1 from "@assets/images/DolckerTXT/Ventajas/catalogo3-1-8.jpg";
import Text from "@components/Text";
import { COLORS } from "@global/GlobalStyles";
import Listado from "@components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Avantages du système Dolcker TXT</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Imagen de Ventajas 1"
        caption=""
        columnSpan="6"
      />
      <Text>
        Design, innovation et fonctionnalité en un seul système pour façades
        ventilées.
      </Text>
      <Listado>
        <li>
          <strong>Fixation technique améliorée :</strong> Adaptable aux
          besoins esthétiques et fonctionnels de chaque projet.
        </li>
        <li>
          <strong>Système de fixation mécanique :</strong> Option de fixation
          cachée ou apparente combinée avec fixation élastique.
        </li>
        <li>
          Profils conçus pour un <strong>système de pose libre</strong>, offrant une flexibilité
          totale dans la conception.
        </li>
        <li>
          <strong>Versatilité dimensionnelle :</strong> Pièces en plusieurs
          tailles, épaisseurs de 6, 9, 11 et 14 mm, et découpe sur mesure.
        </li>
        <li>
          Chambres jusqu'à 20 cm, optimisant l'<strong>efficacité thermique et acoustique.</strong>
        </li>
        <li>
          <strong>Finitions premium :</strong> Pièces avec chant caché laqué et
          textures mate, flamed et honed.
        </li>
        <li>
          <strong>Montage rapide et sûr</strong>, optimisant les temps de
          installation.
        </li>
        <li>
          <strong>Créativité sans limites :</strong> Système avec multiples formes
          de pose, permettant des designs innovants avec des volumes et des panneaux
          uniques.
        </li>
        <li>
          <strong>Profilés personnalisables :</strong> Laqués en couleurs RAL,
          imitations bois et options anodisées.
        </li>
        <li>
          <strong>Options de fixation :</strong> Pose avec agrafe apparente ou
          agrafe cachée, selon le style du projet.
        </li>
      </Listado>
      <Text>
        Plus qu'un revêtement, une solution qui transforme l'architecture.
      </Text>
    </StyledVentajas>
  );
};

export default VentajasTline;

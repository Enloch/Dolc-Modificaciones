import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/Scala/Ventajas/Volum17.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";
const VentajasTline = ({ id }) => {
  return (
    <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
      <Titulo>Avantages du système Dolcker Scala</Titulo>
      <ImageWithCaption
        src={img1}
        alt="Image d'Avantages 1"
        caption="DOLCKER &CLIP"
        columnSpan="6"
      />
      <Text>
        DOLCKER a développé trois épaisseurs de plaque, 11, 14, 20 mm
        combinables dans son système de pose de haute sécurité,
        facilitant aux techniciens la création de bâtiments singuliers et
        personnalisés.
        <br />
        <br />
        Il dispose d'un développement technique de{" "}
        <strong>fixation pour façades ventilées amélioré,</strong> pour
        s'adapter aux besoins tant esthétiques que fonctionnels du
        projet.
      </Text>
      <Listado>
        <li>Système de fixation mécanique cachée + fixation élastique</li>
        <li>Système démontable</li>
        <li>
          Clips coulissants (sécurité pour pièces d'étrésillage d'échafaudages)
        </li>
        <li>Profil continu d'inertie importante pour support de grandes charges</li>
        <li>Rainure continue calibrée en usine</li>
        <li>Système de pose libre</li>
        <li>Multitude de tailles de pièces</li>
        <li>Découpe sur mesure</li>
        <li>Différentes épaisseurs de pièces (11, 14 et 20 mm)</li>
        <li>Système développé pour chambres jusqu'à 20 cm</li>
        <li>Pièces avec chant apparent &quot;full body&quot;</li>
        <li>Fabrication de pièces avec textures mate, flamed et honed</li>
        <li>Montage rapide et sûr</li>
        <li>Système versatile pour concevoir la façade</li>
      </Listado>
    </StyledVentajas>
  );
};

export default VentajasTline;

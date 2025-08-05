import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import config from "../../../../configs/configDolckerTline";

import Imagen1 from "../../../../assets/images/Invisifix/Dolcker/IMG_0727.jpg";
import Imagen2 from "../../../../assets/images/Invisifix/Dolcker/IMG_7842.jpg";

const DolckerTline = ({ id }) => {
  const propsVisualizador = {
    text: "Passez la souris sur les points pour voir les informations",
    type: "normal",
    indicadores: config,
    imgBackground: Imagen2,
    alt: "Image d'arrière-plan avec indicateurs",
  };

  return (
    <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
      <Titulo>Le système Invisifix résout</Titulo>
      <div className="dolcker-info">
        <ImageWithCaption
          src={Imagen1}
          alt="Image Dolcker 2"
          caption="Système Invisifix"
        />

        <div className="text-content">
          La nouvelle génération de clips invisibles Dolcker
          <br />
          <br />
          Invisifix est l'évolution naturelle du système Dolcker T20, un clip avec un design optimisé qui remplace l'ancrage original par une solution plus robuste, précise et discrète, tout en conservant la philosophie de visibilité minimale et d'intégration esthétique maximale.
          <br />
          <br />
          Conçu pour les projets où le détail constructif est clé - tels que les plafonds, les balcons intérieurs ou les zones avec des angles de vue rapprochés - Invisifix pousse la discrétion visuelle au niveau maximum sans compromettre la sécurité structurelle.
          <br />
          <br />
          Principales caractéristiques d'Invisifix :
          <ul>
            <li>
              Composition améliorée et performance mécanique supérieure : acier haute résistance pour un clip plus sûr et plus durable.
            </li>
            <li>
              Patte visible réduite et biseautée, conçue pour passer inaperçue même dans des conditions d'observation rapprochée.
            </li>
            <li>
              Fixation encastrée, qui éloigne le point d'ancrage du bord visible de la plaque, réduisant ainsi son impact visuel.
            </li>
            <li>
              Revêtement QUALICOAT partiel dans la zone visible, disponible dans n'importe quel RAL, avec un fond noir pour une intégration esthétique avec le joint.
            </li>
            <li>
              Compatible avec des pièces céramiques de différentes épaisseurs, entièrement intégré au système Dolcker T20.
            </li>
          </ul>
          <br />
          Invisifix est une solution discrète, précise et adaptable, idéale pour les architectures à haute valeur ajoutée, où l'intégration entre technique et design est essentielle.
        </div>
      </div>
      <ImageWithCaption columnSpan="6" src={Imagen2} alt="Image Dolcker 2" />
    </StyledDolcker>
  );
};

export default DolckerTline;

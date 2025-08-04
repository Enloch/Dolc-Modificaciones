import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/DolckerMatrix/temporal.webp";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const SistemasTline = ({ id }) => {
  return (
    <>
      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Systèmes constructifs</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt='Introduction aux systèmes'
          caption=''
          columnSpan='5'
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              Système
              <br />
              <strong>MATRIX</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>MATRIX</Titulo2>
        <Text>
          Le système DOLCKER MATRIX pour les façades en céramique de type dolcker est un
          système avec profilés d'inertie élevée et double sécurité. Tous les éléments
          composant ce système sont fabriqués avec des matières premières de qualité
          supérieure. Il s'agit d'un système de fixation mécanique par clip + fixation
          chimique pour la pose d'une frise en aluminium clipée au système, au moyen
          d'une sous-structure composée de consoles réglables en aluminium de haute
          qualité en forme de "L" de 3 mm d'épaisseur, qui transmettent les efforts
          et qui sont fixées par ancrage à la structure de base du bâtiment (mur en
          brique ou plancher en béton). Sur ces consoles sont fixés au moyen de vis
          autoréseautantes en acier inoxydable les profils verticaux en aluminium
          extrudés en forme de "T" de 3 mm d'épaisseur.
          <br />
          <br />
          Sur ces profils en forme de "T" sont vissés des profils horizontaux en
          forme de "G", permettant ainsi à la pièce d'être supportée dans son
          intégralité. Il s'agit du système idéal pour la pose de céramiques,
          permettant de remplacer les pièces puisqu'il dispose d'un clip coulissant
          en acier inoxydable permettant une infinité de poses. De plus, il permet
          de laquer le profil de frise en fonction de la couleur de la menuiserie,
          permettant au client de choisir la couleur de celle-ci. Au moins deux
          clips coulissants sont placés sur la partie supérieure de la pièce de
          départ à 1/5 de distance par rapport à la longueur de la pièce. Pour le
          reste des pièces intermédiaires, on procède à la pose d'au moins 4 clips
          par pièce de céramique. On ajoutera des points de mastic polyuréthane
          d'adhésion et d'étanchéité sika-111 ou similaire (4 par pièce) qui nous
          permettent d'absorber les dilatations de la façade dans les clips
          coulissants. Une fois tous les clips positionnés, on procède à la pose
          de la frise décorative en la clipant sur les clips déjà posés. Ce
          système dispose d'un profil de sécurité pour les formats de dimensions
          supérieures à 100 cm pour leur pose avec fixation chimique, qui
          permettent d'améliorer les résistances au vent.
          <br />
          <br />
          Il s'agit sans aucun doute d'un système avec de multiples options de
          composition de façade puisqu'il est possible de rompre les joints
          verticaux. Ces joints verticaux sont réduits à seulement 1 mm, mettant
          ainsi en valeur les joints horizontaux.
        </Text>
        {/* <ImageWithCaption
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
        /> */}
      </StyledSistemas>
    </>
  );
};

export default SistemasTline;

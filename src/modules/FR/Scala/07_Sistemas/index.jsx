import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/Scala/Sistemas/Volum94.jpg";

import dolckerClip1 from "../../../../assets/images/Sistemas/sistema-dolcker-clip.webp";
import dolckerClip2 from "../../../../assets/icons/Sistemas/dolcker-clip.svg";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const Sistemas = ({ id }) => {
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Systèmes constructifs</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Introduction aux systèmes"
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							Système
							<br />
							<strong>Dolcker & Clip</strong>
						</a>
					</li>
					{/* <li>
            <a href={"#" + id[2]}>
              Sistema
              <br />
              <strong>DOL - TC11</strong>
            </a>
          </li> */}
					{/* <li>
            <a href={"#" + id[3]}>
              Sistema
              <br />
              <strong>DOL - TC14</strong>
            </a>
          </li> */}
					{/* <li>
            <a href={"#" + id[4]}>
              Sistema
              <br />
              <strong>DOL - HC20</strong>
            </a>
          </li> */}
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>Dolcker & Clip</Titulo2>
				<Text>
					Le système DOLCKER & CLIP pour les façades en céramique de type
					dolcker est un système avec profilés d'inertie élevée et double
					sécurité. Tous et chacun des éléments qui composent ce système sont
					fabriqués avec des matières premières de qualité maximale.
					<br />
					<br />
					Il s'agit d'un système de fixation mécanique par clip + fixation
					chimique au moyen d'une sous-structure composée de consoles réglables
					en aluminium de haute qualité en forme de « L » de 3 mm d'épaisseur,
					qui transmettent des efforts et qui sont fixées par ancrage à la
					structure de base du bâtiment (mur en brique ou dalle en béton). Sur
					ces consoles sont fixés au moyen de vis autoréseautantes en acier
					inoxydable les profils verticaux en aluminium extrudés en forme de « T
					» de 3 mm d'épaisseur.
					<br />
					<br />
					Sur ces profils en forme de « T » sont vissés des profils horizontaux
					en forme de « G », permettant ainsi que la pièce soit supportée dans
					sa totalité. Il s'agit du système idéal pour la pose de céramiques,
					permettant de remplacer les pièces puisque dispose d'un clip
					coulissant en acier inoxydable obtenant une infinité de poses. De
					plus, il permet de laquer le profil horizontal en fonction de la
					couleur de sa menuiserie, permettant au client de choisir la couleur
					de du joint. On place au moins deux clips coulissants sur la partie
					supérieure de la pièce de départ à 1/5 de distance par rapport à la
					longueur de la pièce. Pour le reste des pièces intermédiaires, on
					procédera à la pose d'au moins 4 clips par pièce de céramique. On
					ajoutera des points de mastic polyuréthane de collage et d'étanchéité
					sika-111 ou similaire (4 par pièce) qui nous permettent d'absorber les
					dilatations de la façade sur les clips coulissants.
					<br />
					<br />
					Il s'agit sans aucun doute d'un système avec de multiples options de
					composition de façade puisqu'il est possible de rompre les joints
					verticaux. Ces joints verticaux sont réduits à seulement 1 mm en
					favorisant ainsi les joints horizontaux. La sortie de la céramique est
					entre 43-47 mm selon l'épaisseur de la céramique choisie.
				</Text>
				<ImageWithCaption
					src={dolckerClip1}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={dolckerClip2}
					alt="Tableau Dolcker-clip"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>

			{/* <StyledSistemas id={id[2]}>
        <Titulo2>DOL - TC11</Titulo2>
        <Text>
          El sistema DOL-TC11 para fachadas de cerámica con grapa oculta es un
          sistema seguro, fácil y sencillo de instalar. Todos y cada uno de los
          elementos que componen este sistema están fabricados con materias
          primeras de máxima calidad.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={tc111}
          alt="DOL-TC11 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={tc112}
          alt="DOL-TC11 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[3]}>
        <Titulo2>DOL - TC14</Titulo2>
        <Text>
          El sistema DOL-TC14 para fachadas de cerámica con grapa oculta es un
          sistema seguro, fácil y sencillo de instalar. Todos y cada uno de los
          elementos que componen este sistema están fabricados con materias
          primeras de máxima calidad.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={tc141}
          alt="DOL-TC14 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={tc142}
          alt="DOL-TC14 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas>

      <StyledSistemas id={id[4]}>
        <Titulo2>DOL - HC20</Titulo2>
        <Text>
          El sistema DOL-HC20 para fachadas de cerámica o piedra de 20 mm con
          grapa oculta es un sistema seguro, fácil y sencillo de instalar. Todos
          y cada uno de los elementos que componen este sistema están fabricados
          con materias primeras de máxima calidad.
          <br />
          <br />
          Se trata de un de fijación mecánica oculta mediante una subestructura
          que está compuesta por escuadras (ménsulas) regulables de aluminio de
          alta calidad de 3 mm de espesor con función de separadora, que también
          transmiten esfuerzos y que van fijadas a la estructura base del
          edificio (pared de ladrillo o forjado de hormigón)
        </Text>
        <ImageWithCaption
          src={hc201}
          alt="DOL-HC20 demostración"
          columnSpan="5"
          isGray
        />
        <ImageWithCaption
          src={hc202}
          alt="DOL-HC20 tabla"
          columnSpan="8"
          isGray
        />
      </StyledSistemas> */}
		</>
	);
};

export default Sistemas;

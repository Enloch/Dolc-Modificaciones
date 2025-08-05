import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import sistemas from "../../../../assets/images/Fusion/Sistemas/img_0001.jpg";

import dolckerClip1 from "../../../../assets/images/Sistemas/sistema-dolcker-clip.webp";
import dolckerClip2 from "../../../../assets/icons/Sistemas/dolcker-clip.svg";

import tc111 from "../../../../assets/images/Sistemas/sistema-dolcker-tc11.webp";
import tc112 from "../../../../assets/icons/Sistemas/dol-tc11.svg";

import tc141 from "../../../../assets/images/Sistemas/sistema-dolcker-tc14.webp";
import tc142 from "../../../../assets/icons/Sistemas/dol-tc14.svg";

import hc201 from "../../../../assets/images/Sistemas/sistema-dolcker-hc20.webp";
import hc202 from "../../../../assets/icons/Sistemas/dol-hc20.svg";
import ImageWithCaption from "../../../../components/ImageWithCaption";

const Sistemas = ({ id }) => {
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Systèmes de construction</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Systems introduction image"
					columnSpan="6"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							Système
							<br />
							<strong>Dolcker & Clip</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[2]}>
							Système
							<br />
							<strong>DOL - TC11</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							Système
							<br />
							<strong>DOL - TC14</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[4]}>
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
					Le système DOLCKER & CLIP pour façades en céramique est un système à
					profilés à haute inertie avec double sécurité. Chaque composant de ce
					système est fabriqué avec des matières premières de première qualité.
					<br />
					<br />
					C'est un système de fixation mécanique par clip + fixation chimique
					via une sous-structure composée de supports en aluminium réglables en
					forme de "L" de 3 mm d'épaisseur, qui transmettent les efforts et sont
					fixés par ancrage à la structure porteuse du bâtiment (mur en brique
					ou dalle en béton).
					<br />
					<br />
					Sur ces supports sont fixés des profilés verticaux en aluminium
					extrudé en forme de "T" de 3 mm d'épaisseur par des vis
					auto-taraudeuses en acier inoxydable.
					<br />
					<br />
					Dans ces profilés en "T", des profilés horizontaux en forme de "G"
					sont vissés, permettant ainsi un support complet de la pièce. C'est le
					système idéal pour la pose de céramiques, permettant le remplacement
					des pièces grâce à un clip coulissant en acier inoxydable permettant
					de multiples placements. De plus, il permet la laquage du profilé
					horizontal selon la couleur de la menuiserie, offrant au client le
					choix de la couleur des joints. Au moins deux clips coulissants sont
					placés dans la partie supérieure de la pièce de départ à 1/5 de la
					longueur. Pour les autres pièces intermédiaires, au moins 4 clips sont
					placés par pièce. Des points de colle polyuréthane et d'étanchéité (4
					par pièce) sont ajoutés pour absorber les dilatations de la façade
					dans les clips coulissants.
					<br />
					<br />
					C'est incontestablement un système offrant de multiples options de
					composition de façade, permettant notamment de rompre les joints
					verticaux. Ces joints verticaux sont réduits à seulement 1 mm, mettant
					ainsi en valeur les joints horizontaux. Le débord de céramique est
					compris entre 43-47 mm selon l'épaisseur de la céramique choisie.
				</Text>
				<ImageWithCaption
					src={dolckerClip1}
					alt="Dolcker-clip demonstration"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip table"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>

			<StyledSistemas id={id[2]}>
				<Titulo2>DOL - TC11</Titulo2>
				<Text>
					Le système DOL-TC11 pour façades en céramique avec clip caché est un
					système sûr, facile et simple à installer. Chaque composant de ce
					système est fabriqué avec des matières premières de première qualité.
					<br />
					<br />
					C'est un système de fixation mécanique avec clip caché via une
					sous-structure composée de supports en aluminium réglables de 3 mm
					d'épaisseur avec fonction séparatrice, qui transmettent les efforts et
					sont fixés à la structure porteuse du bâtiment (mur en brique ou dalle
					en béton).
				</Text>
				<ImageWithCaption
					src={tc111}
					alt="DOL-TC11 demonstration"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={tc112}
					alt="DOL-TC11 table"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>

			<StyledSistemas id={id[3]}>
				<Titulo2>DOL - TC14</Titulo2>
				<Text>
					Le système DOL-TC14 pour façades en céramique avec clip caché est un
					système sûr, facile et simple à installer. Chaque composant de ce
					système est fabriqué avec des matières premières de première qualité.
					<br />
					<br />
					C'est un système de fixation mécanique avec clip caché via une
					sous-structure composée de supports en aluminium réglables de 3 mm
					d'épaisseur avec fonction séparatrice, qui transmettent les efforts et
					sont fixés à la structure porteuse du bâtiment (mur en brique ou dalle
					en béton).
				</Text>
				<ImageWithCaption
					src={tc141}
					alt="DOL-TC14 demonstration"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={tc142}
					alt="DOL-TC14 table"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>

			<StyledSistemas id={id[4]}>
				<Titulo2>DOL - HC20</Titulo2>
				<Text>
					Le système DOL-HC20 pour façades en céramique ou en pierre de 20 mm
					avec clip caché est un système sûr, facile et simple à installer.
					Chaque composant de ce système est fabriqué avec des matières
					premières de première qualité.
					<br />
					<br />
					C'est un système de fixation mécanique avec clip caché via une
					sous-structure composée de supports en aluminium réglables de 3 mm
					d'épaisseur avec fonction séparatrice, qui transmettent les efforts et
					sont fixés à la structure porteuse du bâtiment (mur en brique ou dalle
					en béton).
				</Text>
				<ImageWithCaption
					src={hc201}
					alt="DOL-HC20 demonstration"
					columnSpan="6"
					isGray
				/>
				<ImageWithCaption
					src={hc202}
					alt="DOL-HC20 table"
					columnSpan="6"
					isGray
				/>
			</StyledSistemas>
		</>
	);
};

export default Sistemas;

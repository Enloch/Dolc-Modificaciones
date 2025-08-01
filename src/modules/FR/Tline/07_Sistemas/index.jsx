import { useState } from "react";
import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Modal from "../../../../components/Modal";
import sistemas from "../../../../assets/images/DolckerTline/Sistemas/sistemas.webp";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import img1 from "../../../../assets/images/DolckerTline/Sistemas/DOLCKER_T-LINE SOLUCIONA GRAPA.jpg";
import img2 from "../../../../assets/images/DolckerTline/Sistemas/RENDER CLIP LINE 10 copia.jpg";
import img3 from "../../../../assets/images/DolckerTline/Sistemas/RENDER SISTEMA CLIP 14 copia.jpg";
import img4 from "../../../../assets/images/DolckerTline/Sistemas/Dolcker TLine T10 detalle tecnico_web.jpg";
import img5 from "../../../../assets/images/DolckerTline/Sistemas/Dolcker TLine T20 detalle tecnico_web.jpg";
const SistemasTline = ({ id }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedCaption, setSelectedCaption] = useState("");

	const openModal = (imageSrc, caption) => {
		setSelectedImage(imageSrc);
		setSelectedCaption(caption);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setSelectedCaption("");
	};
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Système constructif</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Introduction aux systèmes"
					caption=""
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[2]}>
							Système
							<br />
							<strong>T-Line Clip 10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							Système
							<br />
							<strong>T-Line Clip 20</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[4]}>
							Système
							<br />
							<strong>T-Line T10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[5]}>
							Système
							<br />
							<strong>T-Line T20</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Text>
					Le système <strong>DOLCKER TLINE</strong> pour façades en céramique de
					type Dolcker est un système avec une profilé à haute inertie et une
					double sécurité. Tous les éléments qui composent ce système sont
					fabriqués avec des matières premières de la plus haute qualité. Il
					s'agit d'un système de fixation mécanique à clip + fixation chimique
					pour l'installation d'une bande d'aluminium clipsée au système, au
					moyen d'une sous-structure composée de consoles réglables en aluminium
					de haute qualité en forme de "L" de 3 mm d'épaisseur, qui transmettent
					les efforts et sont fixées par ancrage à la structure de base du
					bâtiment (mur en briques ou dalle en béton). Sur ces consoles, les
					profilés verticaux en aluminium extrudé en forme de "T" de 3 mm
					d'épaisseur sont fixés à l'aide de vis autoperceuses en acier
					inoxydable.
					<br />
					<br />
					Sur ces profilés en forme de "T", des profilés horizontaux en forme de
					"G" sont vissés, permettant ainsi à la pièce d'être entièrement
					supportée. C'est le système idéal pour l'installation de céramiques,
					permettant de remplacer les pièces car il dispose d'un clip coulissant
					en acier inoxydable, offrant une infinité de possibilités
					d'installation. De plus, il permet de laquer le profilé de la bande en
					fonction de la couleur de votre menuiserie, permettant au client de
					choisir la couleur. Au moins deux clips coulissants sont placés sur la
					partie supérieure de la pièce de départ à 1/5 de la longueur de la
					pièce. Pour le reste des pièces intermédiaires, au moins 4 clips
					seront placés par pièce de céramique. Des points de mastic
					polyuréthane de collage et d'étanchéité Sika-111 ou similaire (4 par
					pièce) seront ajoutés pour absorber les dilatations de la façade dans
					les clips coulissants. Une fois tous les clips en place, la bande
					décorative est clipsée sur les clips déjà installés. Ce système
					dispose d'un profilé de sécurité pour les formats de dimensions
					supérieures à 100 cm pour une installation avec fixation chimique, ce
					qui permet d'améliorer la résistance au vent.
					<br />
					<br />
					Il s'agit sans aucun doute d'un système offrant de multiples options
					de composition de façade, car il est possible de rompre les joints
					verticaux. Ces joints verticaux sont minimisés à seulement 1 mm, ce
					qui met en valeur les joints horizontaux.
				</Text>
			</StyledSistemas>
			<StyledSistemas id={id[2]}>
				<Titulo2>T-Line Clip 10</Titulo2>
				<Text>
					Système de façade composé du profilé Dolcker Clip et d'un profilé
					décoratif laqué, conçu pour une installation par clipsage dans un
					système de rainurage continu.
				</Text>
				<ImageWithCaption
					src={img3}
					alt="Dolcker-clip démonstration"
					columnSpan="6"
					caption="Détails techniques T-Line Clip 10"
					onClickFunc={() =>
						openModal(img3, "Détails techniques T-Line Clip 10")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[3]}>
				<Titulo2>T-Line Clip 20</Titulo2>
				<Text>
					Système de façade avec profilé Dolcker Clip et profilé décoratif
					laqué, conçu pour une fixation par clipsage avec ancrage à agrafe
					apparente, offrant une solution esthétique et fonctionnelle.
				</Text>
				<ImageWithCaption
					src={img2}
					alt="Dolcker-clip démonstration"
					columnSpan="6"
					caption="Détails techniques T-Line Clip 20"
					onClickFunc={() =>
						openModal(img2, "Détails techniques T-Line Clip 20")
					}
				/>
				<ImageWithCaption
					src={img1}
					alt="Dolcker-clip démonstration"
					columnSpan="6"
					caption="Détails techniques T-Line Clip 20 sans profilé"
					onClickFunc={() =>
						openModal(img1, "Détails techniques T-Line Clip 20 sans profilé")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[4]}>
				<Titulo2>T-Line T10</Titulo2>
				<Text>
					Profilé décoratif laqué fixé au système de façade par fixation
					mécanique cachée, garantissant une finition propre et sans éléments
					visibles en surface.
				</Text>
				<ImageWithCaption
					src={img4}
					alt="Dolcker-clip démonstration"
					columnSpan="6"
					caption="Détails techniques T-Line T10"
					onClickFunc={() => openModal(img4, "Détails techniques T-Line T10")}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[5]}>
				<Titulo2>T-Line T20</Titulo2>
				<Text>
					Profilé décoratif laqué fixé au système de façade avec fixation
					mécanique apparente, offrant une solution robuste et un design
					industriel moderne.
				</Text>
				<ImageWithCaption
					src={img5}
					alt="Dolcker-clip démonstration"
					columnSpan="6"
					caption="Détails techniques T-Line T20"
					onClickFunc={() => openModal(img5, "Détails techniques T-Line T20")}
				/>
			</StyledSistemas>
			<Modal
				isOpen={selectedImage !== null}
				onClose={closeModal}
				caption={selectedCaption}
			>
				<img src={selectedImage} alt="Agrandie" />
			</Modal>
		</>
	);
};

export default SistemasTline;

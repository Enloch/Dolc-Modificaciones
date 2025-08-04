import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "@global/GlobalStyles";
import img1 from "@assets/images/T5/Dolcker/catalogo3-1-4.jpg";
import img2 from "@assets/images/Dolcker/catalogo3-1-5.webp";
import img3 from "@assets/images/T5/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "@components/TXT/VisualizadorNota";
import Text from "@components/Text";

import config from "@configs/configDolckerT5";

const Dolcker = ({ id }) => {
	const propsVisualizador = {
		text: "Survolez les points pour voir les informations",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<>
			<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
				<Titulo>Solution Dolcker T5 XL</Titulo>
				<div className="dolcker-info">
					<ImageWithCaption
						src={img1}
						alt="Image Dolcker 2"
						caption="Exemple de systèmes Dolcker T5 XL"
					/>
					<Text>
						Dolcker T5 XL : innovation et design pour des façades ventilées de
						nouvelle génération.
						<br />
						<br />
						Le <strong>Système DOL-T5 XL</strong> est une solution avancée pour
						les façades ventilées, conçue pour l'installation de revêtements
						céramiques grand format avec un système de fixation hybride,
						combinant des clips cachés et une colle structurelle. Son design
						optimisé garantit un assemblage léger, sûr et efficace avec des
						matériaux de la plus haute qualité. Caractéristiques principales
						<br />
						<br />
						<strong>Système de fixation :</strong>
						<br />
						Clip caché pour une esthétique propre et uniforme.
						<br />
						Compatible avec des céramiques de 3,5 - 5,6 - 10,5 - 12 mm
						d'épaisseur.
						<br />
						Joints horizontaux de 5-6 mm et joints verticaux de 2 mm ou plus,
						assurant stabilité et esthétique.
						<br />
						<br />
						<strong>Ancrages et profils :</strong>
						<br />
						Équerres en aluminium en L simples et doubles pour une fixation
						robuste.
						<br />
						Profils verticaux en T et en L en aluminium extrudé, laqués en noir,
						assurant résistance et durabilité.
						<br />
						Cheville d'expansion en acier inoxydable pour la fixation sur dalle.
						<br />
						Cheville avec douille en nylon et vis pour murs en brique.
						<br />
						Vis autoperceuses avec rondelle EPDM en acier inoxydable, assurant
						une tenue maximale.
						<br /> Vis autoperceuses à tête plate laquées en acier inoxydable
						pour une fixation discrète et résistante.
						<br />
						<br />
						<strong>Fixations :</strong>
						<br />
						Fixation mécanique avec clip caché en acier inoxydable laqué avec
						une sortie de 5,6 mm.
						<br />
						Fixation chimique avec colle structurelle SikaTack Panel, assurant
						une liaison forte et durable.
						<br />
						<br />
						<strong>Autres composants :</strong>
						<br /> Sika Primer 210T, optimisant l'adhérence de la colle.
						<br /> Ruban adhésif double face, améliorant la fixation initiale et
						facilitant l'installation.
					</Text>
				</div>
				<VisualizadorNota {...propsVisualizador} />
				<Text></Text>
			</StyledDolcker>
		</>
	);
};

export default Dolcker;

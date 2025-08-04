import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import img2 from "../../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../../components/Tline/VisualizadorTest";
import Text from "../../../../components/Text";

import config from "../../../../configs/configDolckerMatrixDecor";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Survolez les points pour voir les informations",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Image de fond avec indicateurs",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Solutions Dolcker Matrix Decor</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={img2}
					alt="Image Dolcker 2"
					caption="Système Matrix Decor avec matrices en aluminium extrudé."
				/>
				<Text>
					<strong>SYSTÈME MATRIX DECOR</strong> est un système innovant de
					bardage en lamelles d'aluminium avec un mécanisme d'installation
					à clips exclusif, qui garantit un montage rapide, sûr et sans
					problème. Sa grande variété de designs et de finitions en fait une
					solution polyvalente pour créer des façades ventilées, des
					bardages intérieurs et des panneaux décoratifs à fort impact visuel.
					<br />
					<br />
					Grâce à son esthétique soigneusement travaillée et à sa qualité
					premium, <strong>MATRIX DECOR</strong> est une option idéale pour
					les projets de <strong>haute décoration</strong>, apportant
					sophistication et modernité aux espaces intérieurs. Sa combinaison
					de design et de fonctionnalité permet de transformer les
					environnements avec un style contemporain et élégant, ce qui en fait
					le choix parfait pour les architectes et les designers à la
					recherche d'un bardage distinctif et durable.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				<br />
			</Text>
		</StyledDolcker>
	);
};

export default DolckerTline;

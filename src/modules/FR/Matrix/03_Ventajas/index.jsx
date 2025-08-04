import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/DolckerMatrix/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Avantages du système Dolcker Matrix Facade</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Image des Avantages 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Le système Dolcker Matrix Facade dispose d'un développement technique de
				fixation pour façades ventilées amélioré, pour s'adapter aux
				besoins tant esthétiques que fonctionnels du projet.
			</Text>
			<Listado>
				<li>Système de fixation mécanique cachée + clip</li>
				<li>Système démontable</li>
				<li>
					Profil en aluminium vertical ou horizontal pour différentes poses
				</li>
				<li>Possibilité de fabrication de différentes alliages d'aluminium</li>
				<li>Système de pose libre</li>
				<li>Multitude de DESIGN de pièces</li>
				<li>Découpe sur mesure</li>
				<li>Possibilité de fabrication de lames SELON DESIGN</li>
				<li>Système développé pour chambres jusqu'à 20 cm</li>
				<li>Pièces avec FINITIONS solides, métalliques, bois, anodisées</li>
				<li>Montage rapide et sûr</li>
				<li>Système versatile pour concevoir la façade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

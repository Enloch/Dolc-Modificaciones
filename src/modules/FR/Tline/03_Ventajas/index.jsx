import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/DolckerTline/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Avantages du système Dolcker T-LINE</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Image d'avantages 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Le système Dolcker line dispose d'un développement technique de fixation
				cachée dans les pièces en porcelaine pour pouvoir clipser un bandeau
				laqué avec différentes finitions
			</Text>
			<Listado>
				<li>Système démontable</li>
				<li>
					Clip coulissant (sécurité pour pièces d'étaiement d'échafaudage)
				</li>
				<li>
					Profil continu à grande inertie pour supporter de lourdes charges
				</li>
				<li>Système de pose libre</li>
				<li>Multiples tailles de pièces disponibles</li>
				<li>Découpe sur mesure</li>
				<li>Différentes épaisseurs de pièces (6, 9 et 11 mm)</li>
				<li>Système développé pour des chambres jusqu'à 20 cm</li>
				<li>Fabrication de pièces avec textures mat, flamed et honed</li>
				<li>Montage rapide et sécurisé</li>
				<li>Système versatile pour la conception de façade</li>
				<li>Système versatile pour la décoration des bandeaux</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

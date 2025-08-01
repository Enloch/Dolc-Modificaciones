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
			<Titulo>Advantages of the Dolcker Matrix Facade system</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Advantages Image 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				The Dolcker Matrix Facade system features an improved technical
				fastening development for ventilated facades, adapting to both the
				aesthetic and functional needs of the project.
			</Text>
			<Listado>
				<li>Hidden mechanical fastening + clip system</li>
				<li>Dismountable system</li>
				<li>Vertical or horizontal aluminum profile for different installations</li>
				<li>Possibility of manufacturing different aluminum alloys</li>
				<li>Free placement system</li>
				<li>Multitude of piece DESIGNS</li>
				<li>Customized cutting</li>
				<li>Possibility of manufacturing slats ACCORDING TO DESIGN</li>
				<li>System developed for chambers up to 20 cm</li>
				<li>Pieces with solid, metallic, wood, anodized FINISHES</li>
				<li>Fast and secure assembly</li>
				<li>Versatile system when designing the facade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

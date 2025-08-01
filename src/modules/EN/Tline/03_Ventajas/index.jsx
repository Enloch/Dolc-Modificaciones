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
			<Titulo>Advantages of Dolcker T-LINE system</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Dolcker line system has a technical development of hidden fixing in the
				porcelain pieces to be able to clip a lacquered border in different
				finishes
			</Text>
			<Listado>
				<li>Removable system</li>
				<li>Sliding clips (safety for scaffolding bracing pieces)</li>
				<li>Continuous profile with high inertia for supporting heavy loads</li>
				<li>Free placement system</li>
				<li>Multitude of piece sizes</li>
				<li>Customized cutting</li>
				<li>Different piece thicknesses (6, 9 and 11 mm)</li>
				<li>System developed for chambers up to 20 cm</li>
				<li>Manufacture of pieces with matte, flamed and honed textures</li>
				<li>Fast and safe assembly</li>
				<li>Versatile system when designing the facade</li>
				<li>Versatile system in the decoration of borders</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

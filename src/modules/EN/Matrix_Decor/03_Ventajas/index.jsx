import React from "react";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../../assets/images/DolckerMatrixDecor/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../../components/Text";
import { COLORS } from "../../../../global/GlobalStyles";
import Listado from "../../../../components/Listado";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Advantages of the Dolcker Matrix Decor system</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				The dolcker matrix decor system has an improved technical development
				of fixing for ventilated facades, to adapt to both the aesthetic and
				functional needs of the project.
			</Text>
			<Listado>
				<li>Hidden + clipped mechanical fastening system</li>
				<li>Demountable system</li>
				<li>
					Vertical or horizontal aluminum profile for different installations
				</li>
				<li>Possibility of manufacturing different aluminum alloys</li>
				<li>Free placement system</li>
				<li>Myriad of piece DESIGNS</li>
				<li>Custom cutting</li>
				<li>Possibility of manufacturing slats ACCORDING TO DESIGN</li>
				<li>System developed for chambers up to 20 cm</li>
				<li>Pieces with solid, metallic, wood, anodized FINISHES</li>
				<li>Quick and safe assembly</li>
				<li>Versatile system when designing the facade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

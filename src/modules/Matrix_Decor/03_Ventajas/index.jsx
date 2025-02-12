import React from "react";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";

const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Ventajas del sistema Dolcker Matrix Decor</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Sistema dolcker matrix decor dispone de un desarrollo técnico de
				fijación para fachadas ventiladas mejorado, para adaptarse a las
				necesidades tanto estéticas como funcionales del proyecto.
			</Text>
			<Listado>
				<li>Sistema de fijación mecánica oculta + clipada</li>
				<li>Sistema desmontable</li>
				<li>
					Perfil de alumnio vertical o horizontal para disistinas colocaciones
				</li>
				<li>Posibilidad de fabricacion diferentes aleaciones de aluminio</li>
				<li>Sistema de libre colocación</li>
				<li>Multitud de DISEÑOS de piezas</li>
				<li>Despiece a medida</li>
				<li>Posibilidad de fabricacion lamas SEGUN DISEÑO</li>
				<li>Sistema desarrollado para cámaras de hasta 20 cm</li>
				<li>Piezas con ACABADOS solidos , metalicos , maderas , anodizados</li>
				<li>Montaje rápido y seguro</li>
				<li>Sistema versátil a la hora de diseñar la fachada</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

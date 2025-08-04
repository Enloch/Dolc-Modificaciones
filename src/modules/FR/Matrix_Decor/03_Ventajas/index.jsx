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
			<Titulo>Avantages du système Dolcker Matrix Decor</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Image des avantages 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Le système dolcker matrix decor dispose d'un développement technique
				amélioré de fixation pour les façades ventilées, afin de s'adapter
				aux besoins esthétiques et fonctionnels du projet.
			</Text>
			<Listado>
				<li>Système de fixation mécanique caché + à clips</li>
				<li>Système démontable</li>
				<li>
					Profil en aluminium vertical ou horizontal pour différentes installations
				</li>
				<li>Possibilité de fabriquer différentes alliages d'aluminium</li>
				<li>Système de placement libre</li>
				<li>Myriade de DESIGNS de pièces</li>
				<li>Coupe sur mesure</li>
				<li>Possibilité de fabriquer des lamelles SELON LE DESIGN</li>
				<li>Système développé pour des chambres jusqu'à 20 cm</li>
				<li>Pièces avec finitions solides, métalliques, bois, anodisées</li>
				<li>Montage rapide et sûr</li>
				<li>Système polyvalent lors de la conception de la façade</li>
			</Listado>
		</StyledVentajas>
	);
};

export default VentajasTline;

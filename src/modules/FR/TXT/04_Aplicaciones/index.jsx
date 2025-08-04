import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "@components/Titulos";
import { COLORS, DISTANCES } from "@global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-10.jpg";
import logos from "@assets/images/DolckerTXT/Aplicaciones/logos.gif";
import img3 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-12.jpg";
import img5 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-13.jpg";
import Cita from "@components/Cita";
import ImageWithCaptionSlider from "@components/ImageWithCaptionSlider";
import Reemplazo from "@assets/images/DolckerTXT/temporal.webp";
const AplicacionesTline = ({ id }) => {
	return (
		<>
			<StyledAplicaciones
				id={id[0]}
				backgroundColor={COLORS.gray02}
				rowGap={DISTANCES.small}
			>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="L'architecture doit être l'expression de notre temps, mais elle doit également être intemporelle."
					author=" Daniel Libeskind"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[1]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Rénovation</Titulo2>
				<ImageWithCaption
					src={img2}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Le design urbain est l'art de créer des lieux qui soient habitables, fonctionnels et beaux"
					author="Jan Gehlr"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[2]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Nouvelle construction</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					columnSpan="6"
				/>
				<Cita
					cita="La ville du futur doit être une ville pour tous."
					author="Le Corbusier"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
		</>
	);
};

export default AplicacionesTline;

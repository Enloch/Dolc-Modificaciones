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
					cita="Architecture should be the expression of our time, but it must also be timeless."
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
				<Titulo2 color={COLORS.gray08}>Rehabilitation</Titulo2>
				<ImageWithCaption
					src={img2}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Urban design is the art of creating places that are habitable, functional and beautiful."
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
				<Titulo2 color={COLORS.gray08}>New construction</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="The future city must be a city for everyone."
					author="Le Corbusier"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
		</>
	);
};

export default AplicacionesTline;

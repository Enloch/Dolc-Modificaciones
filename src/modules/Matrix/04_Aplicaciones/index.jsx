import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-10.jpg";
import logos from "../../../assets/images/DolckerMatrix/Aplicaciones/logos.gif";
import img3 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-12.jpg";
import img5 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-13.jpg";
import Cita from "../../../components/Cita";
import ImageWithCaptionSlider from "../../../components/ImageWithCaptionSlider";

const AplicacionesTline = ({ id }) => {
	return (
		<>
			<StyledAplicaciones
				id={id[0]}
				backgroundColor={COLORS.gray02}
				rowGap={DISTANCES.small}
			>
				<Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Los detalles no son los detalles. Los detalles son el diseño."
					author="Charles Eames "
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[1]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
				<ImageWithCaption
					src={logos}
					alt="Imagen de Aplicaciones 1"
					caption=""
					columnSpan="6"
				/>
				<Cita
					cita="Lo funcional es mejor que lo bello, porque lo que funciona bien permanece en el tiempo."
					author="Ray Eames"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[2]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					//   caption='Jorge dará la referencia o imágen.'
					columnSpan="6"
				/>
				<Cita
					cita="El espacio no tiene sentido sin luz. Un edificio habla a través del silencio de la percepción orquestada por la luz."
					author="Steven Holl"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[3]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.small}
			>
				<Titulo2 color={COLORS.gray08}>Exteriores</Titulo2>
				<ImageWithCaptionSlider
					images={[
						{
							src: img4,
							alt: "Imagen de Aplicaciones 4",
							caption:
								"La originalidad consiste en el retorno al origen; así pues, original es aquello que vuelve a la simplicidad de las primeras soluciones”. Antonio Gaudí.",
						},
						{
							src: img5, // Asegúrate de definir img5 en alguna parte de tu código
							alt: "Imagen de Aplicaciones 5",
							caption:
								"La originalidad consiste en el retorno al origen; así pues, original es aquello que vuelve a la simplicidad de las primeras soluciones”. Antonio Gaudí.",
						},
						// ... puedes agregar más imágenes aquí
					]}
					columnSpan="6"
				/>
			</StyledAplicaciones>
		</>
	);
};

export default AplicacionesTline;

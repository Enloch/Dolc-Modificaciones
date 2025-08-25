import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "@components/Titulos";
import { COLORS, DISTANCES } from "@global/GlobalStyles";
import StyledAplicaciones, { StyledGaleria, StyledSlider } from "./styles";
import img1 from "@assets/images/T5/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "@assets/images/T5/Aplicaciones/catalogo3-1-10.jpg";
import img3 from "@assets/images/T5/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "@assets/images/T5/Aplicaciones/catalogo3-1-12.jpg";
import img5 from "@assets/images/T5/Aplicaciones/catalogo3-1-13.jpg";
import Cita from "@components/Cita";
import ImageGallery from "react-image-gallery";

const imagenesAplicaciones = import.meta.glob(
	"@assets/images/GaleriaT5/*", { eager: true }
);
const imagenesApli = Object.keys(imagenesAplicaciones).map((key) => ({
	original: imagenesAplicaciones[key].default,
	thumbnail: imagenesAplicaciones[key].default,
}));

const imagenesDecor = import.meta.glob("@assets/images/GaleriaT5/decor/*", { eager: true });
const imagenesDeco = Object.keys(imagenesDecor).map((key) => ({
	original: imagenesDecor[key].default,
	thumbnail: imagenesDecor[key].default,
}));
const Aplicaciones = ({ id }) => {
	return (
		<>
			<StyledAplicaciones
				id={id[0]}
				backgroundColor={COLORS.gray02}
				rowGap={DISTANCES.long}
			>
				<Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="La fachada es el rostro del edificio, y como tal, debe expresar su carácter y propósito."
					author="Louis Kahn"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-aplicaciones" backgroundColor={COLORS.gray02}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesApli}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
			</StyledGaleria>
			<StyledGaleria id="galeria-decor" backgroundColor={COLORS.gray02s}>
				<Titulo color={COLORS.gray08}>T5 XL DECOR</Titulo>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagenesDeco}
						showPlayButton={false}
						showFullscreenButton={true}
						showThumbnails={false}
						autoPlay={true}
						showBullets={false}
						showNav={true}
						lazyLoad={true}
						slideDuration={450}
					/>
				</StyledSlider>
			</StyledGaleria>
			<StyledAplicaciones
				id={id[1]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
				<ImageWithCaption
					src={img2}
					alt="Imagen de Aplicaciones 1"
					caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="La fachada es el espejo del alma de un edificio."
					author="Norman Foster"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[2]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz."
					author="Le Corbusier"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[3]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo3 color={COLORS.gray08}>- Fachadas</Titulo3>
				<ImageWithCaption
					src={img4}
					alt="Imagen de Aplicaciones 4"
					caption="texto informativo"
					columnSpan="6"
				/>
			</StyledAplicaciones>
			<StyledAplicaciones
				id={id[4]}
				backgroundColor={COLORS.gray01}
				rowGap={DISTANCES.medium}
			>
				<Titulo3 color={COLORS.gray08}>
					— Terrazas, suelos elevados, techos y soluciones
				</Titulo3>
				<ImageWithCaption
					src={img5}
					alt="Imagen de Aplicaciones 5"
					caption="texto informativo"
					columnSpan="6"
				/>
			</StyledAplicaciones>
		</>
	);
};

export default Aplicaciones;

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

const imagenesAplicaciones = import.meta.globEager("@assets/images/GaleriaT5/*");
const imagenesApli = Object.keys(imagenesAplicaciones).map((key) => ({
	original: imagenesAplicaciones[key].default,
	thumbnail: imagenesAplicaciones[key].default,
}));

const imagenesDecor = import.meta.globEager("@assets/images/GaleriaT5/decor/*");
const imagenesDeco = Object.keys(imagenesDecor).map((key) => ({
	original: imagenesDecor[key].default,
	thumbnail: imagenesDecor[key].default,
}));
const Aplicaciones = ({ id }) => {
	return (
		<>
			<StyledAplicaciones id={id[0]} backgroundColor={COLORS.gray02} rowGap={DISTANCES.long}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					// caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="La façade est le visage du bâtiment, et à ce titre, elle doit exprimer son caractère et sa fonction."
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
			<StyledAplicaciones id={id[1]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo2 color={COLORS.gray08}>Rénovation</Titulo2>
				<ImageWithCaption
					src={img2}
					alt="Imagen de Aplicaciones 1"
					// caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="La façade est le miroir de l'âme d'un bâtiment."
					author="Norman Foster"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones id={id[2]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo2 color={COLORS.gray08}>Nouvelle construction</Titulo2>
				<ImageWithCaption
					src={img3}
					alt="Imagen de Aplicaciones 1"
					// caption="texto informativo"
					columnSpan="6"
				/>
				<Cita
					cita="L'architecture est le jeu sage, correct et magnifique des volumes sous la lumière."
					author="Le Corbusier"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones id={id[3]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>- Façades</Titulo3>
				<ImageWithCaption
					src={img4}
					alt="Imagen de Aplicaciones 4"
					// caption="texto informativo"
					columnSpan="6"
				/>
			</StyledAplicaciones>
			<StyledAplicaciones id={id[4]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>— Terrasses, planchers surélevés, plafonds et solutions</Titulo3>
				<ImageWithCaption
					src={img5}
					alt="Imagen de Aplicaciones 5"
					// caption="texto informativo"
					columnSpan="6"
				/>
			</StyledAplicaciones>
		</>
	);
};

export default Aplicaciones;

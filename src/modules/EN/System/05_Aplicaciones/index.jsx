import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "../../../../assets/images/Aplicaciones/catalogo3-1-10.jpg";
import img3 from "../../../../assets/images/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "../../../../assets/images/Aplicaciones/2.jpg";
import img5 from "../../../../assets/images/Aplicaciones/catalogo3-1-13.webp";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";

const Aplicaciones = ({ id }) => {
	const imagesRehabilitar = import.meta.globEager("../../../../assets/images/GaleriaSystem/*");
	const imagesGaleriaRehabilitar = Object.keys(imagesRehabilitar).map((key) => ({
		original: imagesRehabilitar[key].default,
		thumbnail: imagesRehabilitar[key].default,
	}));

	const imagesobra = import.meta.globEager("../../../../assets/images/GaleriaSystem/obra/*");
	const imagesGaleriaObra = Object.keys(imagesobra).map((key) => ({
		original: imagesobra[key].default,
		thumbnail: imagesobra[key].default,
	}));
	return (
		<>
			<StyledAplicaciones id={id[0]} backgroundColor={COLORS.gray02} rowGap={DISTANCES.long}>
				<Titulo color={COLORS.gray08}>APPLICATIONS</Titulo>
				<ImageWithCaption
					src={img1}
					alt="Imagen de Aplicaciones 1"
					caption="DOLCKER &CLIP. Do&Marble Calacatta + Do&Wood Eucalipto"
					columnSpan="6"
				/>
				<Cita
					cita="“The architect's job today is to create beautiful buildings.
                    That's it.”"
					author="Philip Johnson"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-aplicaciones" backgroundColor={COLORS.gray02}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaRehabilitar}
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
				<Titulo2 color={COLORS.gray08}>Rehabilitation</Titulo2>
				<ImageWithCaption src={img2} alt="Imagen de Aplicaciones 1" caption="DOL -TC11. Do&Dolm Nacar" columnSpan="6" />
				<Cita
					cita="“We live in a wonderful world that is full of beauty, enchantment and adventure.There is no limit to the adventures we can have as long as we look for them with our eyes wide open.”"
					author="Jawaharial Nehru"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledAplicaciones id={id[2]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo2 color={COLORS.gray01}>New construction</Titulo2>
				<ImageWithCaption src={img3} alt="Imagen de Aplicaciones 1" caption="DOL -TC14. Do&Quarz Grey / Do&Quarz Black" columnSpan="6" />
				<Cita
					cita="“When I'm working on a problem, I never think about its beauty. I only think about how to solve the problem. But when I finish it, if the solution isn't beautiful, I know it's wrong.”"
					author="Richard Buckminster Fuller"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledAplicaciones>
			<StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaObra}
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
			<StyledAplicaciones id={id[3]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>Facades</Titulo3>
				<ImageWithCaption src={img4} alt="Imagen de Aplicaciones 4" caption="DOL -TC20. Do&Space Ivory" columnSpan="6" />
			</StyledAplicaciones>
			<StyledAplicaciones id={id[4]} backgroundColor={COLORS.gray01} rowGap={DISTANCES.medium}>
				<Titulo3 color={COLORS.gray08}>Terraces, raised floors, ceilings and solutions</Titulo3>
				<ImageWithCaption src={img5} alt="Imagen de Aplicaciones 5" caption="DOL -TC11. Do&Space Ivory" columnSpan="6" />
			</StyledAplicaciones>
		</>
	);
};

export default Aplicaciones;

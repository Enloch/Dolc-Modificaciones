import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesAplicaciones = import.meta.glob("../../../../assets/images/Fusion/Galeria/aplicaciones/*", { eager: true });
	const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map((key) => ({
		original: ImagenesAplicaciones[key].default,
		thumbnail: ImagenesAplicaciones[key].default,
	}));

	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesTerracota = import.meta.glob("../../../../assets/images/Fusion/Galeria/terracota/*", { eager: true });
	const imagesGaleriaTerracota = Object.keys(ImagenesTerracota).map((key) => ({
		original: ImagenesTerracota[key].default,
		thumbnail: ImagenesTerracota[key].default,
	}));

	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesColor = import.meta.glob("../../../../assets/images/Fusion/Galeria/color/*", { eager: true });
	const imagesGaleriaColor = Object.keys(ImagenesColor).map((key) => ({
		original: ImagenesColor[key].default,
		thumbnail: ImagenesColor[key].default,
	}));

	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesPetra = import.meta.glob("../../../../assets/images/Fusion/Galeria/petra/*", { eager: true });
	const imagesGaleriaPetra = Object.keys(ImagenesPetra).map((key) => ({
		original: ImagenesPetra[key].default,
		thumbnail: ImagenesPetra[key].default,
	}));

	// Actualizado para usar import.meta.glob con eager: true en lugar de glob
	const ImagenesTextura = import.meta.glob("../../../../assets/images/Fusion/Galeria/textura/*", { eager: true });
	const imagesGaleriaTextura = Object.keys(ImagenesTextura).map((key) => ({
		original: ImagenesTextura[key].default,
		thumbnail: ImagenesTextura[key].default,
	}));

	return (
		<>
			<StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaAplicaciones}
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
				<Text>
					Fusion is the facade and envelope design tool developed for architects and technicians looking for creative freedom with precise
					technical solutions.
					<br />
					<br />
					With Dolcker Fusion you can:
					<br />
					• Design new buildings or rehabilitate existing facades, adapting finishes to urban environment conditions or project style.
					<br />
					• Combine colors in percentages defined by the designer, generating unique compositions in ceramic, stone or technical materials.
					<br />
					• Select specific textures like matte, gloss or flamed, providing an aesthetic language in line with the building's identity.
					<br />
					• Choose customized anchoring systems: from clip systems to custom cuts, with included technical advice to ensure effective and
					long-lasting installation.
					<br />
					<br />
					Dolcker Fusion offers an integral solution to take architectural design to the next level, combining creativity, technique, and
					professional support in each phase of the project.
				</Text>
				<Cita
					cita="“Color is a power that directly influences the soul”"
					author="— Wassily Kandinsky"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Terracota</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaTerracota}
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
				<Text>
					Fusion Terracota is a line of architectural surfaces that explores the timeless beauty of natural earth tones of fired clay.
					Designed for contemporary projects seeking a connection with raw materials and visual balance, this collection adapts to both
					sober and expressive compositions.
					<br />
					<br />
					Main characteristics:
					<br />
					• Soft and natural earth colors: ranges that evoke the essence of clay, sand, oxide, or sienna.
					<br />
					• Surfaces of great visual purity, designed to offer authentic textures and warm, durable, and versatile ceramic finishes.
					<br />
					• Possibility of combining colors in personalized proportions, adapting each design to the aesthetic identity of the project.
					<br />
					• Perfect for contemporary architecture, rehabilitation, or integration into sensitive urban landscapes.
					<br />
					<br />
					Choose the tones directly from the earth and create compositions that speak the language of honest, natural, and essential
					architecture.
				</Text>
				<Cita
					cita="“Architecture begins when you place two bricks carefully together.”"
					author="— Ludwig Mies van der Rohe"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Color</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaColor}
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
				<Text>
					Fusion Color is the creative tool of the ARQ collection that allows combining monolithic colors to obtain personalized
					architectural compositions, balanced or bold, according to the project's identity.
					<br />
					<br />
					Starting from a carefully selected range of monochromatic colors, the collection offers the possibility of:
					<br />
					• Creating soft combinations, using tones close to each other within the same chromatic range.
					<br />
					• Generating harmonious effects, with subtle nuances for continuous visual harmony.
					<br />
					• Betting on high chromatic dispersion, playing with intense or contrasting colors that generate impact and character.
					<br />
					<br />
					Each combination can be defined in the exact proportion desired, allowing control over the visual rhythm and atmosphere of the
					design, from the most sober to the most expressive.
					<br />
					<br />
					Fusion Color turns ceramics into an architectural language tool, where color is structured, balanced, and expressed with
					intention.
				</Text>
				<Cita
					cita="“Design is not just what it looks like and feels like. Design is how it works.”"
					author="— Steve Jobs"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Petra</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaPetra}
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
				<Text>
					Fusion Petra is the creative proposal that allows combining different natural stone collections to create unique, contemporary,
					and aesthetically valuable facades.
					<br />
					<br />
					Natural stones, due to their geological origin and chromatic and graphic diversity, offer unparalleled visual richness.
					<br />
					<br />
					Fusion Petra starts from this singularity to offer architects or designers the possibility of:
					<br />
					• Mixing tones and textures of different stones in the same facade.
					<br />
					• Designing elegant, modern, and avant-garde compositions.
					<br />
					• Defining the exact proportion of each type of stone, adapting the visual rhythm and impact of the project.
					<br />
					• Playing with natural graphics and veins to generate dynamic or sober effects, according to the building's language.
					<br />
					<br />
					With Fusion Petra, stones cease to be a complementary material to become a central compositional tool, capable of building
					identity and sophistication from the essential.
				</Text>
				<Cita
					cita="“Designing is not making it look good, it's making it make sense.”"
					author="— Phrase attributed to multiple designers (unconfirmed origin)"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[4]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusion Textura</Titulo3>
				<StyledSlider className="Slider">
					<ImageGallery
						items={imagesGaleriaTextura}
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
				<Text>
					Fusion Textura is the creative tool that allows designing and personalizing facades by combining different finishes and colors,
					generating compositions with depth, visual rhythm, and dynamic interaction with light.
					<br />
					<br />
					Through this proposal, you can:
					<br />
					• Combine matte, gloss, and flamed textures within the same architectural surface.
					<br />
					• Apply any finish available in our collections to generate facades with unique character.
					<br />
					• Define your own combination percentages, adapting the design to the aesthetic and technical needs of the project.
					<br />
					• Create light and shadow effects, adding volume, relief, and sophistication to the building's envelope.
					<br /> <br />
					Fusion Textura offers total creative freedom, elevating the facade to an expressive language where the finish becomes a design
					matter.
				</Text>
				<Cita
					cita="“Where color and texture meet, the character of the space is born.”"
					author="— Original inspiration"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
		</>
	);
};

export default AplicacionesTline;

import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider, Card, CardMedia, CardBody } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Ejemplo1 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Rojo-t.png";
import Ejemplo2 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Gris-t.png";
import Ejemplo3 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Mixto-t.png";
import Ejemplo4 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Beige-t.png";
const AplicacionesTline = ({ id }) => {
	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesAplicaciones = import.meta.globEager("../../../../assets/images/Fusion/Galeria/aplicaciones/*");

	// Lista ordenada de tarjetas (sin depender del nombre de archivo)
	// Puedes controlar el orden con este array y usar:
	// - img: import directo (preferido)
	// - fileName: para resolver una imagen existente en la carpeta aplicaciones/
	const tarjetasAplicaciones = [
		{
			id: "example-1",
			img: Ejemplo1,
			proposal: "Example 1",
			title: "Design of ventilated facade with Dolcker Fusion (60x120 cm)",
			subtitle: "Color proposal",
			description:
				"A ventilated facade with Dolcker Fusion Terracota porcelain stoneware in rectangular format 60 x 120 cm is proposed. This solution seeks to combine contemporary aesthetics with functionality, guaranteeing durability and energy efficiency.",
			bullets: ["33% classic terracotta red", "33% soft terracotta red", "33% matte terracotta red"],
			description2:
				"The strategic arrangement of the pieces will avoid repetitive patterns and add depth and tonal richness to the surface.",
		},
		{
			id: "example-2",
			img: Ejemplo2,
			proposal: "Example 2",
			title: "Design of ventilated facade with Dolcker Fusion (60x120 cm)",
			subtitle: "Color proposal",
			description:
				"A ventilated facade with Dolcker Fusion Color porcelain stoneware in rectangular format 60 x 120 cm is proposed. Balance of neutrals with subtle variation in gloss for a serene and technical reading.",
			bullets: ["33% light gray", "33% medium gray", "33% dark gray"],
			description2:
				"The strategic arrangement of the pieces will avoid repetitive patterns and add depth and tonal richness to the surface.",
		},
		{
			id: "example-3",
			img: Ejemplo3,
			proposal: "Example 3",
			title: "Design of ventilated facade with Dolcker Fusion (60x120 cm)",
			subtitle: "Color proposal",
			description: "Controlled palette with green and terracotta accents to enliven the elevation without losing order.",
			bullets: ["33% matte red", "33% textured gray", "33% glossy green"],
			description2:
				"The pieces will be placed strategically to avoid visible repetitions and achieve a fluid integration of colors throughout the building surface.",
		},
		{
			id: "example-4",
			img: Ejemplo4,
			proposal: "Example 4",
			title: "Design of ventilated facade with Dolcker Fusion (60x120 cm)",
			description: "Range of technical beiges with emphasized joints for a sober and precise aesthetic.",
			bullets: ["33% smooth beige", "33% smooth brown", "33% cream"],
			description2:
				"The pieces will be placed strategically to avoid visible repetitions and achieve a fluid integration of colors throughout the building surface.",
		},
	];

	// Default text if there is no entry in the map
	const textoDefaultAplicacion = {
		title: "Dolcker Fusion ventilated facade design",
		description:
			"Color proposal and flexible composition for contemporary projects. Combine colors and textures to create rhythm and depth in the envelope.",
		bullets: ["33% classic terracotta red", "33% soft terracotta red", "33% cream"],
	};

	// Build cards respecting array order and resolving image
	const cardsAplicaciones = tarjetasAplicaciones.map((item) => {
		let resolved = item.img;
		if (!resolved && item.fileName) {
			const matchKey = Object.keys(ImagenesAplicaciones).find((k) => k.endsWith(`/${item.fileName}`));
			resolved = matchKey ? ImagenesAplicaciones[matchKey].default : undefined;
		}
		return { image: resolved, ...textoDefaultAplicacion, ...item };
	});

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesTerracota = import.meta.globEager("../../../../assets/images/Fusion/Galeria/terracota/*");
	const imagesGaleriaTerracota = Object.keys(ImagenesTerracota).map((key) => ({
		original: ImagenesTerracota[key].default,
		thumbnail: ImagenesTerracota[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesColor = import.meta.globEager("../../../../assets/images/Fusion/Galeria/color/*");
	const imagesGaleriaColor = Object.keys(ImagenesColor).map((key) => ({
		original: ImagenesColor[key].default,
		thumbnail: ImagenesColor[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesPetra = import.meta.globEager("../../../../assets/images/Fusion/Galeria/petra/*");
	const imagesGaleriaPetra = Object.keys(ImagenesPetra).map((key) => ({
		original: ImagenesPetra[key].default,
		thumbnail: ImagenesPetra[key].default,
	}));

	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesTextura = import.meta.globEager("../../../../assets/images/Fusion/Galeria/textura/*");
	const imagesGaleriaTextura = Object.keys(ImagenesTextura).map((key) => ({
		original: ImagenesTextura[key].default,
		thumbnail: ImagenesTextura[key].default,
	}));

	return (
		<>
			<StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo color={COLORS.gray08}>Applications</Titulo>
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
				{/* Slider de tarjetas con mezcla de texto + imagen */}
				<Swiper
					modules={[Navigation]}
					className="Swiper swiper--aplicaciones"
					navigation={false}
					grabCursor
					spaceBetween={16}
					slidesPerView={1.5}
					breakpoints={{
						0: { slidesPerView: 1.1, spaceBetween: 12 },
						600: { slidesPerView: 1.25, spaceBetween: 14 },
						1080: { slidesPerView: 1.5, spaceBetween: 40 },
					}}
				>
					{cardsAplicaciones.map((card, index) => (
						<SwiperSlide key={index}>
							<Card>
								<CardBody>
									<h3 style={{ fontWeight: "bold" }}>
										{card.propuesta} {card.title}
									</h3>
									{card.subtitle ? <h4>{card.subtitle}</h4> : null}
									<p>{card.description}</p>
									{card.bullets?.length ? (
										<ul>
											{card.bullets.map((b, i) => (
												<li key={i}>{b}</li>
											))}
										</ul>
									) : null}
									{card.description2 ? <p>{card.description2}</p> : null}
								</CardBody>
								<CardMedia>
									<img src={card.image} alt={`Aplicación Fusión ${index + 1}`} loading="lazy" />
								</CardMedia>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
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
					sober and expressive compositions. Main characteristics: • Soft and natural earth colors: ranges that evoke the essence of clay,
					sand, oxide, or sienna. • Surfaces of great visual purity, designed to offer authentic textures and warm, durable, and versatile
					ceramic finishes. • Possibility of combining colors in personalized proportions, adapting each design to the aesthetic identity of
					the project. • Perfect for contemporary architecture, rehabilitation, or integration into sensitive urban landscapes. Choose the
					tones directly from the earth and create compositions that speak the language of honest, natural, and essential architecture.
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
					architectural compositions, balanced or bold, according to the project's identity. Starting from a carefully selected range of
					monochromatic colors, the collection offers the possibility of: • Creating soft combinations, using tones close to each other
					within the same chromatic range. • Generating harmonious effects, with subtle nuances for continuous visual harmony. • Betting on
					high chromatic dispersion, playing with intense or contrasting colors that generate impact and character. Each combination can be
					defined in the exact proportion desired, allowing control over the visual rhythm and atmosphere of the design, from the most sober
					to the most expressive. Fusion Color turns ceramics into an architectural language tool, where color is structured, balanced, and
					expressed with intention.
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
					and aesthetically valuable facades. Natural stones, due to their geological origin and chromatic and graphic diversity, offer
					unparalleled visual richness. Fusion Petra starts from this singularity to offer architects or designers the possibility of: •
					Mixing tones and textures of different stones in the same facade. • Designing elegant, modern, and avant-garde compositions. •
					Defining the exact proportion of each type of stone, adapting the visual rhythm and impact of the project. • Playing with natural
					graphics and veins to generate dynamic or sober effects, according to the building's language. With Fusion Petra, stones cease to
					be a complementary material to become a central compositional tool, capable of building identity and sophistication from the
					essential.
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
					generating compositions with depth, visual rhythm, and dynamic interaction with light. Through this proposal, you can: • Combine
					matte, gloss, and flamed textures within the same architectural surface. • Apply any finish available in our collections to
					generate facades with unique character. • Define your own combination percentages, adapting the design to the aesthetic and
					technical needs of the project. • Create light and shadow effects, adding volume, relief, and sophistication to the building's
					envelope. Fusion Textura offers total creative freedom, elevating the facade to an expressive language where the finish becomes a
					design matter.
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

import { useRef, useCallback } from "react";
import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider, CardsSlider, CardsViewport, CardsTrack, Card, CardMedia, CardBody, NavButton } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Ejemplo1 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Rojo-t.png";
import Ejemplo2 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Gris.png";
import Ejemplo3 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Mixto.png";
import Ejemplo4 from "../../../../assets/images/Fusion/Galeria/aplicaciones/Beige.png";
const AplicacionesTline = ({ id }) => {
	const viewportRef = useRef(null);
	const onNav = useCallback((dir) => {
		const vp = viewportRef.current;
		if (!vp) return;
		const gap = 16; // debe coincidir con gap en CardsTrack
		const step = vp.clientWidth + gap; // 1 tarjeta por vista
		const delta = dir === "next" ? step : -step;
		vp.scrollBy({ left: delta, behavior: "smooth" });
	}, []);
	// Actualizado para usar import.meta.globEager con eager: true en lugar de glob
	const ImagenesAplicaciones = import.meta.globEager("../../../../assets/images/Fusion/Galeria/aplicaciones/*");

	// Lista ordenada de tarjetas (sin depender del nombre de archivo)
	// Puedes controlar el orden con este array y usar:
	// - img: import directo (preferido)
	// - fileName: para resolver una imagen existente en la carpeta aplicaciones/
	const tarjetasAplicaciones = [
		{
			id: "ejemplo-1",
			img: Ejemplo1,
			propuesta: "Ejemplo 1.",
			title: "Diseño con Dolcker Fusión Terracota (60x120 cm)",
			subtitle: "Propuesta cromática",
			description:
				"Se propone una fachada ventilada con porcelánico Dolcker Fusión Terracota en formato rectangular de 60 x 120 cm. Esta solución busca combinar estética contemporánea con funcionalidad, garantizando durabilidad y eficiencia energética.",
			bullets: ["33% rojo terracota clásico", "33% rojo terracota suave", "33% rojo terracota mate"],
			description2:
				"La disposición estratégica de las piezas evitará patrones repetitivos y aportará profundidad y riqueza tonal a la superficie.",
		},
		{
			id: "ejemplo-2",
			img: Ejemplo2,
			propuesta: "Ejemplo 2",
			title: "Diseño con Dolcker Fusión Color (60x120 cm)",
			subtitle: "Propuesta cromática",
			description:
				"Se propone una fachada ventilada con porcelánico Dolcker Fusión Color en formato rectangular de 60 x 120 cm. Equilibrio de neutros con variación sutil de brillo para una lectura serena y técnica.",
			bullets: ["33% gris claro", "33% gris medio", "33% gris oscuro"],
			description2:
				"La disposición estratégica de las piezas evitará patrones repetitivos y aportará profundidad y riqueza tonal a la superficie.",
		},
		{
			id: "ejemplo-3",
			img: Ejemplo3,
			propuesta: "Ejemplo 3",
			title: "Diseño con Dolcker Fusión Texture (60x120 cm)",
			subtitle: "Propuesta cromática",
			description: "Paleta controlada con acentos verdes y terracotas para dinamizar el alzado sin perder orden.",
			bullets: ["33% rojo mate", "33% gris texturado", "33% verde brillo"],
			description2:
				"Las piezas se colocarán de forma estratégica para evitar repeticiones visibles y lograr una integración fluida de colores en toda la superficie del edificio.",
		},
		{
			id: "ejemplo-4",
			img: Ejemplo4,
			propuesta: "Ejemplo 4",
			title: "Diseño con Dolcker Fusión Color (60x120 cm)",
			description: "Gama de beiges técnicos con juntas enfatizadas para una estética sobria y precisa.",
			bullets: ["33% beige liso", "33% marrón liso", "33% crema"],
			description2:
				"Las piezas se colocarán de forma estratégica para evitar repeticiones visibles y lograr una integración fluida de colores en toda la superficie del edificio.",
		},
	];

	// Texto por defecto si no hay entrada en el mapa
	const textoDefaultAplicacion = {
		title: "Diseño de fachada ventilada Dolcker Fusión",
		description:
			"Propuesta cromática y composición flexible para proyectos contemporáneos. Combina colores y texturas para crear ritmo y profundidad en la envolvente.",
		bullets: ["33% rojo terracota clásico", "33% rojo terracota suave", "33% rojo crema"],
	};

	// Construye las tarjetas respetando el orden del array y resolviendo la imagen
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
				<Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
				<Text>
					Fusión es la herramienta de diseño de fachadas y envolventes desarrollada para arquitectos y técnicos que buscan libertad creativa
					con soluciones técnicas precisas.
					<br />
					<br />
					Con Dolcker Fusión puedes:
					<br />
					• Diseñar edificios nuevos o rehabilitar fachadas existentes, adaptando los acabados a las condiciones del entorno urbano o al
					estilo del proyecto.
					<br />
					• Combinar colores en porcentajes definidos por el diseñador, generando composiciones únicas en cerámica, piedra o materiales
					técnicos.
					<br />
					• Seleccionar texturas específicas como mate, brillo o flameada, aportando un lenguaje estético acorde con la identidad del
					edificio.
					<br />
					• Elegir sistemas de anclaje personalizados: desde sistemas clip hasta despieces a medida, con asesoramiento técnico incluido para
					garantizar una instalación eficaz y duradera.
					<br />
					<br />
					Dolcker Fusión ofrece una solución integral para llevar el diseño arquitectónico al siguiente nivel, combinando creatividad,
					técnica y soporte profesional en cada fase del proyecto.
				</Text>
				<Cita
					cita="“El color es un poder que influye directamente en el alma”"
					author="— Wassily Kandinsky"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
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
				<Titulo3 color={COLORS.gray08}>- Fusión Terracota</Titulo3>
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
					Fusión Terracota es una línea de superficies arquitectónicas que explora la belleza atemporal de los tonos naturales de la arcilla
					cocida. Diseñada para proyectos contemporáneos que buscan una conexión con la materia prima y el equilibrio visual, esta colección
					se adapta tanto a composiciones sobrias como expresivas.
					<br />
					<br />
					Características principales:
					<br />
					• Colores tierra suaves y naturales: gamas que evocan la esencia del barro, la arena, el óxido o el siena.
					<br />
					• Superficies de gran pureza visual, pensadas para ofrecer texturas auténticas y acabados cerámicos cálidos, duraderos y
					versátiles.
					<br />
					• Posibilidad de combinar colores en proporciones personalizadas, adaptando cada diseño a la identidad estética del proyecto.
					<br />
					• Perfecta para arquitectura contemporánea, rehabilitación o integración en paisajes urbanos sensibles.
					<br />
					<br />
					Elige los tonos directamente de la tierra y crea composiciones que hablen el lenguaje de la arquitectura honesta, natural y
					esencial.
				</Text>
				<Cita
					cita="“La arquitectura empieza cuando se colocan cuidadosamente dos ladrillos juntos.”"
					author="— Ludwig Mies van der Rohe"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[2]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusión Color</Titulo3>
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
					Fusión Color es la herramienta creativa de la colección ARQ que permite combinar colores monolíticos para obtener composiciones
					arquitectónicas personalizadas, equilibradas o atrevidas, según la identidad del proyecto.
					<br />
					<br />
					Partiendo de una cuidada gama de monocolores, la colección ofrece la posibilidad de:
					<br />
					• Realizar combinaciones suaves, usando tonos próximos dentro de una misma gama cromática.
					<br />
					• Crear efectos entonados, con matices sutiles para una armonía visual continua.
					<br />
					• Apostar por una alta dispersión cromática, jugando con colores intensos o contrastados que generan impacto y carácter.
					<br />
					<br />
					Cada combinación puede definirse en la proporción exacta deseada, lo que permite controlar el ritmo visual y la atmósfera del
					diseño, desde lo más sobrio hasta lo más expresivo.
					<br />
					<br />
					Fusión Color convierte la cerámica en una herramienta de lenguaje arquitectónico, donde el color se estructura, se equilibra y se
					expresa con intención.
				</Text>
				<Cita
					cita="“El diseño no es solo lo que se ve o se siente. El diseño es cómo funciona.”"
					author="— Steve Jobs"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[3]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusión Petra</Titulo3>
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
					Fusión Petra es la propuesta creativa que permite combinar distintas colecciones de piedra natural para crear fachadas únicas,
					contemporáneas y con un alto valor estético.
					<br />
					<br />
					Las piedras naturales, por su origen geológico y su diversidad cromática y gráfica, ofrecen una riqueza visual incomparable.
					<br />
					<br />
					Fusión Petra parte de esa singularidad para ofrecer al arquitecto o diseñador la posibilidad de:
					<br />
					• Mezclar tonos y texturas de diferentes piedras en una misma fachada.
					<br />
					• Diseñar composiciones elegantes, modernas y de estilo vanguardista.
					<br />
					• Definir la proporción exacta de cada tipo de piedra, adaptando el ritmo visual y el impacto del proyecto.
					<br />
					• Jugar con gráficas y vetas naturales para generar efectos dinámicos o sobrios, según el lenguaje del edificio.
					<br />
					<br />
					Con Fusión Petra, las piedras dejan de ser un material complementario para convertirse en una herramienta compositiva central,
					capaz de construir identidad y sofisticación desde lo esencial.
				</Text>
				<Cita
					cita="“Diseñar no es hacer bonito, es hacer con sentido.”"
					author="— Frase atribuida a múltiples diseñadores (origen no confirmado)"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
			<StyledGaleria id={id[4]} backgroundColor={COLORS.gray01}>
				<Titulo3 color={COLORS.gray08}>- Fusión Textura</Titulo3>
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
					Fusión Textura es la herramienta creativa que permite diseñar y personalizar fachadas combinando distintos acabados y colores,
					generando composiciones con profundidad, ritmo visual y una interacción dinámica con la luz.
					<br />
					<br />
					A través de esta propuesta, puedes:
					<br />
					• Combinar texturas mate, brillo y flameado dentro de una misma superficie arquitectónica.
					<br />
					• Aplicar cualquier acabado disponible en nuestras colecciones para generar fachadas con carácter único.
					<br />
					• Definir tus propios porcentajes de combinación, adaptando el diseño a las necesidades estéticas y técnicas del proyecto.
					<br />
					• Crear efectos de luz y sombra, aportando volumen, relieve y sofisticación a la envolvente del edificio.
					<br /> <br />
					Fusión Textura ofrece libertad creativa total, elevando la fachada a un lenguaje expresivo donde el acabado se convierte en
					materia de diseño.
				</Text>
				<Cita
					cita="“Donde el color y la textura se encuentran, nace el carácter del espacio.”"
					author="— Inspiración propia / Original"
					colorCita={COLORS.gray08}
					colorAutor={COLORS.gray04}
				/>
			</StyledGaleria>
		</>
	);
};

export default AplicacionesTline;

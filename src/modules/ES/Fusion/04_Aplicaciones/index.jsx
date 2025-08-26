import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { useRef, useCallback } from "react";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider, CardsSlider, CardsViewport, CardsTrack, Card, CardMedia, CardBody, NavButton } from "./styles";
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

	// Mapa opcional de textos por archivo (personalízalo según tus nombres de imagen)
	// Clave: nombre de archivo (con extensión). Valores: título, descripción y bullets.
	const textosAplicacionesPorArchivo = {
		"IMG_7253.jpg": {
			title: "Fachada Fusión 60×120 — Terracota cálida",
			description: "Composición contemporánea en tonos cálidos para reforzar ritmo y profundidad en fachada ventilada.",
			bullets: ["33% rojo terracota clásico", "33% rojo terracota suave", "33% crema"],
		},
		"IMG_7271.jpg": {
			title: "Fachada Fusión 60×120 — Neutros satinados",
			description: "Equilibrio de neutros con variación sutil de brillo para una lectura serena y técnica.",
			bullets: ["33% gris claro", "33% gris medio", "33% gris oscuro"],
		},
		"IMG_7289.jpg": {
			title: "Fachada Fusión 60×120 — Combinación cromática",
			description: "Paleta controlada con acentos verdes y terracotas para dinamizar el alzado sin perder orden.",
			bullets: ["33% rojo mate", "33% gris texturado", "33% verde brillo"],
		},
		"IMG_7339.jpg": {
			title: "Fachada Fusión 60×120 — Gris técnico",
			description: "Gama de grises técnicos con juntas enfatizadas para una estética sobria y precisa.",
			bullets: ["33% gris claro", "33% gris medio", "33% gris oscuro"],
		},
		"IMG_7455.jpg": {
			title: "Fachada Fusión 60×120 — Piedra neutra",
			description: "Lectura pétrea en neutros con variación tonal suave que aporta naturalidad y equilibrio.",
			bullets: ["33% beige liso", "33% marrón liso", "33% crema"],
		},
		"terracota01.jpg": {
			title: "Propuesta cromática — Terracota 01",
			description: "Secuencia cálida con modulación 60×120 para reforzar verticalidad y orden constructivo.",
			bullets: ["Terracota clásico", "Terracota suave", "Crema"],
		},
		"terracota03.jpg": {
			title: "Propuesta cromática — Terracota 03",
			description: "Variación de terracotas con neutros para una fachada equilibrada y de alto rendimiento.",
			bullets: ["33% Rojo mate", "Gris texturado", "Crema"],
		},
	};

	// Texto por defecto si no hay entrada en el mapa
	const textoDefaultAplicacion = {
		title: "Diseño de fachada ventilada Dolcker Fusión",
		description:
			"Propuesta cromática y composición flexible para proyectos contemporáneos. Combina colores y texturas para crear ritmo y profundidad en la envolvente.",
		bullets: ["33% rojo terracota clásico", "33% rojo terracota suave", "33% rojo crema"],
	};

	// Construye las tarjetas combinando imagen + textos
	const cardsAplicaciones = Object.keys(ImagenesAplicaciones)
		.sort()
		.map((key) => {
			const src = ImagenesAplicaciones[key].default;
			const fileName = key.split("/").pop();
			const meta = textosAplicacionesPorArchivo[fileName] || textoDefaultAplicacion;
			return { image: src, ...meta };
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
				{/* Slider de tarjetas con mezcla de texto + imagen */}
				<CardsSlider>
					<CardsViewport ref={viewportRef}>
						<CardsTrack>
							{cardsAplicaciones.map((card, index) => (
								<Card key={index} data-card="true">
									<CardBody>
										<h3>{card.title}</h3>
										<p>{card.description}</p>
										{card.bullets?.length ? (
											<ul>
												{card.bullets.map((b, i) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										) : null}
									</CardBody>
									<CardMedia>
										<img src={card.image} alt={`Aplicación Fusión ${index + 1}`} loading="lazy" />
									</CardMedia>
								</Card>
							))}
						</CardsTrack>
					</CardsViewport>
					<NavButton data-dir="prev" aria-label="Anterior" onClick={() => onNav("prev")}>
						‹
					</NavButton>
					<NavButton data-dir="next" aria-label="Siguiente" onClick={() => onNav("next")}>
						›
					</NavButton>
				</CardsSlider>
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

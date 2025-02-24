import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";

import img2 from "../../../assets/images/Dolcker/catalogo3-1-5.webp";
import img3 from "../../../assets/images/T5/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/VisualizadorNota";
import Text from "../../../components/Text";

import config from "../../../configs/configDolcker";

const Dolcker = ({ id }) => {
	const propsVisualizador = {
		text: "Pasa el ratón por los puntos para ver la información",
		type: "normal",
		// indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker T5 XL soluciona</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={img2}
					alt="Imagen Dolcker 2"
					caption="Sistema T5.
"
				/>
				<Text>
					Dolcker T5 XL: innovación y diseño para fachadas ventiladas de última
					generación.
					<br />
					<br />
					El <strong>Sistema DOL-T5 XL</strong> es una solución avanzada para
					fachadas ventiladas, diseñada para la instalación de revestimientos
					cerámicos de gran formato con un sistema de fijación híbrido,
					combinando grapa oculta y adhesivo estructural. Su diseño optimizado
					garantiza un montaje ligero, seguro y eficiente, utilizando materiales
					de la más alta calidad. Características Principales
					<br />
					<br />
					<strong>Sistema de fijación:</strong>
					<br />
					Grapa oculta para una estética limpia y uniforme.
					<br />
					Compatible con cerámica de 3,5 - 5,6 - 10,5 - 12 mm de espesor.
					<br />
					Juntas horizontales de 5-6 mm y juntas verticales de 2 mm o más,
					asegurando estabilidad y estética.
					<br />
					<br />
					<strong>Anclaje y perfilería:</strong>
					<br />
					Ménsulas simples y dobles en L de aluminio para una fijación robusta.
					<br />
					Perfiles verticales en T y L de aluminio extruido, lacados en negro,
					garantizando resistencia y durabilidad.
					<br />
					Anclaje expansivo inoxidable para fijación en forjados.
					<br />
					Anclaje con taco de nylon y tornillo para muros de ladrillo.
					<br />
					Tornillería auto-taladrante con arandela de EPDM de acero inoxidable,
					asegurando máxima sujeción.
					<br /> Tornillería auto-taladrante de cabeza plana lacada en acero
					inoxidable para una fijación discreta y resistente.
					<br />
					<br />
					<strong>Fijaciones:</strong>
					<br />
					Fijación mecánica con grapa oculta lacada en acero inoxidable con una
					salida de 5,6 mm.
					<br />
					Fijación química con adhesivo estructural SikaTack Panel, asegurando
					una unión fuerte y duradera.
					<br />
					<br />
					<strong>Otros componentes:</strong>
					<br /> Imprimación Sika Primer 210T, optimizando la adherencia del
					adhesivo.
					<br /> Cinta adhesiva de doble cara, mejorando la fijación inicial y
					facilitando la instalación.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				{/* <strong>Imagen Exterior G10(Arquitecto )</strong>
        <br />
        -Esquina {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Recerco {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Coronación {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Arranque {'( dibujo técnico/croquis por parte del arquitecto)'}
        <br />
        -Fachada {'( dibujo técnico/croquis por parte del arquitecto)'} */}
			</Text>
		</StyledDolcker>
	);
};

export default Dolcker;

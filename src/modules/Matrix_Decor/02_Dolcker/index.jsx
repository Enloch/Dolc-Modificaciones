import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import img2 from "../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../assets/images/DolckerMatrixDecor/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/Tline/VisualizadorTest";
import Text from "../../../components/Text";

import config from "../../../configs/configDolckerMatrixDecor";

const DolckerTline = ({ id }) => {
	const propsVisualizador = {
		text: "Pasa el ratón por los puntos para ver la información",
		type: "normal",
		indicadores: config,
		imgBackground: img3,
		alt: "Imagen de fondo con indicadores",
	};

	return (
		<StyledDolcker id={id} backgroundColor={COLORS.gray03}>
			<Titulo>Dolcker Matrix Decor soluciona</Titulo>
			<div className="dolcker-info">
				<ImageWithCaption
					src={img2}
					alt="Imagen Dolcker 2"
					caption="Sistema Matrix Decor con matrices de aluminio extruido."
				/>
				<Text>
					<strong>SISTEMA MATRIX DECOR</strong> es un innovador sistema de
					revestimiento de lamas de aluminio con un exclusivo mecanismo de
					colocación clipada, que garantiza un montaje rápido, seguro y sin
					complicaciones. Su amplia variedad de diseños y acabados lo convierte
					en una solución versátil para la creación de fachadas ventiladas,
					revestimientos interiores y paneles decorativos de alto impacto
					visual.
					<br />
					<br />
					Gracias a su cuidada estética y calidad premium,{" "}
					<strong>MATRIX DECOR</strong> es una opción ideal para proyectos de
					<strong> alta decoración</strong>, aportando sofisticación y
					modernidad a espacios interiores. Su combinación de diseño y
					funcionalidad permite transformar ambientes con un estilo
					contemporáneo y elegante, convirtiéndose en la elección perfecta para
					arquitectos y diseñadores que buscan un revestimiento distintivo y
					duradero.
				</Text>
			</div>
			<VisualizadorNota {...propsVisualizador} />
			<Text>
				<br />
			</Text>
		</StyledDolcker>
	);
};

export default DolckerTline;

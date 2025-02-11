import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import img2 from "../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-5.jpg";
import img3 from "../../../assets/images/DolckerMatrix/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "../../../components/Tline/VisualizadorNota";
import Text from "../../../components/Text";

import config from "../../../configs/configDolckerMatrix";

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
					SISTEMA MATRIX DECOR es un innovador sistema de revestimiento con
					lamas de aluminio de instalación <strong>cliplada</strong>, que
					garantiza un montaje rápido y eficiente.
					<br />
					<br />
					Gracias a su <strong>gran variedad de diseños</strong>, MATRIX DECOR
					ofrece una versatilidad excepcional para la creación de espacios
					únicos en:
					<br />
					<br />
					<strong>• Revestimientos interiores</strong>
					<br />
					<strong>• Paneles decorativos</strong>
					<br />
					<strong>• Baños, salones y portales</strong>
					<br />
					<strong>• Espacios comerciales y de oficina</strong>
					<br />
					<br />
					<strong>Diseña sin límites</strong>
					<br />
					<br />
					Elige entre una amplia gama de <strong>formas y colores</strong> para
					personalizar cada detalle y transformar cualquier ambiente con un
					estilo sofisticado y funcional.
					<br />
					<br />
					Con SISTEMA MATRIX DECOR, el diseño se adapta a tu creatividad.
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

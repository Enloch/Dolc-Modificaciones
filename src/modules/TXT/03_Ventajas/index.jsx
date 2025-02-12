import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import StyledVentajas from "./styles";
import img1 from "../../../assets/images/DolckerTXT/Ventajas/catalogo3-1-8.jpg";
import Text from "../../../components/Text";
import { COLORS } from "../../../global/GlobalStyles";
import Listado from "../../../components/Listado";
const VentajasTline = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Ventajas del sistema Dolcker TXT</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption=""
				columnSpan="6"
			/>
			<Text>
				Diseño, innovación y funcionalidad en un solo sistema para fachadas
				ventiladas.
			</Text>
			<Listado>
				<li>
					<strong>Fijación técnica mejorada:</strong> Adaptable a las
					necesidades estéticas y funcionales de cada proyecto.
				</li>
				<li>
					<strong>Sistema de fijación mecánica:</strong> Opción de fijación
					oculta o vista combinada con fijación elástica.
				</li>
				<li>
					Perfiles diseñados para un{" "}
					<strong>sistema de libre colocación</strong>, brindando flexibilidad
					total en el diseño.
				</li>
				<li>
					<strong>Versatilidad dimensional:</strong> Piezas en múltiples
					tamaños, espesores de 6, 9, 11 y 14 mm, y despiece a medida.
				</li>
				<li>
					Cámaras de hasta 20 cm, optimizando la{" "}
					<strong>eficiencia térmica y acústica.</strong>
				</li>
				<li>
					<strong>Acabados premium:</strong> Piezas con canto oculto lacado y
					texturas mate, flamed y honed.
				</li>
				<li>
					<strong>Montaje rápido y seguro</strong>, optimizando tiempos de
					instalación.
				</li>
				<li>
					<strong>Creatividad sin límites:</strong> Sistema con múltiples formas
					de colocación, permitiendo diseños innovadores con volúmenes y paños
					únicos.
				</li>
				<li>
					<strong>Perfilería personalizable:</strong> Lacado en colores RAL,
					imitaciones madera y opciones anodizadas.
				</li>
				<li>
					<strong>Opciones de fijación:</strong> Colocación con grapa vista o
					grapa oculta, según el estilo del proyecto.
				</li>
			</Listado>
			<Text>
				Más que un revestimiento, una solución que transforma la arquitectura.
			</Text>
		</StyledVentajas>
	);
};

export default VentajasTline;

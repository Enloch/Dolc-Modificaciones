import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledVentajas from "./styles";
import img1 from "@assets/images/T5/Ventajas/catalogo3-1-8.jpg";
import Text from "@components/Text";
import { COLORS } from "@global/GlobalStyles";
import Listado from "@components/Listado";

const Ventajas = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Advantages of the Dolcker T5 XL system</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption="Sistema T5"
				columnSpan="6"
			/>
			<Text>
				Advantages of the Ventilated Facade System and T5 with Large Format Porcelain Cladding
				<br />
				<br />
				Ventilated facades with large format porcelain cladding offer an innovative and highly efficient solution for the construction and renovation of buildings. The combination with chemical fixing systems optimizes installation and system performance, providing key benefits in terms of durability, energy efficiency, and design.
			</Text>
			<Listado>
				<strong>Máxima Durabilidad</strong>
				<br />
				<br />
				El porcelánico de gran formato, combinado con un sistema de fijación
				química, garantiza una resistencia superior a los impactos, agentes
				químicos y condiciones climáticas extremas. Gracias a su baja porosidad,
				el material es altamente resistente a la humedad, la radiación UV y los
				cambios bruscos de temperatura, evitando degradación, fisuras o
				desprendimientos a lo largo del tiempo
				<br />
				<br />
				<li>
					Inmunidad frente a productos químicos agresivos y contaminación
					ambiental.
				</li>
				<li>
					Comportamiento óptimo en zonas con climas extremos (altas
					temperaturas, heladas, lluvias ácidas, etc.).
				</li>
			</Listado>
			<Listado>
				<strong>Eficiencia Energética</strong>
				<br />
				<br />
				El sistema de fachada ventilada crea una cámara de aire que mejora el
				aislamiento térmico y acústico del edificio. Este efecto reduce la
				transmisión de calor en verano y minimiza las pérdidas térmicas en
				invierno, optimizando el consumo energético y mejorando el confort
				interior.
				<br />
				<br />
				<li>
					Contribución a la sostenibilidad y eficiencia del edificio,
					alineándose con estándares de construcción ecológica.
				</li>
			</Listado>
			<Listado>
				<strong>Versatilidad de Diseño</strong>
				<br />
				<br />
				El porcelánico de gran formato está disponible en una amplia variedad de
				acabados, colores y texturas, permitiendo diseñar fachadas modernas y
				sofisticadas. Su capacidad de imitar materiales naturales como piedra,
				madera o mármol ofrece una estética premium sin comprometer la
				durabilidad y el mantenimiento.
				<br />
				<br />
				<li>
					Diversidad de formatos y espesores que se adaptan a distintas
					soluciones arquitectónicas.
				</li>
				<li>
					Posibilidad de personalización según los requerimientos del proyecto.
				</li>
				<li>
					Acabados de alta gama con un impacto visual atractivo y elegante.
				</li>
			</Listado>
			<Listado>
				<strong>Montaje Rápido y Seguro</strong>
				<br />
				<br />
				La fijación química permite una instalación eficiente, evitando
				perforaciones y reduciendo los tiempos de montaje. Además, garantiza una
				adhesión homogénea y segura, minimizando riesgos de desprendimiento y
				ofreciendo una solución estructuralmente estable.
				<br />
				<br />
				<li>
					Sistemas de fijación adaptados a cada necesidad y tipo de proyecto.
				</li>
				<li>
					Menor tiempo de instalación en comparación con sistemas tradicionales.
				</li>
			</Listado>
			<Listado>
				<strong>Bajo Mantenimiento</strong>
				<br />
				<br />
				El porcelánico es un material de fácil limpieza y alta resistencia al
				paso del tiempo. No requiere tratamientos especiales ni repintados
				periódicos, lo que reduce los costos de mantenimiento a largo plazo.
				<br />
				<br />
				<li>
					Superficie no porosa que evita la acumulación de suciedad y moho.
				</li>
				<li>Fácil limpieza con agua y detergentes neutros.</li>
				<li>
					Mantenimiento prácticamente nulo, conservando su estética y
					funcionalidad durante décadas.
				</li>
			</Listado>
		</StyledVentajas>
	);
};

export default Ventajas;

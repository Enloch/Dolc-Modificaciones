import { useState } from "react";
import Text from "../../../components/Text";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import sistemas from "../../../assets/images/T5/Sistemas/sistemas.jpg";
import dolckerClip1 from "../../../assets/images/DolckerTline/detalles.jpg";
import dolckerClip2 from "../../../assets/images/DolckerTline/detalles.jpg";

import tc111 from "../../../assets/images/DolckerTline/detalles.jpg";
import tc112 from "../../../assets/images/DolckerTline/detalles.jpg";

import tc141 from "../../../assets/images/DolckerTline/detalles.jpg";
import tc142 from "../../../assets/images/DolckerTline/detalles.jpg";

import hc201 from "../../../assets/images/DolckerTline/detalles.jpg";
import hc202 from "../../../assets/images/DolckerTline/detalles.jpg";
import ImageWithCaption from "../../../components/ImageWithCaption";
import IMG1 from "../../../assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL GO_WEB.jpg";
import IMG2 from "../../../assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL GV_WEB.jpg";
import IMG3 from "../../../assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL SUPER PLUS_WEB.jpg";
import IMG4 from "../../../assets/images/GaleriaT5/inicio/Dolcker grapa T5 detalle_WEB.jpg";
import Modal from "../../../components/Modal";
const Sistemas = ({ id }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedCaption, setSelectedCaption] = useState("");

	const openModal = (imageSrc, caption) => {
		setSelectedImage(imageSrc);
		setSelectedCaption(caption);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setSelectedCaption("");
	};
	return (
		<>
			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Sistema constructivos</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Sistemas introducción"
					// caption="cita"
					columnSpan="6"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							Sistema
							<br />
							<strong>T5 XL GO</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[2]}>
							Sistema
							<br />
							<strong>T5 XL GV</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							Sistema
							<br />
							<strong>T5 XL PLUS</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>T5 XL GO</Titulo2>
				<Text>
					<strong>
						Sistema de fijación química + grapa oculta de sustentación
					</strong>
					<br />
					<br />
					<li>
						Ideal para proyectos que requieren una fijación discreta y robusta.
					</li>
					<li>Asegura una sujeción sólida manteniendo una estética limpia.</li>
					<li>
						Permite la libre dilatación del porcelánico sin interferencias
						visuales.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T5 XL GO"
					onClickFunc={() => openModal(IMG1, "Detalles tecnicos T5 XL GO")}
				/>
				{/* <ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip tabla"
					caption="Imágen tabla"
					columnSpan="6"
				/> */}
			</StyledSistemas>

			<StyledSistemas id={id[2]}>
				<Titulo2>T5 XL GV</Titulo2>
				<Text>
					<strong>Sistema de fijación química + grapa vista de sujeción</strong>
					<br />
					<br />
					<li>Incorpora grapas visibles como elemento de fijación y diseño.</li>
					<li>Aporta un toque técnico y contemporáneo a la fachada.</li>
					<li>
						Permite una instalación sencilla con un alto nivel de seguridad
						estructural.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG2}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T5 XL GV"
					onClickFunc={() => openModal(IMG2, "Detalles tecnicos T5 XL GV")}
				/>
				{/* <ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip tabla"
					caption="Imágen tabla"
					columnSpan="6"
				/> */}
			</StyledSistemas>

			<StyledSistemas id={id[3]}>
				<Titulo2>T5 XL PLUS</Titulo2>
				<Text>
					<strong>
						Sistema de fijación química + grapa oculta de retención trasera
					</strong>
					<br />
					<br />
					<li>
						Ofrece una sujeción reforzada sin afectar la estética del material.
					</li>
					<li>
						Perfecto para proyectos que requieren máxima seguridad en grandes
						formatos.
					</li>
					<li>
						Garantiza estabilidad ante cargas de viento y cambios de
						temperatura.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG3}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T5 XL PLUS"
					onClickFunc={() => openModal(IMG3, "Detalles tecnicos T5 XL PLUS")}
				/>
				<ImageWithCaption
					src={IMG1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles de arranque T5 XL PLUS"
					onClickFunc={() => openModal(IMG1, "Detalles de arranque T5 XL PLUS")}
				/>
				{/* <ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip tabla"
					caption="Imágen tabla"
					columnSpan="6"
				/> */}
			</StyledSistemas>
			<StyledSistemas>
				<Titulo2>GRAPAS T5 XL</Titulo2>
				<ImageWithCaption
					src={IMG4}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalle trasero colocación grapa T5 XL"
					onClickFunc={() => openModal(IMG4, "Detalle trasero colocación grapa T5 XL")}
				/>
				<Text>
					<strong>Punto de Dilatación en Grapa Cerámica grapas T5 XL</strong>
					<br />
					<br />
					El sistema T5 XL de fachadas cerámicas de formato grande, donde las
					piezas se fijan con adhesivos estructurales y se complementan con
					grapas metálicas de sustentación y retención, requiere prever puntos
					de dilatación para absorber los movimientos generados por los cambios
					de temperatura y humedad.
					<br />
					<br />
					Para ello, las grapas TX 5 * disponen tanto de puntos fijos y colisos,
					como de un espacio entre la pestaña de la grapa prptegido que permite
					la dilatación del porcelánico.
					<br />
					<br />
					<strong>1. Fijación de la Grapa y su Función en la Dilatación</strong>
					La grapa debe permitir un cierto grado de movilidad, evitando la
					generación de puntos rígidos que impidan la expansión y contracción
					natural de la cerámica. Esto es clave para evitar tensiones internas
					que puedan provocar fisuras o desprendimientos en el sistema de
					revestimiento.
					<br />
					<br />
					<strong>
						2. Importancia del Punto de Dilatación en Grapa Cerámica
					</strong>
					<br />
					<br />
					<li>
						<strong>Prevención de fisuras y desprendimientos:</strong> La
						cerámica experimenta variaciones dimensionales con los cambios de
						temperatura. Si no se respeta un espacio de dilatación adecuado,
						pueden generarse esfuerzos que comprometan su estabilidad.
					</li>
					<li>
						<strong>Durabilidad del sistema:</strong> Una planificación correcta
						de las juntas de dilatación garantiza la resistencia y longevidad
						del revestimiento, evitando fallos prematuros.
					</li>
					<li>
						<strong>Facilidad de instalación y mantenimiento:</strong> El
						espacio de dilatación facilita la correcta colocación de las piezas,
						permitiendo reemplazos o ajustes sin afectar el comportamiento
						general del sistema.
					</li>
				</Text>
			</StyledSistemas>
			<Modal
				isOpen={selectedImage !== null}
				onClose={closeModal}
				caption={selectedCaption}
			>
				<img src={selectedImage} alt="Ampliada" />
			</Modal>
		</>
	);
};

export default Sistemas;

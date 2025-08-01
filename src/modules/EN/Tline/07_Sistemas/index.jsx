import { useState } from "react";
import Text from "../../../../components/Text";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "../../../../global/GlobalStyles";
import Modal from "../../../../components/Modal";
import sistemas from "../../../../assets/images/DolckerTline/Sistemas/sistemas.webp";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import img1 from "../../../../assets/images/DolckerTline/Sistemas/DOLCKER_T-LINE SOLUCIONA GRAPA.jpg";
import img2 from "../../../../assets/images/DolckerTline/Sistemas/RENDER CLIP LINE 10 copia.jpg";
import img3 from "../../../../assets/images/DolckerTline/Sistemas/RENDER SISTEMA CLIP 14 copia.jpg";
import img4 from "../../../../assets/images/DolckerTline/Sistemas/Dolcker TLine T10 detalle tecnico_web.jpg";
import img5 from "../../../../assets/images/DolckerTline/Sistemas/Dolcker TLine T20 detalle tecnico_web.jpg";
const SistemasTline = ({ id }) => {
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
					caption=""
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[2]}>
							Sistema
							<br />
							<strong>T-Line Clip 10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							Sistema
							<br />
							<strong>T-Line Clip 20</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[4]}>
							Sistema
							<br />
							<strong>T-Line T10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[5]}>
							Sistema
							<br />
							<strong>T-Line T20</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Text>
					El sistema <strong>DOLCKER TLINE</strong> para fachadas de cerámica
					tipo dolcker es un sistema con perfilería de alta inercia y doble
					seguridad. Todos y cada uno de los elementos que componen este sistema
					están fabricados con materias primas de máxima calidad. Se trata de un
					sistema de fijación mecánica de clip + fijación química para la
					colocación de una cenefa de aluminio clipada al sistema , mediante una
					subestructura que está compuesta por ménsulas regulables de aluminio
					de alta calidad en forma de “L” de 3 mm de espesor, que transmiten
					esfuerzos y que van fijadas mediante anclaje a la estructura base del
					edificio (pared de ladrillo o forjado de hormigón).Sobre estas
					ménsulas se fijan mediante tornillos autotaladrantes de acero
					inoxidable los perfiles verticales de aluminio extruidos en forma
					de“T”de 3 mm de espesor.
					<br />
					<br />
					En estos perfiles en forma de “T” se atornillan unos perfiles
					horizontales en forma de “G”, permitiendo así que la pieza esté
					apoyada en su totalidad. Se trata del sistema idóneo para la
					colocación de cerámicas, permitiendo sustituir las piezas ya que
					dispone de un clip corredera de acero inoxidable logrando infinidad de
					colocaciones. Además permite lacar el perfil cenefa en función del
					color de su carpintería, permitiendo que el cliente elija el color de
					la misma . Se colocan al menos dos clips correderas en la parte
					superior de la pieza de arranque a 1/5 de distancia respecto a la
					longitud de la pieza. En el resto de piezas intermedias, se procederá
					a la colocación de al menos 4 clips por cada pieza de cerámica. Se le
					añadirá puntos de masilla poliuretano de pegado y sellado sika-111 o
					similar (4 por pieza) que nos permita absorber las dilataciones de la
					fachada en los clips correderas. Una vez situados todos los clip se
					procede a la colocación de la cenefa decoratica clipandose en los
					clips ya colocados.Este sistema dispone de un perfil de seguridad para
					formatos de dimensiones superiores a 100 cms para su colocacion con
					fijacion química , que permiten mejorar subciones de viento.
					<br />
					<br />
					Se trata sin duda de un sistema con múltiples opciones de composición
					de fachada ya que es posible romper las juntas verticales. Éstas
					juntas verticales se ven minimizadas a tan solo 1 mm potenciando de
					esta manera las juntas horizontales.
				</Text>
				{/* <ImageWithCaption
          src={dolckerClip1}
          alt='Dolcker-clip demostración'
          caption='Imágen demostración (Jorge)'
          columnSpan='5'
          isGray
        />
        <ImageWithCaption
          src={dolckerClip2}
          alt='Dolcker-clip tabla'
          caption='Imágen tabla (Jorge)'
          columnSpan='8'
          isGray
        /> */}
			</StyledSistemas>
			<StyledSistemas id={id[2]}>
				<Titulo2>T-Line Clip 10</Titulo2>
				<Text>
					Sistema de fachada compuesto por el perfil Dolcker Clip y un perfil
					decorativo lacado, diseñado para su instalación mediante clipado en un
					sistema de ranurado continuo.
				</Text>
				<ImageWithCaption
					src={img3}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T-Line Clip 10"
					onClickFunc={() =>
						openModal(img3, "Detalles tecnicos T-Line Clip 10")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[3]}>
				<Titulo2>T-Line Clip 20</Titulo2>
				<Text>
					Sistema de fachada con perfil Dolcker Clip y perfil decorativo lacado,
					diseñado para fijación mediante clipado con anclaje de grapa vista,
					proporcionando una solución estética y funcional.
				</Text>
				<ImageWithCaption
					src={img2}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T-Line Clip 20"
					onClickFunc={() =>
						openModal(img2, "Detalles tecnicos T-Line Clip 20")
					}
				/>
				<ImageWithCaption
					src={img1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T-Line Clip 20 sin perfil"
					onClickFunc={() =>
						openModal(img1, "Detalles tecnicos T-Line Clip 20 sin perfil")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[4]}>
				<Titulo2>T-Line T10</Titulo2>
				<Text>
					Perfil decorativo lacado fijado al sistema de fachada mediante
					fijación mecánica oculta, garantizando un acabado limpio y sin
					elementos visibles en la superficie.
				</Text>
				<ImageWithCaption
					src={img4}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T-Line T10"
					onClickFunc={() => openModal(img4, "Detalles tecnicos T-Line T10")}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[5]}>
				<Titulo2>T-Line T20</Titulo2>
				<Text>
					Perfil decorativo lacado fijado al sistema de fachada con fijación
					mecánica vista, ofreciendo una solución robusta y con un diseño
					industrial moderno.
				</Text>
				<ImageWithCaption
					src={img5}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos T-Line T20"
					onClickFunc={() => openModal(img5, "Detalles tecnicos T-Line T20")}
				/>
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

export default SistemasTline;

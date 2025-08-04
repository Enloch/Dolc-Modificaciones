import { useState } from "react";
import Text from "@components/Text";
import { Titulo, Titulo2 } from "@components/Titulos";
import StyledSistemas, { Enlaces } from "./styles";
import { COLORS } from "@global/GlobalStyles";
import sistemas from "@assets/images/T5/Sistemas/sistemas.jpg";
import ImageWithCaption from "@components/ImageWithCaption";
import IMG1 from "@assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL GO_WEB.jpg";
import IMG2 from "@assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL GV_WEB.jpg";
import IMG3 from "@assets/images/GaleriaT5/inicio/Detalles tecnicos web T5 XL SUPER PLUS_WEB.jpg";
import IMG4 from "@assets/images/GaleriaT5/inicio/Dolcker grapa T5 detalle_WEB.jpg";
import Modal from "@components/Modal";
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
				<Titulo>Construction systems</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Sistemas introducción"
					// caption="cita"
					columnSpan="6"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							System
							<br />
							<strong>T5 XL GO</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[2]}>
							System
							<br />
							<strong>T5 XL GV</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							System
							<br />
							<strong>T5 XL PLUS</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>T5 XL GO</Titulo2>
				<Text>
					<strong>Chemical fixing system + concealed support clip</strong>
					<br />
					<br />
					<li>Ideal for projects requiring a discreet and robust fixing.</li>
					<li>Ensures a solid hold while maintaining a clean aesthetic.</li>
					<li>
						Allows free expansion of porcelain without visual interference.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T5 XL GO"
					onClickFunc={() => openModal(IMG1, "Technical details T5 XL GO")}
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
					<strong>Chemical fixing system + exposed fixing clip</strong>
					<br />
					<br />
					<li>Incorporates visible clips as a fixing and design element.</li>
					<li>Adds a technical and contemporary touch to the facade.</li>
					<li>
						Allows easy installation with a high level of structural safety.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG2}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T5 XL GV"
					onClickFunc={() => openModal(IMG2, "Technical details T5 XL GV")}
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
						Chemical fixing system + concealed rear retention clip
					</strong>
					<br />
					<br />
					<li>
						Provides reinforced holding without affecting the material's
						aesthetics.
					</li>
					<li>
						Perfect for projects requiring maximum safety in large formats.
					</li>
					<li>Ensures stability against wind loads and temperature changes.</li>
				</Text>
				<ImageWithCaption
					src={IMG3}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T5 XL PLUS"
					onClickFunc={() => openModal(IMG3, "Technical details T5 XL PLUS")}
				/>
				<ImageWithCaption
					src={IMG1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Startup details T5 XL PLUS"
					onClickFunc={() => openModal(IMG1, "Startup details T5 XL PLUS")}
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
					caption="Rear detail T5 XL clip placement"
					onClickFunc={() =>
						openModal(IMG4, "Rear detail T5 XL clip placement")
					}
				/>
				<Text>
					<strong>Expansion Point in Ceramic Clip T5 XL clips</strong>
					<br />
					<br />
					The T5 XL system for large-format ceramic facades, where the pieces
					are fixed with structural adhesives and complemented with metal
					support and retention clips, requires expansion points to absorb
					movements caused by changes in temperature and humidity.
					<br />
					<br />
					For this, TX 5 * clips have both fixed points and slots, as well as a
					space between the clip tab that allows porcelain expansion.
					<br />
					<br />
					<strong>1. Clip Fixing and Its Expansion Function</strong>
					The clip must allow a certain degree of mobility, avoiding the
					creation of rigid points that prevent the natural expansion and
					contraction of the ceramic. This is key to avoiding internal stresses
					that could cause cracks or detachment in the cladding system.
					<br />
					<br />
					<strong>2. Importance of the Expansion Point in Ceramic Clip</strong>
					<br />
					<br />
					<li>
						<strong>Prevention of cracks and detachment:</strong> Ceramic
						undergoes dimensional changes with temperature variations. If
						adequate expansion space is not provided, stresses may arise that
						compromise its stability.
					</li>
					<li>
						<strong>System durability:</strong> Proper planning of expansion
						joints ensures the resistance and longevity of the cladding,
						preventing premature failures.
					</li>
					<li>
						<strong>Ease of installation and maintenance:</strong> The expansion
						space facilitates the correct placement of the pieces, allowing
						replacements or adjustments without affecting the general behavior
						of the system.
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

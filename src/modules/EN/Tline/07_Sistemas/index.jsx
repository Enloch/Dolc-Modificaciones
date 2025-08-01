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
				<Titulo>Construction systems</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Systems introduction"
					caption=""
					columnSpan="5"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[2]}>
							System
							<br />
							<strong>T-Line Clip 10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							System
							<br />
							<strong>T-Line Clip 20</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[4]}>
							System
							<br />
							<strong>T-Line T10</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[5]}>
							System
							<br />
							<strong>T-Line T20</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Text>
					<strong>DOLCKER TLINE</strong> system for ceramic facades (dolcker
					type) is a system with high inertia profiles and double security. All
					components of this system are made with top-quality raw materials.
					It's a mechanical fixing system with clip + chemical fixing for the
					installation of an aluminum decorative profile clipped to the system,
					through a substructure composed of adjustable aluminum brackets in "L"
					shape with 3mm thickness, which transmit forces and are fixed to the
					building's base structure (brick wall or concrete slab).
					<br />
					<br />
					On these brackets, vertical extruded aluminum profiles in "T" shape
					with 3mm thickness are fixed using stainless steel self-drilling
					screws. Horizontal profiles in "G" shape are screwed onto these "T"
					profiles, allowing the piece to be fully supported. It's the ideal
					system for ceramic installation, allowing piece replacement since it
					includes a stainless steel sliding clip enabling countless
					installation options. Additionally, it allows painting the decorative
					profile according to the carpentry color, letting the client choose
					the color. At least two sliding clips are installed on the top of the
					starting piece at 1/5 distance from the piece length. For intermediate
					pieces, at least 4 clips per ceramic piece will be installed.
					Polyurethane adhesive/sealant (Sika-111 or similar) will be added (4
					points per piece) to absorb facade expansions in the sliding clips.
					Once all clips are placed, the decorative profile is installed by
					clipping onto the placed clips. This system includes a safety profile
					for formats larger than 100cm for installation with chemical fixing,
					improving wind suction solutions.
					<br />
					<br />
					Undoubtedly, it's a system with multiple facade composition options
					since vertical joints can be broken. These vertical joints are
					minimized to just 1mm, enhancing horizontal joints.
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
					Facade system composed of the Dolcker Clip profile and a decorative
					lacquered profile, designed for installation by clipping onto a
					continuous grooved system.
				</Text>
				<ImageWithCaption
					src={img3}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T-Line Clip 10"
					onClickFunc={() =>
						openModal(img3, "Technical details T-Line Clip 10")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[3]}>
				<Titulo2>T-Line Clip 20</Titulo2>
				<Text>
					Facade system with Dolcker Clip profile and decorative lacquered
					profile, designed for fixing by clipping with visible staple
					anchorage, providing an aesthetic and functional solution.
				</Text>
				<ImageWithCaption
					src={img2}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T-Line Clip 20"
					onClickFunc={() =>
						openModal(img2, "Technical details T-Line Clip 20")
					}
				/>
				<ImageWithCaption
					src={img1}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T-Line Clip 20 without profile"
					onClickFunc={() =>
						openModal(img1, "Technical details T-Line Clip 20 without profile")
					}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[4]}>
				<Titulo2>T-Line T10</Titulo2>
				<Text>
					Decorative lacquered profile fixed to the facade system by hidden
					mechanical fixing, ensuring a clean finish without visible elements on
					the surface.
				</Text>
				<ImageWithCaption
					src={img4}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T-Line T10"
					onClickFunc={() => openModal(img4, "Technical details T-Line T10")}
				/>
			</StyledSistemas>
			<StyledSistemas id={id[5]}>
				<Titulo2>T-Line T20</Titulo2>
				<Text>
					Decorative lacquered profile fixed to the facade system with visible
					mechanical fixing, offering a robust solution with a modern industrial
					design.
				</Text>
				<ImageWithCaption
					src={img5}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Technical details T-Line T20"
					onClickFunc={() => openModal(img5, "Technical details T-Line T20")}
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

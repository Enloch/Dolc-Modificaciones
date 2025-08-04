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
				<Titulo>Systèmes constructifs</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Sistemas introducción"
					// caption="cita"
					columnSpan="6"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							Système
							<br />
							<strong>T5 XL GO</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[2]}>
							Système
							<br />
							<strong>T5 XL GV</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							Système
							<br />
							<strong>T5 XL PLUS</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>

			<StyledSistemas id={id[1]}>
				<Titulo2>T5 XL GO</Titulo2>
				<Text>
					<strong>Système de fixation chimique + clip de support caché</strong>
					<br />
					<br />
					<li>
						Idéal pour les projets nécessitant une fixation discrète et solide.
					</li>
					<li>
						Assure une prise solide tout en maintenant une apparence esthétique.
					</li>
					<li>
						Permet l'expansion libre de la céramique sans interférer
						visuellement.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG1}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					caption="Détails techniques T5 XL GO"
					onClickFunc={() => openModal(IMG1, "Détails techniques T5 XL GO")}
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
					<strong>
						Système de fixation chimique + clip de fixation visible
					</strong>
					<br />
					<br />
					<li>
						Intègre des clips visibles comme un élément de fixation et de
						design.
					</li>
					<li>Ajoute un touché technique et contemporain à la façade.</li>
					<li>
						Permet une installation facile avec un haut niveau de sécurité
						structurale.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG2}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					caption="Détails techniques T5 XL GV"
					onClickFunc={() => openModal(IMG2, "Détails techniques T5 XL GV")}
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
					<strong>Système de fixation chimique + clip de fixation caché</strong>
					<br />
					<br />
					<li>
						Fournit une prise renforcée sans affecter l'apparence du matériau.
					</li>
					<li>
						Idéal pour les projets nécessitant une sécurité maximale dans les
						formats grands.
					</li>
					<li>
						Assure une stabilité contre les charges de vent et les variations de
						la température.
					</li>
				</Text>
				<ImageWithCaption
					src={IMG3}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					caption="Détails techniques T5 XL PLUS"
					onClickFunc={() => openModal(IMG3, "Détails techniques T5 XL PLUS")}
				/>
				<ImageWithCaption
					src={IMG1}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					caption="Détails de démarrage T5 XL PLUS"
					onClickFunc={() => openModal(IMG1, "Détails de démarrage T5 XL PLUS")}
				/>
				{/* <ImageWithCaption
					src={dolckerClip2}
					alt="Dolcker-clip tabla"
					caption="Imágen tabla"
					columnSpan="6"
				/> */}
			</StyledSistemas>
			<StyledSistemas>
				<Titulo2>Agrafes T5 XL</Titulo2>
				<ImageWithCaption
					src={IMG4}
					alt="Démonstration Dolcker-clip"
					columnSpan="6"
					caption="Détail de la mise en place du clip T5 XL"
					onClickFunc={() =>
						openModal(IMG4, "Détail de la mise en place du clip T5 XL")
					}
				/>
				<Text>
					<strong>Point d'expansion dans le clip en céramique T5 XL</strong>
					<br />
					<br />
					Le système T5 XL pour les façades en céramique à grands formats, où
					les pieces sont fixées avec des adhésifs structuraux et complétées
					avec des supports et des clips de retenue en métal, nécessite des
					points d'expansion pour absorber les mouvements causés par les
					variations de température et d'humidité.
					<br />
					<br />
					Pour cela, les clips TX 5 * ont à la fois des points fixes et des
					fentes, ainsi qu'un espace entre la tige du clip qui permet à la
					céramique d'expansion.
					<br />
					<br />
					<strong>1. Fixation du clip et sa fonction d'expansion</strong>
					Le clip doit permettre un certain degré de mobilité, évitant la
					création des points rigides qui empêchent l'expansion et la
					contraction naturelle du céramique. C'est la clé pour éviter les
					tensions internes qui pourraient causer des fissures ou des
					détachements dans le système de revêtement.
					<br />
					<br />
					<strong>
						2. Importance du point d'expansion dans le clip en céramique
					</strong>
					<br />
					<br />
					<li>
						<strong>Prévention des fissures et détachements:</strong> Le
						céramique subit des changements de dimension avec les variations de
						température. Si non, les tensions peuvent se développer et
						compromettre sa stabilité.
					</li>
					<li>
						<strong>Durabilité du système:</strong> Le planification des joints
						d'expansion garantit la résistance et la longévité du revêtement,
						prenant en charge les échecs prématurés.
					</li>
					<li>
						<strong>Facilité d'installation et de maintenance:</strong> L'espace
						d'expansion facilite le placement correct des pièces, permettant des
						remplacements ou des ajustements sans affecter le comportement
						général du système.
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

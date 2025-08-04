import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledDolcker from "./styles";
import { COLORS } from "@global/GlobalStyles";
import img1 from "@assets/images/DolckerTXT/Dolcker/catalogo3-1-4.jpg";
import img4 from "@assets/images/DolckerTXT/Dolcker/catalogo3-1-7.jpg";
import VisualizadorNota from "@components/TXT/VisualizadorNota";
import Text from "@components/Text";
import Modal from "@components/Modal";
import { useState } from "react";

import config from "@configs/configDolckerTXT";

const DolckerTline = ({ id }) => {
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

  const propsVisualizador = {
    text: "Passez la souris sur les points pour voir les informations",
    type: "normal",
    indicadores: config,
    imgBackground: img4,
    alt: "Image de fond avec indicateurs",
  };

  return (
    <>
      <Modal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        caption={selectedCaption}
      >
        <img src={selectedImage} alt="Ampliada" />
      </Modal>
      <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
        <Titulo>Dolcker TXT résout</Titulo>
        <div className="dolcker-info">
          {/* <ImageWithCaption
						src={img3}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 11"
						onClickFunc={() => openModal(img3, "Sistema TXT 11")}
					/>
					<ImageWithCaption
						src={img2}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 12"
						onClickFunc={() => openModal(img2, "Sistema TXT 12")}
					/>
					<ImageWithCaption
						src={img1}
						alt="Imagen Dolcker 2"
						caption="Sistema TXT 13"
						onClickFunc={() => openModal(img1, "Sistema TXT 13")}
					/> */}
          <ImageWithCaption
            src={img1}
            alt="Imagen Dolcker 2"
            caption="Sistema TXT 11"
          />
          <Text>
            Innovation en façades ventilées.
            <br />
            <br />
            La nouvelle ligne de façades ventilées Dolcker TXT est conçue pour
            offrir versatilité, efficacité et un design innovant, s'adaptant
            aux exigences architecturales les plus avant-gardistes.
            <br />
            <br />
            Sa structure modulaire et ses différentes options de fixation permettent
            des configurations personnalisées qui garantissent un résultat esthétique
            et fonctionnel de haut niveau.
          </Text>
          <Text>
            • TXT 11 – Façades avec alignements de revêtement différenciés,
            mettant en valeur une jointure verticale laquée dans la couleur choisie par le
            concepteur.
            <br />
            <br />• TXT 13 – Façades intégrant des profils stratégiques pour
            générer des ombres et valoriser la volumétrie.
          </Text>

        </div>

        <VisualizadorNota {...propsVisualizador} />
      </StyledDolcker>
    </>
  );
};

export default DolckerTline;

import Text from "@components/Text";
import { Titulo, Titulo2 } from "@components/Titulos";
import StyledSistemas, { Enlaces, StyledGrid, LegendList } from "./styles";
import { COLORS } from "@global/GlobalStyles";
import sistemas from "@assets/images/DolckerTXT/Sistemas/sistemas.jpg";

import esquinaTC14_0_0 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-0.jpg";
import esquinaTC14_0_30 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-30.jpg";
import esquinaTC14_0_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-60.jpg";
import esquinaTC14_30_30 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-30.jpg";
import esquinaTC14_30_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-60.jpg";
import esquinaTC14_60_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 60-60.jpg";

import recercoTC14_0 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 0.jpg";
import recercoTC14_30 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 30.jpg";
import recercoTC14_60 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 60.jpg";

import ImageWithCaption from "@components/ImageWithCaption";
import Reemplazo from "@assets/images/DolckerMatrix/temporal.webp";
import { useState } from "react";

import txt11 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT11.jpg";
import txt12 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT12.jpg";
import txt13 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT13.jpg";

import Modal from "@components/Modal";

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
      <Modal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        caption={selectedCaption}
      >
        <img src={selectedImage} alt="Ampliada" />
      </Modal>

      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Systèmes constructifs</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt="Sistemas introducción"
          caption=""
          columnSpan="8"
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              Système
              <br />
              <strong>TXT-11</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[2]}>
              Système
              <br />
              <strong>TXT-13</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[3]}>
              Système
              <br />
              <strong>TXT-TC14 Détails coin</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[4]}>
              Système
              <br />
              <strong>TXT-TC14 Détails recerco</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[5]}>
              <br />
              <strong>TXT-TC14 Légende</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>
      <StyledSistemas id={id[1]}>
        <Titulo2>TXT-11</Titulo2>
        <Text>
          Fachadas con alineaciones de revestimiento diferenciadas, destacando
          una junta vertical lacada en el color elegido por el diseñador.
        </Text>
        <ImageWithCaption
          src={txt11}
          alt="Dolcker-clip demostración"
          columnSpan="6"
          caption="Detalles tecnicos TXT-11"
        />
      </StyledSistemas>
      <StyledSistemas id={id[2]}>
        <Titulo2>TXT-13</Titulo2>
        <Text>
          Façades intégrant des profils stratégiques pour générer des ombres et
          valoriser la volumétrie.
        </Text>
        <ImageWithCaption
          src={txt13}
          alt="Dolcker-clip demostración"
          columnSpan="6"
          caption="Detalles tecnicos TXT-13"
        />
      </StyledSistemas>
      <StyledSistemas id={id[3]}>
        <Titulo2>
          TXT-TC14
          <br />
          Détails coin
        </Titulo2>
        <StyledGrid>
          <ImageWithCaption
            src={esquinaTC14_0_0}
            alt="Dolcker-clip tabla"
            caption="TC14 0-0"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_0_0, "TC14 0-0")}
          />
          <ImageWithCaption
            src={esquinaTC14_0_30}
            alt="Dolcker-clip tabla"
            caption="TC14 0-30"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_0_30, "TC14 0-30")}
          />
          <ImageWithCaption
            src={esquinaTC14_0_60}
            alt="Dolcker-clip tabla"
            caption="TC14 0-60"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_0_60, "TC14 0-60")}
          />
          <ImageWithCaption
            src={esquinaTC14_30_30}
            alt="Dolcker-clip tabla"
            caption="TC14 30-30"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_30_30, "TC14 30-30")}
          />
          <ImageWithCaption
            src={esquinaTC14_30_60}
            alt="Dolcker-clip tabla"
            caption="TC14 30-60"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_30_60, "TC14 30-60")}
          />
          <ImageWithCaption
            src={esquinaTC14_60_60}
            alt="Dolcker-clip tabla"
            caption="TC14 60-60"
            columnSpan="1"
            onClickFunc={() => openModal(esquinaTC14_60_60, "TC14 60-60")}
          />
        </StyledGrid>
      </StyledSistemas>
      <StyledSistemas id={id[4]}>
        <Titulo2>
          TXT-TC14
          <br />
          Détails recerco
        </Titulo2>
        <StyledGrid>
          <ImageWithCaption
            src={recercoTC14_0}
            alt="Dolcker-clip tabla"
            caption="TC14 salida 0"
            columnSpan="1"
            onClickFunc={() => openModal(recercoTC14_0, "TC14 salida 0")}
          />
          <ImageWithCaption
            src={recercoTC14_30}
            alt="Dolcker-clip tabla"
            caption="TC14 salida 30"
            columnSpan="1"
            onClickFunc={() => openModal(recercoTC14_30, "TC14 salida 30")}
          />
          <ImageWithCaption
            src={recercoTC14_60}
            alt="Dolcker-clip tabla"
            caption="TC14 salida 60"
            columnSpan="1"
            onClickFunc={() => openModal(recercoTC14_60, "TC14 salida 60")}
          />
        </StyledGrid>
      </StyledSistemas>
      <StyledSistemas id={id[5]}>
        <Titulo2>
          TXT-TC14
          <br />
          Légende
        </Titulo2>

        <LegendList>
          <p data-number="01">Mur d'ouvrage ou en béton</p>
          <p data-number="02">Revêtement</p>
          <p data-number="03">Isolation</p>
          <p data-number="04">Chambre d'air ventilée</p>
          <p data-number="05">Profil T vertical</p>
          <p data-number="06">Ménsula</p>
          <p data-number="07">Cheville en Nylon</p>
          <p data-number="08">Vis autoperceuse</p>
          <p data-number="09">Céramique Dolcker</p>
          <p data-number="10">Profil Dolcker carré</p>
          <p data-number="11">Profil Dolcker TXT</p>
          <p data-number="12">Vis autoperceuse à tête plate</p>
          <p data-number="13">Fixation chimique</p>
          <p data-number="14">Ancrage expansif INOX</p>
          <p data-number="15">Profil Dolcker de finition</p>
          <p data-number="16">Feuille Kerdi</p>
          <p data-number="17">Rondelle</p>
          <p data-number="18">Panneau Composite</p>
          <p data-number="19">Céramique</p>
          <p data-number="20">Demi-agrape</p>
          <p data-number="21">Agrafe</p>
          <p data-number="22">Sikatack panneau</p>
          <p data-number="23">Ruban double face</p>
          <p data-number="24">Équerre</p>
          <p data-number="25">Cheville à clou</p>
          <p data-number="26">Extrudé</p>
          <p data-number="27">Joint fenêtre</p>
          <p data-number="28">Grille en aluminium perforé</p>
          <p data-number="29">Feuille d'étanchéité</p>
          <p data-number="30">Tôle en aluminium pliée laquée</p>
          <p data-number="31">Profil F extrudé</p>
          <p data-number="32">Séparateur</p>
          <p data-number="33">Polystyrène expansé</p>
          <p data-number="34">Vis autoperceuse à tête plate</p>
          <p data-number="35">Frise décorative</p>
        </LegendList>
      </StyledSistemas>
    </>
  );
};

export default SistemasTline;

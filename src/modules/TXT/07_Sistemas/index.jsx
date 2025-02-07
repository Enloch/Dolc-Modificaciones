import Text from "../../../components/Text";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import StyledSistemas, { Enlaces, StyledGrid, LegendList } from "./styles";
import { COLORS } from "../../../global/GlobalStyles";
import sistemas from "../../../assets/images/DolckerTXT/Sistemas/sistemas.jpg";

import esquinaTC14_0_0 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-0.jpg";
import esquinaTC14_0_30 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-30.jpg";
import esquinaTC14_0_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-60.jpg";
import esquinaTC14_30_30 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-30.jpg";
import esquinaTC14_30_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-60.jpg";
import esquinaTC14_60_60 from "../../../assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 60-60.jpg";

import recercoTC14_0 from "../../../assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 0.jpg";
import recercoTC14_30 from "../../../assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 30.jpg";
import recercoTC14_60 from "../../../assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 60.jpg";

import ImageWithCaption from "../../../components/ImageWithCaption";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
import { useState } from "react";
import Modal from "../../../components/Modal";

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
      <Modal isOpen={selectedImage !== null} onClose={closeModal} caption={selectedCaption}>
        <img src={selectedImage} alt="Ampliada" />
      </Modal>

      <StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Sistema constructivos</Titulo>
        <ImageWithCaption
          src={sistemas}
          alt="Sistemas introducción"
          caption=""
          columnSpan="8"
        />
        <Enlaces>
          <li>
            <a href={"#" + id[1]}>
              Sistema
              <br />
              <strong>TXT-TC14 Detalles esquina</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[2]}>
              Sistema
              <br />
              <strong>TXT-TC14 Detalles recerco</strong>
            </a>
          </li>
          <li>
            <a href={"#" + id[3]}>
              <br />
              <strong>TXT-TC14 Leyenda</strong>
            </a>
          </li>
        </Enlaces>
      </StyledSistemas>

      <StyledSistemas id={id[1]}>
        <Titulo2>TXT-TC14<br />Detalles esquina</Titulo2>
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
      <StyledSistemas id={id[2]}>
        <Titulo2>TXT-TC14<br />Detalles recerco</Titulo2>
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
      <StyledSistemas id={id[3]}>
        <Titulo2>TXT-TC14<br />Leyenda</Titulo2>
        <Text>
          <LegendList>
            <p>01 Muro de obra o de hormigón</p>
            <p>02 Recubrimiento</p>
            <p>03 Aislamiento</p>
            <p>04 Cámara deaire ventilada</p>
            <p>05 Perfil T vertical</p>
            <p>06 Ménsula</p>
            <p>07 Taco de Nylon</p>
            <p>08 Tornillo autotaladrante</p>
            <p>09 Cerámica Dolcker</p>
            <p>10 Perfil Dolcker cuadrado</p>
            <p>11 Perfil Dolcker TXT</p>
            <p>12 Tornillo autotaladrante cabeza plana</p>
            <p>13 Fijación química</p>
            <p>14 Anclaje expansivo INOX</p>
            <p>15 Perfil Dolcker terminación</p>
            <p>16 Lámina Kerdi</p>
            <p>17 Arandela</p>
            <p>18 Panel Composite</p>
            <p>19 Cerámica</p>
            <p>20 Media grapa</p>
            <p>21 Grapa</p>
            <p>22 Sikatack panel</p>
            <p>23 Cinta doble cara</p>
            <p>24 Angular</p>
            <p>25 Taco clavo</p>
            <p>26 Extrusionado</p>
            <p>27 Sellado ventana</p>
            <p>28 Rejilla Aluminio perforada</p>
            <p>29 Lámina impermeabilizante</p>
            <p>30 Chapa de Aluminio plegada lacada</p>
            <p>31 Perfil F extrusionado</p>
            <p>32 Separador</p>
            <p>33 Poliestireno expandido</p>
            <p>34 Tornillo autotaladrante cabeza plana</p>
            <p>35 Cenefa decorativa</p>
          </LegendList>
        </Text>
      </StyledSistemas>
    </>
  );
};

export default SistemasTline;

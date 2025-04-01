import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerMatrix/Caracteristicas/caracteristicas.jpg";
import ImagenJorge from "../../../../assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "../../../../assets/images/DolckerTline/tablas.jpg";
import Cdim1 from "../../../../assets/icons/caracteristicasTline/caracteristicas dimensionales 1.svg";
import Cdim2 from "../../../../assets/icons/caracteristicasTline/caracteristicas dimensionales 2.svg";
import Cmec1 from "../../../../assets/icons/caracteristicasTline/caracterisiticqas mecanicas 1.svg";
import Cmec2 from "../../../../assets/icons/caracteristicasTline/caracterisiticqas mecanicas 2.svg";
import Chig1 from "../../../../assets/icons/caracteristicasTline/caracteristicas higienicas 1.svg";
import Chig2 from "../../../../assets/icons/caracteristicasTline/caracteristicas higienicas 2.svg";
import Norm1 from "../../../../assets/icons/caracteristicasTline/normas complementarias 1.svg";
import Norm2 from "../../../../assets/icons/caracteristicasTline/normas complementarias 2.svg";

import Text from "../../../../components/Text";
import Listado from "../../../../components/Listado";
import Reemplazo from "../../../../assets/images/DolckerMatrix/temporal.webp";
const CaracteristicasTline = ({ id }) => {
  return (
    <>
      <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Características técnicas</Titulo>
        <ImageWithCaption
          src={Reemplazo}
          alt='Render por parte de 7475'
          caption=''
          columnSpan='6'
        />
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
        </Text>
        <Text>
          <strong>Sección</strong>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et
          ex soluta veniam modi temporibus corporis rerum minima quibusdam
          aperiam ipsam error consequatur nam hic esse sequi ullam,
          exercitationem tempora!
        </Text>
      </StyledCaracteristicas>
      <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
        <Titulo>Datos técnicos</Titulo>
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <Text>
          <strong>Textos (Jorge)</strong>
        </Text>
        {/* <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
          isGray
        />
        <Text>
          <strong>Textos (Jorge)</strong>
        </Text>
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        />
        <ImageWithCaption
          src={Reemplazo}
          alt='Imágenes técnicas (Jorge)'
          caption=''
          columnSpan='6'
        /> */}
      </StyledCaracteristicas>
    </>
  );
};

export default CaracteristicasTline;

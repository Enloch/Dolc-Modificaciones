import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../assets/images/DolckerMatrix/Caracteristicas/caracteristicas.jpg";
import ImagenJorge from "../../../assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "../../../assets/images/DolckerTline/tablas.jpg";

import Text from "../../../components/Text";
import Listado from "../../../components/Listado";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
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
        
      </StyledCaracteristicas>
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
    </>
  );
};

export default CaracteristicasTline;

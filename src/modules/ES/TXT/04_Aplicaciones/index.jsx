import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "@components/Titulos";
import { COLORS, DISTANCES } from "@global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-9.jpg";
import img2 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-10.jpg";
import logos from "@assets/images/DolckerTXT/Aplicaciones/logos.gif";
import img3 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-12.jpg";
import img5 from "@assets/images/DolckerTXT/Aplicaciones/catalogo3-1-13.jpg";
import Cita from "@components/Cita";
import ImageWithCaptionSlider from "@components/ImageWithCaptionSlider";
import Reemplazo from "@assets/images/DolckerTXT/temporal.webp";
const AplicacionesTline = ({ id }) => {
  return (
    <>
      <StyledAplicaciones
        id={id[0]}
        backgroundColor={COLORS.gray02}
        rowGap={DISTANCES.small}
      >
        <Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
        <ImageWithCaption
          src={img1}
          alt="Imagen de Aplicaciones 1"
          caption=""
          columnSpan="6"
        />
        <Cita
          cita="La arquitectura debe ser la expresión de nuestro tiempo, pero también debe ser intemporal."
          author=" Daniel Libeskind"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[1]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
        <ImageWithCaption
          src={img2}
          alt="Imagen de Aplicaciones 1"
          caption=""
          columnSpan="6"
        />
        <Cita
          cita="El diseño urbano es el arte de crear lugares que sean habitables, funcionales y hermosos"
          author="Jan Gehlr"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[2]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
        <ImageWithCaption
          src={img3}
          alt="Imagen de Aplicaciones 1"
          //   caption='Jorge dará la referencia o imágen.' 
          columnSpan="6"
        />
        <Cita
          cita="La ciudad del futuro debe ser una ciudad para todos."
          author="Le Corbusier"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
    </>
  );
};

export default AplicacionesTline;

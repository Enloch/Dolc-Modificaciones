import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-9.webp";
import img2 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-10.jpg";
import img3 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-11.jpg";
import img4 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-12.jpg";
import img5 from "../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-13.jpg";
import Cita from "../../../components/Cita";
import ImageWithCaptionSlider from "../../../components/ImageWithCaptionSlider";

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
          alt='Imagen de Aplicaciones 1'
          caption=''
          columnSpan='6'
        />
        <Cita
          cita='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          author='Autor '
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
          alt='Imagen de Aplicaciones 1'
          caption=''
          columnSpan='6'
        />
        <Cita
          cita='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          author='Autor '
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
          alt='Imagen de Aplicaciones 1'
          //   caption='Jorge dará la referencia o imágen.'
          columnSpan='6'
        />
        <Cita
          cita='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          author='Autor '
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[3]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Interiores</Titulo2>
        <ImageWithCaptionSlider
          images={[
            {
              src: img4,
              alt: "Imagen de Aplicaciones 4",
              caption: "Rellenar Informacion",
            },
            {
              src: img5, // Asegúrate de definir img5 en alguna parte de tu código
              alt: "Imagen de Aplicaciones 5",
              caption: "Rellenar Información",
            },
            // ... puedes agregar más imágenes aquí
          ]}
          columnSpan='6'
        />
      </StyledAplicaciones>
    </>
  );
};

export default AplicacionesTline;

import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import Cita from "../../../components/Cita";
import ImageWithCaptionSlider from "../../../components/ImageWithCaptionSlider";
import Reemplazo from "../../../assets/images/DolckerMatrix/temporal.webp";
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
          src={Reemplazo}
          alt='Imagen de Aplicaciones 1'
          caption=''
          columnSpan='6'
        />
        <Cita
          cita='Cita'
          author='autor'
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
          src={Reemplazo}
          alt='Imagen de Aplicaciones 1'
          caption=''
          columnSpan='6'
        />
        <Cita
          cita='Cita'
          author='autor'
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
          src={Reemplazo}
          alt='Imagen de Aplicaciones 1'
          //   caption='Jorge dará la referencia o imágen.'
          columnSpan='6'
        />
        <Cita
          cita='Cita'
          author='autor'
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
              src: Reemplazo,
              alt: "Imagen de Aplicaciones 4",
              caption:
                "Cita",
            },
            {
              src: Reemplazo, // Asegúrate de definir img5 en alguna parte de tu código
              alt: "Imagen de Aplicaciones 5",
              caption:
                "Cita",
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

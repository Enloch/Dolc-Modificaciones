import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesAplicaciones = import.meta.glob(
    "../../../../assets/images/Invisifix/Galeria/aplicaciones/*",
    { eager: true }
  );
  const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map(
    (key) => ({
      original: ImagenesAplicaciones[key].default,
      thumbnail: ImagenesAplicaciones[key].default,
    })
  );

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesObraNueva = import.meta.glob(
    "../../../../assets/images/Invisifix/Galeria/Obra/*",
    { eager: true }
  );
  const imagesGaleriaObraNueva = Object.keys(ImagenesObraNueva).map((key) => ({
    original: ImagenesObraNueva[key].default,
    thumbnail: ImagenesObraNueva[key].default,
  }));

  return (
    <>
      <StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaAplicaciones}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={false}
            autoPlay={true}
            showBullets={false}
            showNav={true}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
        <Text>
          Invisifix es la herramienta de diseño de fachadas y envolventes
          desarrollada para arquitectos y técnicos que buscan libertad creativa
          con soluciones técnicas precisas.
          <br />
          <br />
          Con Dolcker Invisifix puedes:
          <br />
          • Diseñar edificios nuevos o rehabilitar fachadas existentes,
          adaptando los acabados a las condiciones del entorno urbano o al
          estilo del proyecto.
          <br />
          • Combinar colores en porcentajes definidos por el diseñador,
          generando composiciones únicas en cerámica, piedra o materiales
          técnicos.
          <br />
          • Seleccionar texturas específicas como mate, brillo o flameada,
          aportando un lenguaje estético acorde con la identidad del edificio.
          <br />
          • Elegir sistemas de anclaje personalizados: desde sistemas clip hasta
          despieces a medida, con asesoramiento técnico incluido para garantizar
          una instalación eficaz y duradera.
          <br />
          <br />
          Dolcker Fusión ofrece una solución integral para llevar el diseño
          arquitectónico al siguiente nivel, combinando creatividad, técnica y
          soporte profesional en cada fase del proyecto.
        </Text>
        <Cita
          cita="“El color es un poder que influye directamente en el alma”"
          author="— Wassily Kandinsky"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
      <StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo3 color={COLORS.gray08}>- Obra Nueva</Titulo3>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaObraNueva}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={false}
            autoPlay={true}
            showBullets={false}
            showNav={true}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
      </StyledGaleria>
    </>
  );
};

export default AplicacionesTline;

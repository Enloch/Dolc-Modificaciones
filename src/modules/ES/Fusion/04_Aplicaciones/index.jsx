import { Titulo, Titulo3 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import Text from "../../../../components/Text";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesAplicaciones = import.meta.glob(
    "../../../../assets/images/Fusion/Galeria/aplicaciones/*",
    { eager: true }
  );
  const imagesGaleriaAplicaciones = Object.keys(ImagenesAplicaciones).map(
    (key) => ({
      original: ImagenesAplicaciones[key].default,
      thumbnail: ImagenesAplicaciones[key].default,
    })
  );

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesTerracota = import.meta.glob(
    "../../../../assets/images/Fusion/Galeria/terracota/*",
    { eager: true }
  );
  const imagesGaleriaTerracota = Object.keys(ImagenesTerracota).map((key) => ({
    original: ImagenesTerracota[key].default,
    thumbnail: ImagenesTerracota[key].default,
  }));

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesColor = import.meta.glob(
    "../../../../assets/images/Fusion/Galeria/color/*",
    { eager: true }
  );
  const imagesGaleriaColor = Object.keys(ImagenesColor).map((key) => ({
    original: ImagenesColor[key].default,
    thumbnail: ImagenesColor[key].default,
  }));

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesPetra = import.meta.glob(
    "../../../../assets/images/Fusion/Galeria/petra/*",
    { eager: true }
  );
  const imagesGaleriaPetra = Object.keys(ImagenesPetra).map((key) => ({
    original: ImagenesPetra[key].default,
    thumbnail: ImagenesPetra[key].default,
  }));

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const ImagenesTextura = import.meta.glob(
    "../../../../assets/images/Fusion/Galeria/textura/*",
    { eager: true }
  );
  const imagesGaleriaTextura = Object.keys(ImagenesTextura).map((key) => ({
    original: ImagenesTextura[key].default,
    thumbnail: ImagenesTextura[key].default,
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
          Inspirada en la cerámica tradicional, aporta una estética cálida,
          natural y atemporal. Ideal para proyectos que buscan una conexión
          sensorial con lo mediterráneo.
        </Text>
        <Cita
          cita="“El color es un poder que influye directamente en el alma”"
          author="— Wassily Kandinsky"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
      <StyledGaleria id={id[1]} backgroundColor={COLORS.gray01}>
        <Titulo3 color={COLORS.gray08}>- Terracota</Titulo3>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaTerracota}
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
          Superficies uniformes en tonos neutros o saturados, para composiciones
          sobrias o expresivas de gran pureza visual. Perfecta para arquitectura
          contemporánea y minimalista.
        </Text>
        <Cita
          cita="“La arquitectura empieza cuando se colocan cuidadosamente dos ladrillos juntos.”"
          author="— Ludwig Mies van der Rohe"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
      <StyledGaleria id={id[2]} backgroundColor={COLORS.gray01}>
        <Titulo3 color={COLORS.gray08}>- Color</Titulo3>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaColor}
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
          Superficies uniformes en tonos neutros o saturados, para composiciones
          sobrias o expresivas de gran pureza visual. Perfecta para arquitectura
          contemporánea y minimalista.
        </Text>
        <Cita
          cita="“El diseño no es solo lo que se ve o se siente. El diseño es cómo funciona.”"
          author="— Steve Jobs"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
      <StyledGaleria id={id[3]} backgroundColor={COLORS.gray01}>
        <Titulo3 color={COLORS.gray08}>- Petra</Titulo3>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaPetra}
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
          Acabados pétreos realistas con texturas naturales. Imitaciones de
          piedra como caliza, granito o pizarra que aportan carácter,
          durabilidad y elegancia.
        </Text>
        <Cita
          cita="“Diseñar no es hacer bonito, es hacer con sentido.”"
          author="— Frase atribuida a múltiples diseñadores (origen no confirmado)"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
      <StyledGaleria id={id[4]} backgroundColor={COLORS.gray01}>
        <Titulo3 color={COLORS.gray08}>- Textura</Titulo3>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaTextura}
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
          Permite combinar diferentes acabados superficiales (mate, brillo,
          planeado, etc.), generando un efecto visual y táctil único gracias al
          contraste entre texturas.
        </Text>
        <Cita
          cita="“Donde el color y la textura se encuentran, nace el carácter del espacio.”"
          author="— Inspiración propia / Original"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledGaleria>
    </>
  );
};

export default AplicacionesTline;

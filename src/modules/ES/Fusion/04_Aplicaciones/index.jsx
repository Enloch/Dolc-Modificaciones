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
          <strong>DOLCKER FUSION</strong> representa la evolución natural del
          prestigioso sistema
          <strong>DOLCKER SYSTEM</strong>, concebido para brindar una libertad
          creativa sin precedentes en el diseño de envolventes arquitectónicas.
          <br />
          <br />
          Su mayor valor añadido radica en la posibilidad de{" "}
          <strong>
            combinar diferentes colecciones dentro de una misma fachada
          </strong>
          , permitiendo al arquitecto o prescriptor mezclar colores, texturas y
          formatos en los porcentajes deseados. Esta capacidad de
          personalización transforma cada proyecto en una propuesta única y
          totalmente a medida.
          <br />
          <br />
          Además, esta personalización se extiende a toda la cadena logística:
          el material se suministra ya clasificado, mezclado y combinado según
          las especificaciones del proyecto, en palets listos para su
          instalación directa. Esto no solo{" "}
          <strong>agiliza la ejecución en obra</strong>, sino que también{" "}
          <strong>optimiza los tiempos y recursos</strong>.
          <br />
          <br />
          Gracias a esta innovadora solución, es posible diseñar{" "}
          <strong>fachadas con una estética singular y diferenciadora</strong>,
          donde el control total del diseño está en manos del proyectista,
          posibilitando{" "}
          <strong>
            una expresión arquitectónica libre, sofisticada y altamente
            eficiente
          </strong>
          .
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
          Una colección inspirada en los colores naturales de la tierra, que
          toma como referencia las{" "}
          <strong>arcillas rojas en distintos matices</strong> para crear{" "}
          <strong>diseños orgánicos</strong>, cálidos y atemporales, en sintonía
          con la naturaleza.
          <br />
          <br />
          <strong>Superficies uniformes</strong> en tonos neutros o saturados,
          perfectas para composiciones <strong>sobrias o expresivas</strong>,
          siempre con una estética de<strong> gran pureza visual.</strong>
          <br />
          <br />
          Una propuesta ideal para proyectos de{" "}
          <strong>arquitectura contemporánea y minimalista</strong>, donde
          predominan <strong>la limpieza formal</strong> y la{" "}
          <strong>coherencia cromática</strong>.
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
          Una colección inspirada en la fuerza del color como herramienta de
          diseño arquitectónico.{" "}
          <strong>
            Superficies uniformes en una paleta variada de tonos intensos y
            matizados
          </strong>
          , ideales para composiciones tanto{" "}
          <strong>sobrias como audaces</strong>, siempre con una estética de{" "}
          <strong>gran pureza visual</strong>.
          <br />
          <br />
          Pensada para una{" "}
          <strong>arquitectura contemporánea y de carácter marcado</strong>,
          esta colección{" "}
          <strong>
            permite mezclar colores contrastantes o dentro de un mismo rango
            expresivo
          </strong>
          , dando forma a envolventes únicas y llenas de personalidad.
          <br />
          <br />
          FUSION invita a liberar la imaginación y explorar nuevas formas de
          diseñar, donde{" "}
          <strong>
            el color se convierte en un elemento estructural más del lenguaje
            arquitectónico.
          </strong>
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

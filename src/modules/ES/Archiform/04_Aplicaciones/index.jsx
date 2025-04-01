import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2, Titulo3 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/Archiform/Aplicaciones/Archiform46.jpg";
import img2 from "../../../../assets/images/Archiform/Aplicaciones/Archiform02.jpg";
import img3 from "../../../../assets/images/Archiform/Aplicaciones/Archiform08.jpg";
import img4 from "../../../../assets/images/Archiform/Aplicaciones/Archiform05.jpg";
import img5 from "../../../../assets/images/Archiform/Aplicaciones/Archiform52.jpg";
import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const imagesRehabilitar = import.meta.glob(
    "../../../../assets/images/GaleriaArchiform/Aplicaciones/*",
    { eager: true }
  );
  const imagesGaleriaRehabilitar = Object.keys(imagesRehabilitar).map(
    (key) => ({
      original: imagesRehabilitar[key].default,
      thumbnail: imagesRehabilitar[key].default,
    })
  );

  // Actualizado para usar import.meta.glob con eager: true en lugar de globEager
  const imagesobra = import.meta.glob(
    "../../../../assets/images/GaleriaArchiform/ObraNueva/*",
    { eager: true }
  );
  const imagesGaleriaObra = Object.keys(imagesobra).map((key) => ({
    original: imagesobra[key].default,
    thumbnail: imagesobra[key].default,
  }));
  return (
    <>
      <StyledAplicaciones
        id={id[0]}
        backgroundColor={COLORS.gray02}
        rowGap={DISTANCES.medium}
      >
        <Titulo color={COLORS.gray08}>Aplicaciones</Titulo>
        <ImageWithCaption
          src={img1}
          alt="Imagen de Aplicaciones 1"
          caption="DOLCKER & CLIP Archiform."
          columnSpan="6"
        />
        <Cita
          cita="“La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz.”"
          author="— Le Corbusier"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledGaleria id="galeria-aplicaciones" backgroundColor={COLORS.gray02}>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaRehabilitar}
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
      <StyledAplicaciones
        id={id[1]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.medium}
      >
        <Titulo2 color={COLORS.gray08}>Rehabilitación</Titulo2>
        <ImageWithCaption
          src={img2}
          alt="Imagen de Aplicaciones 1"
          caption="DOL - TC14 Archiform."
          columnSpan="6"
        />
        <Cita
          cita="“Todo es permisible con tal de que sea fantástico”"
          author="— Carlo Mollino"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[2]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.medium}
      >
        <Titulo2 color={COLORS.gray08}>Obra nueva</Titulo2>
        <ImageWithCaption
          src={img3}
          alt="Imagen de Aplicaciones 1"
          caption="DOL -TC20 Archiform."
          columnSpan="6"
        />
        <Cita
          cita="“La arquitectura es una cuestión de sueños y fantasías, de curvas generosas y espacios amplios”"
          author="— Oscar Niemeyer"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaObra}
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
      <StyledAplicaciones
        id={id[3]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.medium}
      >
        <Titulo3 color={COLORS.gray08}>- Fachadas</Titulo3>
        <ImageWithCaption
          src={img4}
          alt="Imagen de Aplicaciones 4"
          caption="DOL - TC20 Archiform."
          columnSpan="6"
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[4]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.medium}
      >
        <Titulo3 color={COLORS.gray08}>
          - Terrazas, suelos elevados, techos y soluciones
        </Titulo3>
        <ImageWithCaption
          src={img5}
          alt="Imagen de Aplicaciones 5"
          caption="DOL - TC14 Archiform."
          columnSpan="6"
        />
      </StyledAplicaciones>
    </>
  );
};

export default AplicacionesTline;

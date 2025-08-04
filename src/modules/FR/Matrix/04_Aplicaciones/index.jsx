import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../../components/Titulos";
import { COLORS, DISTANCES } from "../../../../global/GlobalStyles";
import StyledAplicaciones from "./styles";
import img1 from "../../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-9.jpg";
import logos from "../../../../assets/images/DolckerMatrix/Aplicaciones/logos.gif";
import img3 from "../../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-11.jpg";
import img5 from "../../../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-13.jpg";

import Cita from "../../../../components/Cita";
import ImageGallery from "react-image-gallery";
import { StyledGaleria, StyledSlider } from "./styles";
const AplicacionesTline = ({ id }) => {
	const imagesRehabilitar = import.meta.globEager(
		"../../../../assets/images/GaleriaMatrix/Rehabilitar/*"
	);
	const imagesObra = import.meta.globEager(
		"../../../../assets/images/GaleriaMatrix/Obra/*"
	);
	const imagesExterior = import.meta.globEager(
		"../../../../assets/images/GaleriaMatrix/Exterior/*"
	);

	const imagesGaleriaRehabilitar = Object.keys(imagesRehabilitar).map(
		(key) => ({
			original: imagesRehabilitar[key].default,
			thumbnail: imagesRehabilitar[key].default,
		})
	);

	const imagenesGaleriaObra = Object.keys(imagesObra).map((key) => ({
		original: imagesObra[key].default,
		thumbnail: imagesObra[key].default,
	}));

  const imagenesGaleriaExterior = Object.keys(imagesExterior).map((key) => ({
    original: imagesExterior[key].default,
    thumbnail: imagesExterior[key].default,
  }));

  return (
    <>
      <StyledAplicaciones
        id={id[0]}
        backgroundColor={COLORS.gray02}
        rowGap={DISTANCES.small}
      >
        <Titulo color={COLORS.gray08}>Applications</Titulo>
        <ImageWithCaption
          src={img1}
          alt="Image des Applications 1"
          caption=""
          columnSpan="6"
        />
        <Cita
          cita="Les détails ne sont pas des détails. Les détails, c'est le design."
          author="Charles Eames "
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledAplicaciones
        id={id[1]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Réhabilitation</Titulo2>
        <ImageWithCaption
          src={logos}
          alt="Image des Applications 1"
          caption=""
          columnSpan="6"
        />
        <Cita
          cita="Le fonctionnel est meilleur que le beau, car ce qui fonctionne bien perdure dans le temps."
          author="Ray Eames"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagesGaleriaRehabilitar}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={false}
            autoPlay={true}
            showBullets={true}
            showNav={false}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
      </StyledGaleria>
      <StyledAplicaciones
        id={id[2]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Nouvelle construction</Titulo2>
        <ImageWithCaption
          src={img3}
          alt="Image des Applications 1"
          //   caption='Jorge dará la referencia o imágen.'
          columnSpan="6"
        />
        <Cita
          cita="L'espace n'a pas de sens sans lumière. Un bâtiment parle à travers le silence de la perception orchestrée par la lumière."
          author="Steven Holl"
          colorCita={COLORS.gray08}
          colorAutor={COLORS.gray04}
        />
      </StyledAplicaciones>
      <StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagenesGaleriaObra}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={false}
            autoPlay={true}
            showBullets={true}
            showNav={false}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
      </StyledGaleria>
      <StyledAplicaciones
        id={id[3]}
        backgroundColor={COLORS.gray01}
        rowGap={DISTANCES.small}
      >
        <Titulo2 color={COLORS.gray08}>Extérieurs</Titulo2>
        <ImageWithCaption
          src={img5}
          alt="Image des Applications 1"
          //   caption='Jorge dará la referencia o imágen.'
          columnSpan="6"
        />
      </StyledAplicaciones>
      <StyledGaleria id="galeria-obra-nueva" backgroundColor={COLORS.gray01}>
        <StyledSlider className="Slider">
          <ImageGallery
            items={imagenesGaleriaExterior}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={false}
            autoPlay={true}
            showBullets={true}
            showNav={false}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
      </StyledGaleria>
    </>
  );
};

export default AplicacionesTline;

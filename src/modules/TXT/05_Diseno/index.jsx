import { useState } from "react";
import Cita from "../../../components/Cita";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo, Titulo2 } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledDisenos from "./styles";
import { StyledGaleria, StyledSlider } from "./styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = import.meta.globEager("../../../assets/images/GaleriaTXT/*");

const imagenesGaleria = Object.keys(images).map((key) => ({
  original: images[key].default,
  thumbnail: images[key].default,
}));

import RotadorLeiva from "../../../components/Rotadores/Leiva/Rotador";
import ranurado6 from "../../../assets/images/Diseno/Espesores/ranurado6mm.webp";
import ranurado11 from "../../../assets/images/Diseno/Espesores/ranurado11mm.webp";
import ranurado14 from "../../../assets/images/Diseno/Espesores/ranurado14.webp";
const DisenosTline = ({ id }) => {
  const ids = [
    "ard",
    "balm",
    "bella",
    "brun",
    "byb",
    "cap",
    "cor",
    "crom",
    "dom",
    "eter",
    "grav",
    "habi",
    "han",
    "inv",
    "kur",
    "nik",
    "stone",
    "stor",
    "uni",
  ];

  const [serieActiva, setSerieActiva] = useState("");
  return (
    <>
       <StyledGaleria id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Diseño</Titulo>
        <StyledSlider className='Slider'>
          <ImageGallery
            items={imagenesGaleria}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={true}
            autoPlay={true}
            showBullets={true}
            showNav={false}
            lazyLoad={true}
            slideDuration={450}
          />
        </StyledSlider>
      </StyledGaleria>
      <StyledDisenos id={id[1]} backgroundColor={COLORS.gray01} isEspesores>
        <Titulo2>Espesores</Titulo2>
        <div className='espesor espesor-1'>
          <img src={ranurado6} alt='' />
          <ul>
            <strong>TC 6 / 6 mm.</strong>
            <li>Fachada</li>
          </ul>
        </div>
        <div className='espesor espesor-2'>
          <img src={ranurado11} alt='' />
          <ul>
            <strong>TC 11 / 11 mm.</strong>
            <li>Fachada</li>
          </ul>
        </div>
        <div className='espesor espesor-3'>
          <img src={ranurado14} alt='' />
          <ul>
            <strong>TC 14 / 14 mm.</strong>
            <li>Fachada</li>
          </ul>
        </div>
      </StyledDisenos>
      {/* <IndiceSeries id={id[1]} queSerieActiva={setSerieActiva} /> */}
      <StyledDisenos id={id[2]} backgroundColor={COLORS.gray01}>
        <Titulo2>Configurador</Titulo2>
        <div className='rotador'>
          {/* <RotadorLeiva /> */}
        </div>
      </StyledDisenos>
    </>
  );
};

export default DisenosTline;

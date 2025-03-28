import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import { StyledGaleria, StyledSlider } from "./styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galeria1 from "../../../../assets/images/Galeria/1.jpg";
import galeria2 from "../../../../assets/images/Galeria/2.jpg";
import galeria3 from "../../../../assets/images/Galeria/3.jpg";
import galeria4 from "../../../../assets/images/Galeria/4.jpg";
import galeria5 from "../../../../assets/images/Galeria/5.jpg";
import galeria6 from "../../../../assets/images/Galeria/6.jpg";
import galeria7 from "../../../../assets/images/Galeria/7.jpg";
import galeria8 from "../../../../assets/images/Galeria/8.jpg";
import galeria9 from "../../../../assets/images/Galeria/9.jpg";
import galeria10 from "../../../../assets/images/Galeria/10.jpg";
import galeria11 from "../../../../assets/images/Galeria/11.jpg";
import galeria12 from "../../../../assets/images/Galeria/12.jpg";
import galeria13 from "../../../../assets/images/Galeria/13.jpg";
import galeria14 from "../../../../assets/images/Galeria/14.jpg";
import galeria15 from "../../../../assets/images/Galeria/15.jpg";
import galeria16 from "../../../../assets/images/Galeria/16.jpg";
import galeria17 from "../../../../assets/images/Galeria/17.jpg";
import galeria18 from "../../../../assets/images/Galeria/18.jpg";
import galeria19 from "../../../../assets/images/Galeria/19.jpg";
import galeria20 from "../../../../assets/images/Galeria/20.jpg";
import galeria21 from "../../../../assets/images/Galeria/21.jpg";
import galeria22 from "../../../../assets/images/Galeria/22.jpg";
import galeria23 from "../../../../assets/images/Galeria/23.jpg";

const imagenesGaleria = [
  {
    original: galeria1,
    thumbnail: galeria1,
  },
  {
    original: galeria2,
    thumbnail: galeria2,
  },
  {
    original: galeria3,
    thumbnail: galeria3,
  },
  {
    original: galeria4,
    thumbnail: galeria4,
  },
  {
    original: galeria5,
    thumbnail: galeria5,
  },
  {
    original: galeria6,
    thumbnail: galeria6,
  },
  {
    original: galeria7,
    thumbnail: galeria7,
  },
  {
    original: galeria8,
    thumbnail: galeria8,
  },
  {
    original: galeria9,
    thumbnail: galeria9,
  },
  {
    original: galeria10,
    thumbnail: galeria10,
  },
  {
    original: galeria11,
    thumbnail: galeria11,
  },
  {
    original: galeria12,
    thumbnail: galeria12,
  },
  {
    original: galeria13,
    thumbnail: galeria13,
  },
  {
    original: galeria14,
    thumbnail: galeria14,
  },
  {
    original: galeria15,
    thumbnail: galeria15,
  },
  {
    original: galeria16,
    thumbnail: galeria16,
  },
  {
    original: galeria17,
    thumbnail: galeria17,
  },
  {
    original: galeria18,
    thumbnail: galeria18,
  },
  {
    original: galeria19,
    thumbnail: galeria19,
  },
  {
    original: galeria20,
    thumbnail: galeria20,
  },
  {
    original: galeria21,
    thumbnail: galeria21,
  },
  {
    original: galeria22,
    thumbnail: galeria22,
  },
  {
    original: galeria23,
    thumbnail: galeria23,
  },
];

const Galeria = ({ id }) => {
  return (
    <>
      <StyledGaleria id={id} backgroundColor={COLORS.gray02}>
        <Titulo>Project Gallery</Titulo>
        <StyledSlider className='Slider'>
          <ImageGallery
            items={imagenesGaleria}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            autoPlay={true}
            showBullets={true}
            showNav={false}
            lazyLoad={true}
            slideDuration={3500}
          />
        </StyledSlider>
      </StyledGaleria>
    </>
  );
};

export default Galeria;

import styled from "styled-components";
import StyledCita from "../../../../components/Cita/styles";
import StyledImageWithCaption from "../../../../components/ImageWithCaption/styles";
import Seccion from "../../../../components/Seccion";
import {
  Column6,
  MOBILE_SIZE,
  TABLET_SIZE,
  COLORS,
} from "../../../../global/GlobalStyles";

export const StyledGaleria = styled(Seccion)`
  .Slider {
    ${Column6}
  }
  @media (max-width: ${TABLET_SIZE}) {
    .Slider {
      ${Column6}
    }
  }
  @media (max-width: ${MOBILE_SIZE}) {
    .Slider {
      ${Column6}
    }
  }
`;
export const StyledSlider = styled.div`
  .image-gallery-slide .image-gallery-image {
    aspect-ratio: 1;
    object-fit: cover;
  }
  .image-gallery-icon:hover {
    color: ${COLORS.gray06};
  }
  
  /* Maintain image proportions in fullscreen mode */
  .image-gallery-fullscreen-button .image-gallery-fullscreen-button {
    z-index: 5;
  }
  
  .fullscreen .image-gallery-slide .image-gallery-image {
    object-fit: contain;
    max-height: 100vh;
    max-width: 100%;
    height: auto;
    width: auto;
    margin: 0 auto;
  }
`;

/* ---- Slider de tarjetas (texto + imagen) ---- */
export const CardsSlider = styled.div`
  position: relative;
  ${Column6}
`;

export const CardsViewport = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardsTrack = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  gap: 16px;
`;

export const Card = styled.article`
  scroll-snap-align: start;
  background: ${COLORS.gray00};
  border: 1px solid ${COLORS.gray02};
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 360px;
  @media (max-width: ${TABLET_SIZE}) {
    grid-template-columns: 1fr;
  }
`;

export const CardBody = styled.div`
  padding: 24px;
  background: ${COLORS.gray00};
  color: ${COLORS.gray08};

  h3 {
    margin: 0 0 12px 0;
    font-size: 1.4rem;
    line-height: 1.2;
  }
  h4 {
    margin: 0 0 12px 0;
    font-size: 1.2rem;
    line-height: 1;
  }
  p {
    margin: 0 0 12px 0;
    color: ${COLORS.gray06};
  }
  ul {
    margin: 0 0 12px 0;
    padding-left: 18px;
    color: ${COLORS.gray06};
  }
`;

export const CardMedia = styled.div`
  position: relative;
  background: ${COLORS.gray02};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    max-height: 75vh;
  }
  @media (max-width: ${TABLET_SIZE}) {
    img {
      max-height: 500px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: transparent;
  background: transparent;
  color: ${COLORS.gray07};
  display: grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 40px;
  z-index: 1;

  &[data-dir="prev"] {
    left: -8px;
  }
  &[data-dir="next"] {
    right: -8px;
  }

  &:hover {
    color: ${COLORS.gray01};
  }
`;

const StyledAplicaciones = styled(Seccion)`
  row-gap: ${(props) => props.rowGap || "0px"};

  ${StyledImageWithCaption}.distinto {
    grid-column: 5 / span 4;
  }
`;

export default StyledAplicaciones;

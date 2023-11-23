import { useState } from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import {
  StyledModal,
  StyledContainer,
  SerieTitulo,
  ContenedorGaleria,
} from "./styles";

import { configTubex } from "../../../../configs/SeriesMatrix/configTubex";
const SerieModal = () => {
  const [isShow, setIsShow] = useState(false);
  const CrearItemsGaleria = () => {
    return configTubex.map((serie) => (
      <Item
        original={serie.img}
        thumbnail={serie.img}
        width='1024'
        height='768'
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={serie.img} />
        )}
      </Item>
    ))
  }
  return (
    <StyledModal display={isShow ? "flex" : "none"}>
      <Gallery>
        <StyledContainer>
          <ContenedorGaleria>
           <CrearItemsGaleria/>
          </ContenedorGaleria>
        </StyledContainer>
      </Gallery>
    </StyledModal>
  );
};

export default SerieModal;

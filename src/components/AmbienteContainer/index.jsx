import styled from "styled-components";
import StyledImageWithCaption from "../../components/ImageWithCaption/styles";
import { COLORS, Column3 } from "../../global/GlobalStyles";
import { column_5_span8 } from "../../styles/grid";
import { DISTANCES } from "../../styles/sizes";
import SeleccionarMuestra from "./SeleccionarMuestra";

const AmbienteContainer = styled.div`
  ${Column3}

  display: flex;
  align-items: flex-start;
  /* gap: ${DISTANCES.small}; */

  margin-right: clamp(-${DISTANCES.medium}, -2.604vw, -${DISTANCES.small});
  overflow-x: auto;

  ${StyledImageWithCaption} {
    img {
      width: 100%;
      height: clamp(24vh,80vh,100%);
      /* height: clamp(500px, 46.875vw, 900px); */
      object-fit: cover;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: ${COLORS.gray04};
  }
`;

AmbienteContainer.SeleccionarMuestra = SeleccionarMuestra;

export default AmbienteContainer;

import styled from "styled-components";
import StyledImageWithCaption from "../../components/ImageWithCaption/styles";
import { COLORS, TABLET_SIZE, MOBILE_SIZE } from "../../global/GlobalStyles";
import { column_5_span8 } from "../../styles/grid";
import { DISTANCES } from "../../styles/sizes";
import SeleccionarMuestra from "./SeleccionarMuestra";

const AmbienteContainer = styled.div`
  ${column_5_span8}

  display: flex;
  align-items: flex-start;
  gap: ${DISTANCES.small};

  margin-right: clamp(-${DISTANCES.medium}, -2.604vw, -${DISTANCES.small});
  overflow-x: auto;

  ${StyledImageWithCaption} {
    img {
      width: 100%;
      height: clamp(500px, 46.875vw, 900px);
      object-fit: cover;

      @media (max-width: ${TABLET_SIZE}) {
        width: auto;
        object-fit: cover;
      }

      @media (max-width: ${MOBILE_SIZE}) {
        object-fit: cover;
      }
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

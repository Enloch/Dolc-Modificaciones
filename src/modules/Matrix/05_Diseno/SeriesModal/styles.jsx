import styled from "styled-components";
import { DISTANCES, GRID, TextMedium } from "../../../../global/GlobalStyles";
import { mediaQueryTablet } from "../../../../styles/sizes";
export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: ${(props) => props.display};
  animation: slide-down 1s ease-in-out 0s 1;
  @keyframes slide-down {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }
`;

export const StyledContainer = styled.div`
  padding: clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium});
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  user-select: none;
  background-color: #d9d9d9;
`;

export const ContenedorGaleria = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 12px;
`;

export const SerieTitulo = styled.span`
  font-size: ${TextMedium};
`;

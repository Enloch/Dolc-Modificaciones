import styled, { css } from "styled-components";
import { DISTANCES, GRID, TextMedium } from "../../global/GlobalStyles";
import { mediaQueryTablet } from "../../styles/sizes";

const StyledFullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  animation: slide-down 1s ease-in-out 0s 1;

  @keyframes slide-down {
    0% {
      transform: translateY(-100vh);
    }

    100% {
      transform: translateY(0vh);
    }
  }

  .slider {
    display: grid;
    grid-template-columns: auto auto auto;

    width: 100%;
    height: 100%;

    overflow-x: hidden;
    overflow-y: hidden;
    user-select: none;

    img {
      width: 100vw;
      height: 100vh;
      user-select: none;
      pointer-events: none;
    }
  }

  > span {
    ${TextMedium}
    position: absolute;
    top: ${GRID.verticalSpace};
    left: ${GRID.horizontalSpace};
    z-index: 2;
    color: white;
    max-width: 75%;
    /* mix-blend-mode: difference; */
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
  }

  .controles {
    ${TextMedium}
    position: absolute;
    top: ${GRID.verticalSpace};
    left: 50%;
    z-index: 2;
    color: white;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);

    /* mix-blend-mode: difference; */
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    img {
      width: auto;
      height: 2rem;
      cursor: pointer;
      filter: drop-shadow(2px 2px 4px rgb(0, 0, 0)) invert(95%);
    }
  }

  .muestraFondo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .closeFullScreen {
    /* mix-blend-mode: difference; */
    width: 2rem;
    position: absolute;
    top: ${GRID.verticalSpace};
    right: ${GRID.horizontalSpace};
    cursor: pointer;
    filter: brightness(100)drop-shadow(2px 2px 4px rgb(0, 0, 0));;
  }

  ${mediaQueryTablet(css`
    .closeFullScreen,
    > span {
      top: ${DISTANCES.small};
    }

    .closeFullScreen {
      right: clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium});
    }

    > span {
      left: clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium});
    }
  `)}
`;

export default StyledFullScreen;

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`;
// Define los estilos para la flecha animada
export const AnimatedArrow = styled.img`
  position: absolute;
  z-index: 10;
  bottom: 3%;
  left: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  cursor: pointer;
`;
export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* height: 100vh; */
  /* background-color: #d8d9db; */
  background-color: #fff;
`;

export const Seccion = styled.div`
  /* height: 100%; */
`;

export const SeccionContenido = styled.div`
  /* height: 100%; */
`;

export const WrapperContenido = styled.div`
  margin: 0 auto;
  /* background-color: #b89f64; */
`;

export const GridSeccion = styled.div`
  /* background-color: #66421e; */
  @media (min-width: 0px) {
    padding-top: 90px;
    padding-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 900px) {
    padding-top: 135px;
    padding-bottom: 80px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
// export const ContenidoHeader = styled.div`
//   background-image: url(${Header});
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   transform-style: preserve-3d;
//   will-change: transform;
//   overflow: hidden;
//   @media (max-width: 1400px) {
//     background-image: url(${HeaderTablet});
//   }
//   @media (max-width: 600px) {
//     background-image: url(${HeaderPhone});
//   }
// `;
export const TituloHeader = styled.h1`
  font-family: "Roboto", sans-serif !important;
  font-weight: 600;
  font-size: 6rem;
  line-height: 1.167;
  color: #ffffff;
  margin: 0;
  @media (min-width: 0px) {
    margin-bottom: 50px;
    padding: 0 20px 0 20px;
    font-size: 37px;
    line-height: 56px;
  }
  @media (min-width: 900px) {
    font-size: 112px;
    line-height: 112px;
    margin-bottom: 50px;
    padding: 0 50px 0 50px;
  }
`;
export const GridTextoCabecera = styled.h2`
  margin: 0px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 1.2;
  max-width: 890px;
  display: inline-flex;
  flex-wrap: wrap;
  @media (min-width: 0px) {
    letter-spacing: -0.02em;
    font-size: 27px;
    line-height: 28.35px;
  }
  @media (min-width: 900px) {
    letter-spacing: -0.03em;
    font-size: 56px;
    line-height: 56px;
  }
`;
export const GridTextoCabecera2 = styled.h2`
  margin: 0px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.2;
  max-width: 890px;
  display: inline-flex;
  flex-wrap: wrap;
  @media (min-width: 0px) {
    letter-spacing: -0.02em;
    font-size: 27px;
    line-height: 28.35px;
  }
  @media (min-width: 900px) {
    letter-spacing: -0.03em;
    font-size: 120px;
    line-height: 96px;
  }
  @media (min-width: 1200px) {
    letter-spacing: -0.03em;
    font-size: 204px;
    line-height: 165.24px;
    padding-top: 100px;
  }
`;
export const ContenedorSeparador = styled.div`
  width: 100%;
  opacity: 1;
`;

export const SeparadorHeader = styled.hr`
  margin: 0 auto;
  flex-shrink: 0;
  border-width: 0;
  border-style: solid;
  border-bottom-width: thin;
  opacity: 0.5;
  /* border-color: #4b4b4b; */
`;
export const ContenedorSubtitulos = styled.div`
  margin-top: 16px;
  margin-bottom: 50px;
  height: 100%;
  @media (min-width: 0px) {
    padding-left: 20px;
    /* margin-bottom: 50px; */
  }

  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const LimiteSubtitulos = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: calc(100% + 16px);
  margin-left: -16px;
  position: relative;
  @media (min-width: 0px) {
    flex-direction: column;
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
export const Subtitulo = styled.p`
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.02em;
  max-width: 500px;
  color: #ffffff;
  margin: 0;
  @media (min-width: 0px) {
    margin-top: 24px;
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 0px;
  }
`;
export const Caja25Flex = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 25%;
  flex-grow: 0;
  max-width: 25%;
  padding-top: 16px;
  padding-left: 16px;
  max-width: none;
  @media (min-width: 600px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }

  @media (min-width: 900px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }

  @media (min-width: 1200px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }

  @media (min-width: 1536px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }
`;
export const Caja75Flex = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 75%;
  max-width: 75%;
  padding-top: 16px;
  padding-left: 16px;
  /* @media (min-width: 0px) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }
  @media (min-width: 600px) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 75%;
    flex-grow: 0;
    max-width: 75%;
  }

  @media (min-width: 1200px) {
    flex-basis: 75%;
    flex-grow: 0;
    max-width: 75%;
  }

  @media (min-width: 1536px) {
    flex-basis: 75%;
    flex-grow: 0;
    max-width: 75%;
  } */
`;
export const Caja15Flex = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 11%;
  flex-grow: 0;
  max-width: 11%;
  padding-top: 16px;
  padding-left: 16px;
  max-width: none;
  @media (min-width: 600px) {
    flex-basis: 10%;
    flex-grow: 0;
    max-width: 10%;
  }

  @media (min-width: 900px) {
    flex-basis: 11%;
    flex-grow: 0;
    max-width: 11%;
  }

  @media (min-width: 1200px) {
    flex-basis: 11%;
    flex-grow: 0;
    max-width: 11%;
  }

  @media (min-width: 1536px) {
    flex-basis: 11%;
    flex-grow: 0;
    max-width: 11%;
  }
`;
export const Caja85Flex = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 89%;
  flex-grow: 0;
  max-width: 89%;
  padding-top: 16px;
  padding-left: 16px;
  @media (min-width: 0px) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }
  @media (min-width: 600px) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 89%;
    flex-grow: 0;
    max-width: 89%;
  }

  @media (min-width: 1200px) {
    flex-basis: 89%;
    flex-grow: 0;
    max-width: 89%;
  }

  @media (min-width: 1536px) {
    flex-basis: 89%;
    flex-grow: 0;
    max-width: 89%;
  }
`;
export const SeccionTituloPunto = styled.div`
  opacity: 1;
`;

export const AjusteTituloPunto = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 250px;
  height: 25px;
  align-items: flex-start;

  &:not(style) + &:not(style) {
    margin: 0;
    margin-left: 8px;
  }
`;

export const Punto = styled.div`
  position: relative;
`;

export const ContenedorTituloPunto = styled.div`
  margin-left: 8px;
`;

export const TituloPunto = styled.h2`
  margin: 0;
  font-family: "Roboto", sans-serif !important;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  @media (min-width: 0px) {
    font-size: 14px;
    line-height: 19.6px;
  }

  @media (min-width: 900px) {
    font-size: 16px;
    line-height: 22.4px;
  }
`;
export const TituloCajaDerecha = styled.p`
  font-family: "Roboto Medium", sans-serif !important;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.02em;
  max-width: 500px;
  margin: 0;
  @media (min-width: 0px) {
    margin-top: 24px;
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 0px;
  }
`;

export const ContSliderPequeño = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledImagenTexto = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 25%;
  flex-grow: 0;
  max-width: 25%;
  padding-top: 16px;
  padding-left: 16px;
  max-width: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }

  @media (min-width: 1200px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }

  @media (min-width: 1536px) {
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
  }
`;

export const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const StyledImagen = styled.img`
  height: 29.17vw;
  width: 100%;
  transform: scale(1.1);
  object-fit: cover;
  transition: transform 0.3s ease; /* Agrega una transición para suavizar el efecto de zoom */
  margin-bottom: 16px;
  &:hover {
    transform: scale(
      1.2
    ); /* Aumenta el tamaño de la imagen a 1.1 veces su tamaño original */
  }
`;

export const StyledTexto = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`;

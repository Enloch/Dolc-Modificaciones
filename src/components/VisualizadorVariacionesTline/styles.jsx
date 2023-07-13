import styled from "styled-components";
import { Column8 } from "../../global/GlobalStyles";

export const AppIntercambiador = styled.div`
  ${Column8}
  position: relative;
`;

export const ImgFondo = styled.img``;
export const ImgFormato = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const ImgPerfil = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const ImgSvg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const ImgRAL = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Icono = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  z-index: 5;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  :hover {
    transform: rotate(45deg);
  }
`;

export const AppMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 20%;
  z-index: 10;
  background-color: #fff;
`;

export const MenuCirculos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  padding: 10px 0;
  overflow-y: auto;
  height: 100%;
`;

export const TituloMenu = styled.span`
  justify-self: flex-start;
  margin-bottom: 10px;
`;

export const ContenedorCirculos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px 0;
`;

export const TextureContainer = styled.div`
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: none;
`;

export const ImgCirculos = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TextTextura = styled.span`
  margin-top: 5px;
  font-size: 10px;
  text-align: center;
`;

export const MenuRectangulos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  padding: 10px 0;
  justify-content: flex-start;
  height: 100%;
  overflow-y: auto;
`;

export const ImgRectangulos = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TextureContainerRectangulo = styled.div`
  width: auto;
  height: auto;
  padding: 0;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
`;
export const ContenedorRectangulo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: flex-start;
  margin: 10px 0;
`;

// export const BotonMenu = styled.button`
//   margin-top: 20px;
//   align-self: center;
//   justify-self: flex-end;
// `;
export const BotonMenu = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  margin-top: 20px;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

import styled from "styled-components";
import Wipe from "../../../assets/icons/wipe.svg";

export const ContRotador = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CanvasContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: ${({ visible }) => (visible ? "80%" : "100%")};
  height: 100%;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1080px) {
    width: ${({ visible }) => (visible ? "70%" : "100%")};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const RotadorMenuContainer = styled.div`
  /* width: 33%; */
  padding: 15px 15px;
  background-color: #ffffff;
  height: 100%;
  border-left: 1px solid #e0e0e0;
  /* width: ${({ visible }) => (visible ? "20%" : "0")}; */
  width: 20%;
  display: ${({ visible }) => (visible ? "block" : "none")};
  overflow-y: auto;
  @media (max-width: 1080px) {
    display: ${({ visible }) => (visible ? "block" : "none")};
    width: 30%;
  }
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    padding: 5px;
    border-left: none;
    border-top: 1px solid #e0e0e0;
  }
`;

export const BotonExpandir = styled.a`
  display: none;
  position: absolute;
  top: 50%;
  right: 24%;
  width: 25px;
  height: 25px;
  z-index: 20;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ImagenExpandir = styled.img`
  width: 100%;
  height: 100%;
`;

export const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #a7a7a76c;
  backdrop-filter: blur(5px);
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  max-height: 180px;
`;

export const IntroImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const IntroText = styled.p`
  text-align: center;
`;

export const R360Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const MenuContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: ${({ visible }) => (visible ? "grid" : "none")};
  grid-template-columns: 1fr;
  row-gap: 5px;
  overflow-y: auto;
  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const MenuContainer2 = styled.div`
  width: 100%;
  max-height: 50vh;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const MaterialButton = styled.button`
  width: 70px;
  height: 75px;
  padding: 0;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const MaterialImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const MaterialTextContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: break-spaces;
  margin-top: 2px;
`;
export const MaterialText = styled.span`
  font-size: 10px;
`;

export const CategoryButton = styled.h2`
  cursor: pointer;
  margin: 5px;
  ::before {
    content: ">  ";
  }
`;

export const ModelTitulo = styled.span`
  margin: 10px auto 10px 20px;
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  font-size: 12px;
`;

export const ModelImage = styled.img`
  width: 80%;
  height: 75%;

  /* object-fit: cover; */
`;
export const Titulo = styled.h2`
  cursor: pointer;
  margin: 5px;
  ::before {
    content: ">  ";
  }
`;

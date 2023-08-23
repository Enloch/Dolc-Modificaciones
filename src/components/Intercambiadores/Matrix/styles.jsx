import styled from "styled-components";
import Wipe from "../../../assets/icons/wipe.svg";

export const ContRotador = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  /* width: ${({ visible }) => (visible ? "75%" : "100%")}; */
  height: 100%;
  cursor: all-scroll;
  @media screen and (max-width: 1080px) {
    width: 66%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
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

export const RotadorMenuContainer = styled.div`
  width: 33%;
  padding: 5px;
  background-color: #ffffff;
  height: 100%;
  border-left: 1px solid #e0e0e0;
  /* width: ${({ visible }) => (visible ? "25%" : "0")}; */
  /* display: ${({ visible }) => (visible ? "block" : "none")}; */

  @media (max-width: 480px) {
    width: 100%;
    padding: 5px;
    border-left: none;
    border-top: 1px solid #e0e0e0;
  }
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
  display: ${({ visible }) => (visible ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  row-gap: 5px;
  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
// export const MenuContainer = styled.div`
//   width: 100%;
//   display: ${({ visible }) => (visible ? "grid" : "none")};
//   flex-direction: column;
//   justify-content: center;
//   flex-wrap: wrap;
//   row-gap: 5px;
//   @media (max-width: 480px) {
//     flex-direction: row;
//     justify-content: flex-start;
//   }
// `;

export const MenuContainer2 = styled.div`
  width: 100%;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
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

export const ModelButton = styled.button`
  margin: 0 auto;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  width: auto;
`;

export const ModelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Titulo = styled.h2`
  cursor: pointer;
  margin: 5px;
  ::before {
    content: ">  ";
  }
`;

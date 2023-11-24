import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  position: fixed;
  /* border-bottom: 1px solid #dddddd; */
  width: 100%;
  z-index: 99;
  display: flex;
  transition: top 0.6s;
`;

export const Contenedor1 = styled.div`
  height: 50px;
  width: 100%;
  background-color: #222222;
  color: #fafafa;
`;
export const Contenedor2 = styled.div`
  width: 100%;
  background-color: #fafafa00;
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  /* display: grid;
  justify-content: center;
  align-items: center; */
  padding-top: 34px;
  padding-bottom: 34px;
  color: #ffffff;

  ${(props) =>
    props.isVisible
      ? css`
          background: #fafafa00; // Aquí tu background original
        `
      : css`
          background: linear-gradient(
            rgba(37, 35, 36, 1) 0%,
            rgba(37, 35, 36, 0.987) 8.1%,
            rgba(37, 35, 36, 0.951) 15.5%,
            rgba(37, 35, 36, 0.896) 22.5%,
            rgba(37, 35, 36, 0.825) 29%,
            rgba(37, 35, 36, 0.741) 35.3%,
            rgba(37, 35, 36, 0.648) 41.2%,
            rgba(37, 35, 36, 0.55) 47.1%,
            rgba(37, 35, 36, 0.45) 52.9%,
            rgba(37, 35, 36, 0.352) 58.8%,
            rgba(37, 35, 36, 0.259) 64.7%,
            rgba(37, 35, 36, 0.175) 71%,
            rgba(37, 35, 36, 0.104) 77.5%,
            rgba(37, 35, 36, 0.049) 84.5%,
            rgba(37, 35, 36, 0.013) 91.9%,
            rgba(37, 35, 36, 0) 100%
          );
        `}
  @media (max-width: 1000px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }
  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 16px;
  column-width: 128px;
  margin: 0 100px 0 100px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: calc(100% + 16px);
  flex-direction: row;
  /* align-items: center; */
  margin: 0 16px 0 0;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

export const Bloque1 = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 25%;
  flex-grow: 0;
  max-width: 35%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    max-width: 85%;
    flex-basis: 85%;
  }
  @media (min-width: 900px) {
    flex-basis: 35%;
    max-width: 35%;
  }
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`;
export const MenuButton = styled.a`
  font-size: 20px;
  display: none;

  // otros estilos para tu botón

  @media (max-width: 600px) {
    display: flex;
    cursor: pointer;
    align-self: center;
  }
`;
export const Bloque2 = styled.div`
  display: flex;

  align-items: center;
  column-gap: 22px;
  flex-basis: 75%;

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: 100%;
    background-color: #fffcf5; // Añade tu color de fondo aquí
  }
  @media (min-width: 601px) {
    flex-basis: 45%;
    justify-content: flex-end;
  }
  @media (min-width: 900px) {
    flex-basis:50%;
  }
  @media (min-width: 1400px) {
    flex-basis: 65%;
    justify-content: flex-start;
  }
`;
export const Bloque3 = styled.div`
  display: flex;

  align-items: center;
  column-gap: 22px;
  justify-content: flex-end;
  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: 100%;
    background-color: #fffcf5; // Añade tu color de fondo aquí
  }
  @media (min-width: 601px) {
    flex-basis: 5%;
    justify-content: flex-end;
    padding-left:20px;
  }
  @media (min-width: 900px) {
    flex-basis: 5%;
    padding-left:20px;
    justify-content: flex-end;
  }
  @media (min-width: 1400px) {
    flex-basis: 5%;
    justify-content: flex-end;
  }
`;
export const Logo = styled.img`
  height: 32px;
`;
export const LogoLinks = styled.img`
  height: 17px;
`;
export const Links = styled.a`
  font-family: "Roboto Regular", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    margin: 10px 0;
    font-size: 24px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    left: 0;
    right: auto;
  }

  &:not(:hover)::before {
    width: 0;
    left: auto;
    right: 0; /* Esto hará que la barra desaparezca hacia la derecha */
  }
  svg {
    margin-bottom: 7px;
    margin-right: 1px;
  }
`;

export const LinksSvg = styled.a`
  text-decoration: none;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: relative;
  overflow: hidden; /* Añadir esto para contener el pseudo-elemento dentro del enlace */

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%; /* Comenzar con una anchura de 0 */
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-in-out; /* Animar solo la propiedad width */
  }

  &:hover::before {
    width: 100%; /* En el hover, extendemos hasta la totalidad del elemento */
  }

  &:not(:hover)::before {
    width: 0%; /* Al retirar el ratón, la anchura vuelve a 0, haciendo que la barra desaparezca */
  }
`;

export const MobileMenu = styled(motion.div)`
  background-color: #222;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

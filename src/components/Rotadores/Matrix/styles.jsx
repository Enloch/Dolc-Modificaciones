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
    display: ${({ visible }) => (visible ? "block" : "none")};
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

export const StyledRangeInput = styled.input`
  appearance: none;
  width: 100%;
  min-width: 80px; /* Add a minimum width to prevent collapsing */
  height: 5px; /* Slightly thicker for better touch interaction */
  background: #d3d3d3; /* Lighter grey for track */
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px; /* Add some horizontal margin */

  &:hover {
    opacity: 1;
  }

  /* Thumb styles for WebKit browsers (Chrome, Safari, Edge) */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px; /* Adjusted size */
    height: 20px; /* Adjusted size */
    border-radius: 50%;
    background: #555; /* Darker grey for thumb */
    cursor: pointer;
  }

  /* Thumb styles for Firefox */
  &::-moz-range-thumb {
    width: 20px; /* Adjusted size */
    height: 20px; /* Adjusted size */
    border-radius: 50%;
    background: #555; /* Darker grey for thumb */
    cursor: pointer;
    border: none; /* Reset Firefox default border */
  }

  /* --- ADD MOBILE STYLES --- */
  @media (max-width: 600px) {
    height: 8px; /* Make track slightly thicker */
    min-width: 60px; /* Adjust min-width if needed */

    &::-webkit-slider-thumb {
      width: 25px; /* Larger thumb for touch */
      height: 25px; /* Larger thumb for touch */
    }

    &::-moz-range-thumb {
       width: 25px; /* Larger thumb for touch */
       height: 25px; /* Larger thumb for touch */
    }
     /* Add IE/Edge mobile adjustments if needed */
     &::-ms-thumb {
        width: 25px;
        height: 25px;
     }
  }
  /* --- END MOBILE STYLES --- */

  /* Optional: Styles for IE/Edge (older versions) */
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #555;
    border-radius: 5px;
  }

  &::-ms-fill-upper {
    background: #d3d3d3;
    border-radius: 5px;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #555;
    cursor: pointer;
    margin-top: 0; /* Adjust vertical alignment if needed */
  }
`;

// Component for the main control bar with slider
export const ControlBar = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center; /* Center items horizontally */
  gap: 15px;
  height: 45px;
  width: 90%; /* Take up most of the width */
  max-width: 500px; /* Limit max width on larger screens */
  padding: 0 10px; /* Add some padding */
  box-sizing: border-box; /* Include padding in width */

  /* Target the slider specifically within the bar */
  ${StyledRangeInput} {
    flex-grow: 1; /* Allow slider to take available space */
    min-width: 60px; /* Ensure minimum width */
  }

  /* Target the icons (assuming they are in <a> tags) */
  a {
    flex-shrink: 0; /* Prevent icons from shrinking */
  }

  img {
    display: block; /* Prevent extra space below images */
    width: 35px; /* Slightly smaller icons on mobile */
    height: 35px;
  }
  
  @media (max-width: 600px) {
     gap: 10px; /* Reduce gap on smaller screens */
     height: 40px; /* Slightly smaller bar */
     width: 95%; /* Use more width */
     
     img {
        width: 30px; /* Even smaller icons */
        height: 30px;
     }
  }

  @media (max-width: 400px) {
    /* Maybe stack items or further reduce icon size if needed */
     gap: 5px;
     img {
        width: 25px;
        height: 25px;
     }
  }
`;

// Component for the simpler control bar when fachada is visible
export const FachadaControlBar = styled.div`
  position: absolute;
  top: 10px;
  left: 10px; /* Adjust positioning */
  display: flex;
  align-items: center;
  gap: 15px; /* Smaller gap */
  height: 45px;
  
  img {
    display: block;
    width: 35px; 
    height: 35px;
  }

   @media (max-width: 600px) {
     gap: 10px;
     height: 40px;
     left: 5px;
     
     img {
        width: 30px;
        height: 30px;
     }
  }
`;

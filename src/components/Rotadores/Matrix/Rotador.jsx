import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Modelo } from "./MatrixModelo";
import {
  ContRotador,
  CanvasContainer,
  MenuContainer,
  IntroContainer,
  IntroContent,
  IntroImage,
  IntroText,
  BotonExpandir,
  ImagenExpandir,
} from "./styles";
import Menu from "./Menu";
import R360 from "../../../assets/icons/360.svg";
import IconoAbrir from "../../../assets/icons/open-indicator.svg";
import IconoCerrar from "../../../assets/icons/close-indicator.svg";
export default function Rotador() {
  const [model, setModel] = useState("Modelo");
  const [materialIndex, setMaterialIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [color, setColor] = useState("#ffffff0"); // Color blanco como color base predeterminado
  const [colorPickerActive, setColorPickerActive] = useState(false);

  const handleIntroClick = () => {
    setShowIntro(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContainerRef = useRef(null);

  const handleExpandClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ContRotador>
      <BotonExpandir onClick={handleExpandClick}>
        <ImagenExpandir
          src={isMenuOpen ? IconoAbrir : IconoCerrar}
          alt='Rotador'
        />
      </BotonExpandir>
      <CanvasContainer visible={isMenuOpen}>
        {showIntro && (
          <IntroContainer onClick={handleIntroClick}>
            <IntroContent>
              <IntroImage src={R360} alt='Rotador' />
              <IntroText>Presiona para interactuar</IntroText>
            </IntroContent>
          </IntroContainer>
        )}
        <Canvas linear flat style={{ position: "relative", top: 0, left: 0 }}>
          <PerspectiveCamera makeDefault fov={50} position={[0, -1, 1]} />
          <Environment files='/StudioE2.hdr' />
          <ambientLight intensity={0.3} />
          <ContactShadows
            opacity={0.5}
            scale={1}
            blur={1}
            far={1}
            resolution={256}
            color='#0000001e'
            position={[0, -0.09, 0]}
            frames={1}
          />
          {model === "Modelo" && (
            <Modelo
              material={materialIndex}
              metalness={materialIndex}
              roughness={materialIndex}
              color={color}
              colorPickerActive={colorPickerActive} // Pasar el estado colorPickerActive al componente Model1
            />
          )}
          <OrbitControls
            maxPolarAngle={1.6}
            minDistance={0.2}
            maxDistance={0.6}
            enableZoom={true}
            enablePan={false}
          />
        </Canvas>
      </CanvasContainer>

      <MenuContainer visible={isMenuOpen}>
        <Menu
          handleModelChange={setModel}
          handleMaterialChange={setMaterialIndex}
          color={color}
          setColor={setColor}
          colorPickerActive={colorPickerActive} // Pasar el estado colorPickerActive al componente Menu
          setColorPickerActive={setColorPickerActive} // Pasar el callback setColorPickerActive al componente Menu
        />
      </MenuContainer>
    </ContRotador>
  );
}

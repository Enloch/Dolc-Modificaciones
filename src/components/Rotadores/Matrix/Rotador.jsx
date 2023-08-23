import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useEnvironment,
  Lightformer,
} from "@react-three/drei";
import { Modelo } from "./MatrixModelo";
import {
  ContRotador,
  CanvasContainer,
  RotadorMenuContainer,
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
  const [materialIndex, setMaterialIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [color, setColor] = useState("#ffffff0"); // Color blanco como color base predeterminado
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [selectedMatrix, setSelectedMatrix] = useState(null);

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
          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[0, -1, 1]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <Environment files='/Test.exr' blur={1}>
            <Lightformer
              form='rect' // circle | ring | rect (optional, default = rect)
              intensity={1} // power level (optional = 1)
              color='white' // (optional = white)
              scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            />
          </Environment>
          <ambientLight intensity={0.3} />
          <ContactShadows
            opacity={0.5}
            scale={4}
            blur={1}
            far={1}
            resolution={256}
            color='#000000'
            position={[0, -0.1, 0]}
            frames={1}
          />
          <Modelo
            material={materialIndex}
            metalness={materialIndex}
            roughness={materialIndex}
            color={color}
            colorPickerActive={colorPickerActive} // Pasar el estado colorPickerActive al componente Model1
            selectedMatrix={selectedMatrix} // Pass selectedMatrix to Modelo
          />
          <OrbitControls
            maxPolarAngle={1.6}
            minDistance={0.2}
            maxDistance={0.6}
            enableZoom={true}
            enablePan={false}
          />
        </Canvas>
      </CanvasContainer>
      <RotadorMenuContainer visible={isMenuOpen}>
        <Menu
          handleMaterialChange={setMaterialIndex}
          color={color}
          setColor={setColor}
          colorPickerActive={colorPickerActive} // Pasar el estado colorPickerActive al componente Menu
          setColorPickerActive={setColorPickerActive} // Pasar el callback setColorPickerActive al componente Menu
          setSelectedMatrix={setSelectedMatrix} // Pass setSelectedMatrix to Menu
        />
      </RotadorMenuContainer>
    </ContRotador>
  );
}

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useEnvironment,
  Lightformer,
  Sky,
} from "@react-three/drei";
import { Modelo } from "./MatrixIntercambiador";
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
// import Menu from "./Menu";
import R360 from "../../../assets/icons/360.svg";
import IconoAbrir from "../../../assets/icons/open-indicator.svg";
import IconoCerrar from "../../../assets/icons/close-indicator.svg";
export default function Intercambiador() {
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
      {/* <BotonExpandir onClick={handleExpandClick}>
        <ImagenExpandir
          src={isMenuOpen ? IconoAbrir : IconoCerrar}
          alt='Rotador'
        />
      </BotonExpandir> */}
      <CanvasContainer visible={isMenuOpen}>
        {/* {showIntro && (
          <IntroContainer onClick={handleIntroClick}>
            <IntroContent>
              <IntroImage src={R360} alt='Rotador' />
              <IntroText>Presiona para interactuar</IntroText>
            </IntroContent>
          </IntroContainer>
        )} */}
        <Canvas linear flat style={{ position: "relative", top: 0, left: 0 }}>
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <PerspectiveCamera
            makeDefault
            far={1000}
            near={0.1}
            fov={25.361}
            position={[-0.368, 0.438, 3.611]}
            rotation={[0.843, 0.365, -0.149]}
          />
          <Environment files='/Test.exr' blur={1}></Environment>
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
          {/* <OrbitControls
            maxPolarAngle={1.6}
            minDistance={0.2}
            maxDistance={0.6}
            enableZoom={true}
            enablePan={false}
          /> */}
        </Canvas>
      </CanvasContainer>
      {/* <RotadorMenuContainer visible={isMenuOpen}>
        <Menu
          handleMaterialChange={setMaterialIndex}
          color={color}
          setColor={setColor}
          colorPickerActive={colorPickerActive} // Pasar el estado colorPickerActive al componente Menu
          setColorPickerActive={setColorPickerActive} // Pasar el callback setColorPickerActive al componente Menu
          setSelectedMatrix={setSelectedMatrix} // Pass setSelectedMatrix to Menu
        />
      </RotadorMenuContainer> */}
    </ContRotador>
  );
}

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useEnvironment,
  Lightformer,
  Sky,
  RandomizedLight,
  AccumulativeShadows,
  SoftShadows,
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
  const {
    lightX,
    lightY,
    lightZ,
    rotationX,
    rotationY,
    rotationZ,
    Intensidad,
  } = useControls({
    lightX: { value: 0, min: -50, max: 50, step: 0.1 },
    lightY: { value: 4.205, min: -50, max: 50, step: 0.1 },
    lightZ: { value: 12, min: 1, max: 100, step: 0.1 },
    Intensidad: { value: 0.5, min: 0, max: 3, step: 0.1 },
    // rotationX: { value: 0, min: -1, max: 1 },
    // rotationY: { value: 0, min: -1, max: 1 },
    // rotationZ: { value: 0, min: -1, max: 1 },
  });
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
        <Canvas
          colorManagement
          shadowMap
          shadows 
          style={{ position: "relative", top: 0, left: 0 }}
          camera={{
            position: [2.777, -1.686, 3.611],
            rotation: [0.843, 0.365, -0.149],
            fov: 25.361,
          }}
        >
          {/* <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          /> */}
          {/* <Environment files='/Test.hdr' background /> */}
          {/* <ambientLight intensity={0.3} /> */}
          <directionalLight
            name='Sun'
            intensity={Intensidad}
            decay={2}
            castShadow={true}
            position={[lightX, lightY, lightZ]}
            rotation={[-0.256, -0.335, 0.318]}
          />
          <Modelo />
          <AccumulativeShadows
            resolution={1024}
            frames={100}
            colorBlend={1.5}
            alphaTest={0.85}
            opacity={1.65}
            scale={6}
          >
            <RandomizedLight
              radius={3}
              ambient={0.6}
              position={[-10, 5, 15]}
              bias={0.001}
              size={1}
              mapSize={1024}
            />
          </AccumulativeShadows>
          {/* <SoftShadows /> */}
          {/*
          <OrbitControls
          // maxPolarAngle={1.6}
          // minDistance={0.2}
          // maxDistance={0.6}
          // enableZoom={true}
          // enablePan={false}
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

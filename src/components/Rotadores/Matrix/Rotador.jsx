import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Center,
} from "@react-three/drei";
import {
  HueSaturation,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import * as THREE from "three";
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
  // const { hue, saturation, middleGrey, maxLuminance } = useControls({
  //   middleGrey: {
  //     min: 0,
  //     max: 1,
  //     value: 0.6,
  //     step: 0.1,
  //   },
  //   maxLuminance: {
  //     min: 0,
  //     max: 64,
  //     value: 16,
  //     step: 1,
  //   },
  //   hue: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.05,
  //   },
  //   saturation: {
  //     value: 0,
  //     min: 0,
  //     max: Math.PI,
  //     step: 0.1,
  //   },
  // });
  const handleIntroClick = () => {
    setShowIntro(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContainerRef = useRef(null);
  const [models, setModels] = useState([]);
  const addModel = (newModel) => {
    if (models.length < 3) {
      setModels([...models, newModel]);
    }
  };
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
        <Canvas
          shadows
          flat
          style={{ position: "relative", top: 0, left: 0 }}
          gl={(gl) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 0.8;
            gl.outputEncoding = THREE.sRGBEncoding;
          }}
        >
          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[0, -1, 1]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          {/* <hemisphereLight intensity={0.35} /> */}
          {/* <ambientLight intensity={1} /> */}
          <pointLight
            castShadow
            shadow-bias={-0.1}
            shadow-mapSize={[2048, 2048]}
            position={[3, 0, 3]}
            intensity={13}
          />
          <pointLight
            castShadow
            shadow-bias={-0.1}
            position={[-3, 0, 3]}
            intensity={13}
          />
          <pointLight
            castShadow
            shadow-bias={-0.1}
            position={[0, 0, 3]}
            intensity={13}
          />
          <pointLight
            castShadow
            shadow-bias={-0.1}
            position={[0, 0, -3]}
            intensity={13}
          />
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
          <Center>
            <Modelo
              position={[0, 0, 0]} // posición modificada
              material={materialIndex}
              metalness={materialIndex}
              roughness={materialIndex}
              color={color}
              colorPickerActive={colorPickerActive}
              selectedMatrix={selectedMatrix}
            />
            <Modelo
              position={[0.15, 0, 0]} // posición modificada
              material={materialIndex}
              metalness={materialIndex}
              roughness={materialIndex}
              color={color}
              colorPickerActive={colorPickerActive}
              selectedMatrix={selectedMatrix}
            />
          </Center>
          <EffectComposer>
            <HueSaturation hue={-0.1} saturation={0.2} />
          </EffectComposer>
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

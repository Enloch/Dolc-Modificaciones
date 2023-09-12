import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
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
  useHelper,
} from "@react-three/drei";

//----------MODELOS----------------
import { Modelo } from "./MatrixIntercambiador";
import { Base } from "./Base";
import { Matriz3kv } from "./Matriz3";

//----------MENU----------------
// import Menu from "./Menu";

function Lights() {
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
    lightY: { value: 15, min: -50, max: 50, step: 0.1 },
    lightZ: { value: 12, min: 1, max: 100, step: 0.1 },
    Intensidad: { value: 0.75, min: 0, max: 3, step: 0.1 },
    // rotationX: { value: 0, min: -1, max: 1 },
    // rotationY: { value: 0, min: -1, max: 1 },
    // rotationZ: { value: 0, min: -1, max: 1 },
  });
  const light = useRef();
  const sphereSize = 1;
  useHelper(light, THREE.PointLightHelper, 0.5, "hotpink");
  return (
    <pointLight
      ref={light}
      intensity={Intensidad}
      position={[lightX, lightY, lightZ]}
      shadow-mapSize={2048}
      castShadow
      shadow-bias={-0.001}
    />
  );
}
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
        <Canvas
          colorManagement
          style={{ position: "relative", top: 0, left: 0 }}
          shadows
          camera={{
            position: [2.777, -1.686, 3.611],
            rotation: [0.843, 0.365, -0.149],
            fov: 25.361,
          }}
        >
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          {/* <ambientLight intensity={0.3} /> */}
          {/* <directionalLight
            name='Sun'
            intensity={Intensidad}
            decay={2}
            castShadow={true}
            position={[lightX, lightY, lightZ]}
            rotation={[-0.256, -0.335, 0.318]}
          /> */}
          <hemisphereLight intensity={1} />
          {/* <pointLight position={[15, 0, 10]} intensity={0.75} castShadow /> */}
          {/* <pointLight position={[-15, 0, 10]} intensity={0.75} castShadow /> */}
          <Lights />
          {/* <directionalLight
            intensity={0.5}
            position={[5, 20, 50]}
            castShadow
            shadow-mapSize={4096}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          /> */}
          {/* <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}

          >
            <orthographicCamera
              attach='shadow-camera'
              args={[-10, 10, -10, 10, 0.1, 50]}
            />
          </directionalLight> */}
          <Base />
          <Matriz3kv />
          {/* <pointLight position={[0, 0, 10]} intensity={0.25} castShadow /> */}
          {/* <pointLight position={[0, 0, -10]} intensity={1} castShadow /> */}
          {/* <OrbitControls /> */}
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

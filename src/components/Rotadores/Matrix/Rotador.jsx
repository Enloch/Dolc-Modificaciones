import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Center, Environment, Sky, Loader, SoftShadows, Gltf, useHelper } from "@react-three/drei";
import { HueSaturation, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";
import { Modelo } from "./MatrixModelo";
import {
  ContRotador,
  CanvasContainer,
  RotadorMenuContainer,
  StyledRangeInput,
  ControlBar, // Import ControlBar
  FachadaControlBar, // Import FachadaControlBar
} from "./styles";
import Menu from "./Menu";
import R360 from "../../../assets/icons/360.svg";
import { Fachada } from "./ModeloFachada";
import useStore from "./store";
import { SpotLightComponent, Box } from "./Spotlight";
import { FachadaHorizontal } from "./ModeloFachadaHorizontal";
import Rotar from "../../../assets/icons/rotar.svg";
import Front from "../../../assets/icons/front.svg";
import Inside from "../../../assets/icons/inside.svg";
import Exit from "../../../assets/icons/exit.svg";
import { LamasHorizontalesInterior } from "./LamasHorizontalesInterior";
import { LamasVerticalesInterior } from "./LamasVerticalesInterior";
import { Interior } from "./ModeloInterior";
import { MatrixV2 } from "./MatrixV2";
import { useControls } from "leva";
export default function RotadorMatrix() {
  const {
    materialIndex,
    showIntro,
    selectedMatrix1,
    selectedMatrix2,
    selectedMatrix3,
    selectedMatrix4,
    selectedMatrix5,
    selectedMatrix6,
    isMenuOpen,
    setShowIntro,
    setIsMenuOpen,
    numModels,
    setNumModels,
  } = useStore();

  const handleIntroClick = () => {
    setShowIntro(false);
  };

  const modelPositions = [
    selectedMatrix1.posicion,
    selectedMatrix2.posicion,
    selectedMatrix3.posicion,
    selectedMatrix4.posicion,
    selectedMatrix5.posicion,
    selectedMatrix6.posicion,
  ];
  const calculateMean = (array) => {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
  };
  const cameraPosition = ((numModels - 1) * calculateMean(modelPositions)) / 2;

  // Nuevo estado para la rotación
  const [rotation, setRotation] = useState(0);
  const [fachadaVisible, setFachadaVisible] = useState(false);
  const [rotada, setRotada] = useState(false);
  const [esInterior, setEsInterior] = useState(false);

  // Función para rotar los modelos
  const rotateModels = () => {
    setRotada(true);
    setRotation(Math.PI / 2); // Rota 90 grados
  };

  // Función para restablecer la rotación
  const resetRotation = () => {
    setRotada(false);
    setRotation(0);
  };

  const handleRotationClick = () => {
    if (!rotada) {
      rotateModels();
    } else {
      resetRotation();
    }
  };
  const handleFachadaClick = () => {
    setFachadaVisible(true);
    setEsInterior(false);
  };
  const handleInteriorClick = () => {
    setFachadaVisible(true);
    setEsInterior(true);
  };
  const handleResetClick = () => {
    setFachadaVisible(!fachadaVisible);
    setNumModels(1);
  };
  const [targetValue, setTargetValue] = useState([0, 0, 0]);

  useEffect(() => {
    const newTargetValue = numModels > 1 ? (rotation != 0 ? [0, cameraPosition, 0] : [cameraPosition, 0, 0]) : [0, 0, 0];

    setTargetValue(newTargetValue);
  }, [numModels, rotation, cameraPosition]); // Dependencias del efecto

  return (
    <ContRotador>
      <CanvasContainer visible={!fachadaVisible}>
        <Suspense fallback={null}>
          <Canvas
            frameloop="demand"
            shadows={true}
            gl={{
              antialias: true,
              powerPreference: "high-performance",
              pixelRatio: 1,
            }}
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* <Perf /> */}
            <CameraAdjuster />
            <Suspense fallback={null}>
              {fachadaVisible === false && (
                <>
                  <EscenaRotador
                    materialIndex={materialIndex}
                    numModels={numModels}
                    modelPositions={modelPositions}
                    rotation={rotation}
                    targetValue={targetValue}
                  />
                  <OrbitControls
                    target={targetValue}
                    minDistance={0.3}
                    maxDistance={0.85 + cameraPosition}
                    enableZoom={true}
                    enablePan={false}
                  />
                  <EffectComposer multisampling={4}>
                    <HueSaturation hue={-0.12} saturation={0.4} />
                  </EffectComposer>
                </>
              )}

              {fachadaVisible && (
                <>
                  {esInterior && <EscenaInterior rotada={rotada} />}
                  {!esInterior && <EscenaFachada rotada={rotada} />}
                </>
              )}
            </Suspense>
          </Canvas>
        </Suspense>
        <Loader />
        {fachadaVisible === false && (
          <ControlBar>
            <a onClick={handleRotationClick}>
              <img src={Rotar} />
            </a>
            <StyledRangeInput type="range" min="1" max="6" value={numModels} onChange={(e) => setNumModels(parseInt(e.target.value))} />
            <a onClick={handleFachadaClick}>
              <img src={Front} />
            </a>
            <a onClick={handleInteriorClick}>
              <img src={Inside} />
            </a>
          </ControlBar>
        )}
        {fachadaVisible === true && (
          <>
            <FachadaControlBar>
              <a onClick={handleRotationClick}>
                <img src={Rotar} />
              </a>
              <a onClick={handleResetClick}>
                <img src={Exit} />
              </a>
            </FachadaControlBar>
            {!esInterior && (
              <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                <img
                  src="/modelos/Matrix/BALCONES.png"
                  style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "16 / 9" }}
                />
              </div>
            )}
          </>
        )}
      </CanvasContainer>
      <RotadorMenuContainer visible={!fachadaVisible}>
        <Menu />
      </RotadorMenuContainer>
    </ContRotador>
  );
}
const CameraAdjuster = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);

  return null;
};
const EscenaRotador = ({ numModels, modelPositions, cameraPosition, rotation, targetValue }) => {
  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 1]} near={0.1} far={20} zoom={0.95} />
      <Luces />
      <Center rotation={[0, 0, rotation]}>
        <Modelo
          modelId={1}
          position={[0, 0, 0]} // posición modificada
        />
        {numModels > 1 && (
          <Modelo
            modelId={2}
            position={[modelPositions[0], 0, 0]} // posición modificada
          />
        )}
        {numModels > 2 && (
          <Modelo
            modelId={3}
            position={[modelPositions[0] + modelPositions[1], 0, 0]} // posición modificada
          />
        )}
        {numModels > 3 && (
          <Modelo
            modelId={4}
            position={[modelPositions[0] + modelPositions[1] + modelPositions[2], 0, 0]} // posición modificada
          />
        )}
        {numModels > 4 && (
          <Modelo
            modelId={5}
            position={[modelPositions[0] + modelPositions[1] + modelPositions[2] + modelPositions[3], 0, 0]} // posición modificada
          />
        )}
        {numModels > 5 && (
          <Modelo
            modelId={6}
            position={[modelPositions[0] + modelPositions[1] + modelPositions[2] + modelPositions[3] + modelPositions[4], 0, 0]} // posición modificada
          />
        )}
      </Center>
    </>
  );
};
const Luces = () => {
  const Intensidad = 9;
  return (
    <>
      <pointLight
        // castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[2048, 2048]}
        position={[3, 0, 3]}
        intensity={9}
      />
      <pointLight
        // castShadow
        shadow-bias={-0.0001}
        position={[-3, 0, 3]}
        intensity={9}
      />
      <pointLight
        // castShadow
        shadow-bias={-0.0001}
        position={[0, 0, 3]}
        intensity={9}
      />
      <pointLight
        // castShadow
        shadow-bias={-0.0001}
        position={[0, 0, -3]}
        intensity={9}
      />
    </>
  );
};
const EscenaFachada = ({ rotada }) => {
  const lightRef = useRef();
  const targetRef = useRef();
  const { scene } = useThree();

  // Configuramos el target de la luz cuando los refs están disponibles
  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
    }
  }, [lightRef, targetRef]);
  // const { lightX, lightY, lightZ, targetX, targetY, targetZ, fustruma } = useControls("Fachada", {
  //   lightX: { value: -50, min: -50, max: 50, step: 0.01 },
  //   lightY: { value: 50, min: -50, max: 50, step: 0.01 },
  //   lightZ: { value: 50, min: 1, max: 100, step: 0.01 },
  //   targetX: { value: 0, min: -50, max: 50, step: 0.01 },
  //   targetY: { value: 0, min: -50, max: 50, step: 0.01 },
  //   targetZ: { value: 0, min: -50, max: 50, step: 0.01 },
  //   fustruma: { value: 10, min: 1, max: 100, step: 0.01 },
  // });

  // useEffect(() => {
  //   if (lightRef.current && targetRef.current) {
  //     lightRef.current.position.set(lightX, lightY, lightZ);
  //     targetRef.current.position.set(targetX, targetY, targetZ);
  //   }
  // }, [lightX, lightY, lightZ, targetX, targetY, targetZ, fustruma]);
  // useHelper(lightRef, THREE.DirectionalLightHelper, 5, "red");
  // useHelper(lightRef, THREE.CameraHelper);
  const fustrum = 20;
  return (
    <>
      <PerspectiveCamera
        makeDefault={true}
        far={150}
        near={0.1}
        fov={27}
        position={[7.314, 12.229, 15.262]}
        rotation={[0.325, 0.75, -0.226]}
      />
      {/* <Environment files={hdri} /> */}
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_garden_1k.hdr" />
      {/* <SoftShadows size={20} samples={32} focus={1} /> */}
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={5}
        position={[-50, 50, 42.6]}
        shadow-bias={-0.00004}
        shadow-intensity={0.8}
        shadow-normalBias={0.05}
        shadow-mapSize={[8192, 8192]}
        shadow-camera-left={-fustrum}
        shadow-camera-right={fustrum}
        shadow-camera-top={fustrum}
        shadow-camera-bottom={-fustrum}
        shadow-camera-near={1}
        shadow-camera-far={150}
      />
      <object3D ref={targetRef} position={[-21, 31.7, 4.67]} />
      <MatrixV2 />
      {!rotada ? <Fachada /> : <FachadaHorizontal />}
      {/* <Gltf src="/modelos/Matrix/MatrixV2.glb" /> */}
      {/* <OrbitControls /> */}
    </>
  );
};

const EscenaInterior = ({ rotada }) => {
  const { size } = useThree();
  const fustrum = 10;
  const lightRef = useRef();
  const targetRef = useRef(new THREE.Object3D());
  const { scene } = useThree();

  useEffect(() => {
    const light = lightRef.current;
    const targetObject = targetRef.current;

    if (light && targetObject) {
      scene.add(targetObject);
      light.target = targetObject;
    }
  }, [scene]);
  return (
    <>
      {/* <primitive object={targetRef.current} position={[0, 2,0]} /> */}
      <directionalLight
        // ref={lightRef}
        position={[-4.7, 1, 6]}
        castShadow
        intensity={3.7}
        shadow-bias={-0.0004}
        shadow-mapSize={1024}
      >
        <orthographicCamera attach="shadow-camera" args={[-fustrum, fustrum, fustrum, -fustrum, 0.001, 100]} />
      </directionalLight>
      <PerspectiveCamera makeDefault={true} far={30} near={0.1} fov={45} position={[0, 2.038, 5.249]} zoom={1.1} />
      {!rotada ? <LamasVertical /> : <LamasHorizontal />}
      <ParedInterior />
    </>
  );
};

const LamasHorizontal = () => {
  return (
    <>
      <LamasHorizontalesInterior />
    </>
  );
};

const LamasVertical = () => {
  return (
    <>
      <LamasVerticalesInterior />
    </>
  );
};
const ParedInterior = () => {
  return (
    <>
      <Interior />
    </>
  );
};

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  PerformanceMonitor,
  Center,
  Environment,
  Sky,
  Loader,
  Grid,
} from "@react-three/drei";
import {
  HueSaturation,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
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
export default function RotadorMatrix() {
  const {
    materialIndex,
    showIntro,
    color,
    colorPickerActive,
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
  // console.log(modelPositions);
  const handleExpandClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
    const newTargetValue =
      numModels > 1
        ? rotation != 0
          ? [0, cameraPosition, 0]
          : [cameraPosition, 0, 0]
        : [0, 0, 0];

    setTargetValue(newTargetValue);
  }, [numModels, rotation, cameraPosition]); // Dependencias del efecto
  console.log(fachadaVisible);
  return (
    <ContRotador>
      {/* <BotonExpandir onClick={handleExpandClick}>
        <ImagenExpandir
          src={isMenuOpen ? IconoAbrir : IconoCerrar}
          alt='Rotador'
        />
      </BotonExpandir> */}
      <CanvasContainer visible={!fachadaVisible}>
        {showIntro && (
          <IntroContainer onClick={handleIntroClick}>
            <IntroContent>
              <IntroImage src={R360} alt='Rotador' />
              <IntroText>Presiona para interactuar</IntroText>
            </IntroContent>
          </IntroContainer>
        )}
        <Canvas
          shadows={"soft"}
          flat
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          gl={(gl) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 0.8;
            gl.outputEncoding = THREE.sRGBEncoding;
          }}
        >
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
                <EffectComposer>
                  <HueSaturation hue={-0.12} saturation={0.4} />
                </EffectComposer>
              </>
            )}
            {fachadaVisible === true && (
              <>
                {esInterior === true && <EscenaInterior rotada={rotada} />}
                {esInterior === false && <EscenaFachada rotada={rotada} />}

                {/* <EffectComposer>
                  <HueSaturation hue={-0.12} saturation={0.2} />
                </EffectComposer> */}
              </>
            )}
          </Suspense>
        </Canvas>
        <Loader />
        {fachadaVisible === false && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              height: "45px",
            }}
          >
            <a onClick={handleRotationClick} style={{ cursor: "pointer" }}>
              <img src={Rotar} style={{ width: "45px" }} />
            </a>
            <input
              style={{
                appearance: "none", // Esto es para asegurar que los estilos se apliquen correctamente en todos los navegadores
                width: "100%", // Ajusta al ancho que prefieras
                height: "3px", // Altura de la barra
                background: "#292929", // Color de fondo de la barra (gris claro)
                outline: "none", // Remueve el borde que aparece al hacer foco en algunos navegadores
                opacity: "0.7", // Opacidad de la barra
                transition: "opacity .2s", // Transición suave para la opacidad
                borderRadius: "5px", // Bordes redondeados
                // Estilos para el pulgar (la parte que se desliza)
                WebkitSliderThumb: {
                  appearance: "none",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  background: "#888", // Color del pulgar (gris)
                  cursor: "pointer",
                },
              }}
              type='range'
              min='1'
              max='6'
              value={numModels}
              onChange={(e) => setNumModels(parseInt(e.target.value))}
            />
            <a onClick={handleFachadaClick} style={{ cursor: "pointer" }}>
              <img src={Front} style={{ width: "45px" }} />
            </a>
            <a onClick={handleInteriorClick} style={{ cursor: "pointer" }}>
              <img src={Inside} style={{ width: "45px" }} />
            </a>
          </div>
        )}
        {fachadaVisible === true && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "20px",
              display: "flex",
              alignItems: "center",
              gap: "25px",
              height: "45px",
            }}
          >
            <a onClick={handleRotationClick} style={{ cursor: "pointer" }}>
              <img src={Rotar} style={{ width: "45px" }} />
            </a>
            <a onClick={handleResetClick} style={{ cursor: "pointer" }}>
              <img src={Exit} style={{ width: "45px" }} />
            </a>
          </div>
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
const EscenaRotador = ({
  numModels,
  modelPositions,
  cameraPosition,
  rotation,
  targetValue,
}) => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[0, 0, 1]}
        near={0.1}
        far={20}
        zoom={0.95}
      />
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
            position={[
              modelPositions[0] + modelPositions[1] + modelPositions[2],
              0,
              0,
            ]} // posición modificada
          />
        )}
        {numModels > 4 && (
          <Modelo
            modelId={5}
            position={[
              modelPositions[0] +
                modelPositions[1] +
                modelPositions[2] +
                modelPositions[3],
              0,
              0,
            ]} // posición modificada
          />
        )}
        {numModels > 5 && (
          <Modelo
            modelId={6}
            position={[
              modelPositions[0] +
                modelPositions[1] +
                modelPositions[2] +
                modelPositions[3] +
                modelPositions[4],
              0,
              0,
            ]} // posición modificada
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
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[2048, 2048]}
        position={[3, 0, 3]}
        intensity={9}
      />
      <pointLight
        castShadow
        shadow-bias={-0.0001}
        position={[-3, 0, 3]}
        intensity={9}
      />
      <pointLight
        castShadow
        shadow-bias={-0.0001}
        position={[0, 0, 3]}
        intensity={9}
      />
      <pointLight
        castShadow
        shadow-bias={-0.0001}
        position={[0, 0, -3]}
        intensity={9}
      />
    </>
  );
};
const EscenaFachada = ({ rotada }) => {
  const fustrum = 10;

  return (
    <>
      <PerspectiveCamera
        makeDefault={true}
        far={20}
        near={0.1}
        fov={37.299}
        position={[0, -1.709, 2.079]}
        rotation={[1.03, 0, 0]}
      />
      {/* <Environment files={hdri} /> */}
      <Environment
        files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_garden_1k.hdr'
        background
      />
      <directionalLight
        position={[6, 2, 4]}
        // position={[posicion.x, posicion.y, posicion.z]}
        castShadow
        intensity={2.5}
        // intensity={3}
        shadow-bias={-0.0001}
        shadow-mapSize={8192}
      >
        <orthographicCamera
          attach='shadow-camera'
          args={[-fustrum, fustrum, fustrum, -fustrum, 0.001, 100]}
        />
      </directionalLight>
      <Sky
        distance={10000}
        rayleigh={4}
        sunPosition={[6, 2, 4]}
        turbidity={20}
      />

      {!rotada ? <Fachada /> : <FachadaHorizontal />}
    </>
  );
};

const EscenaInterior = ({ rotada }) => {
  const { size } = useThree();
  const aspect = size.width / size.height;

  // Ajusta el campo de visión en función del aspecto del canvas
  const fov = aspect > 1 ? 41 : 41 / aspect;
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
        shadow-bias={-0.00001}
        shadow-mapSize={8192}
      >
        <orthographicCamera
          attach='shadow-camera'
          args={[-fustrum, fustrum, fustrum, -fustrum, 0.001, 100]}
        />
      </directionalLight>
      <PerspectiveCamera
        makeDefault={true}
        far={30}
        near={0.1}
        fov={fov}
        position={[0, 2.038, 5.249]}
      />
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

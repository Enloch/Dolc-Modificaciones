import { useRef, useEffect, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Sky,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, SSAO, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";
import { EscenaTXT } from "./EscenaTXT";
import { TXTUI, Iconos } from "./ui";
import { useDeviceOrientation } from "../../../hooks/useDeviceOrientation"; // Adjusted path
import { useConfigStore } from "./store"; // Import useConfigStore
import styled from "@emotion/styled";
import { Alert, AlertTitle } from "@mui/material"; // Ensure Alert and AlertTitle are imported

let rotacionX = 0;
let rotacionY = 0;
// let rotacionZ = 8;
let rotacionZ = 244.4;

// Styled component for the landscape prompt message
const LandscapePrompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.95); // Darker for more focus
  color: white;
  z-index: 10000; // Ensure it's on top of everything
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.2rem;

  p {
    margin-bottom: 20px;
    line-height: 1.6;
  }

  // Optional: Add an icon (e.g., a rotation icon)
  // &::before {
  //   content: '↺'; // Example rotation icon
  //   font-size: 3rem;
  //   margin-bottom: 15px;
  // }
`;

// Styled component for the loading overlay
const LoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95); // Darker for more focus
  color: white;
  z-index: 10000; // Ensure it's on top of everything
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

// Componente para la luz direccional con target
function DirectionalLightWithTarget() {
  const lightRef = useRef();
  const targetRef = useRef();
  const { scene } = useThree();

  // Configuramos el target de la luz cuando los refs están disponibles
  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
      scene.add(targetRef.current); // Es necesario añadir el target a la escena
    }
  }, [scene]);

  return (
    <>
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={2}
        position={[-25, 7, 16]}
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.001}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      {/* Este objeto actúa como el target de la luz */}
      <object3D ref={targetRef} position={[0, 0, 0]} />
    </>
  );
}

export default function Escena3DTXT() {
  const [selectedSection, setSelectedSection] = useState(null); // State for selected section
  const { isMobile, isLandscape } = useDeviceOrientation();
  const [currentFrameLoop, setCurrentFrameLoop] = useState("always"); // Initial frameloop mode
  const { materialPorcelanicoSeleccionado } = useConfigStore(); // Get selected material

  // Switch to 'demand' frameloop after initial rendering or material change
  useEffect(() => {
    setCurrentFrameLoop("always"); // Set to always when effect runs
    const timer = setTimeout(() => {
      setCurrentFrameLoop("demand");
    }, 5000); // User-defined delay
    return () => clearTimeout(timer); // Cleanup timer on unmount or before next run
  }, [materialPorcelanicoSeleccionado]); // Re-run when material changes

  // Handler for Popover confirmation from Iconos
  const handleIconConfigAccept = (sectionName, cmValue) => {
    console.log(`Configuration accepted for ${sectionName}: ${cmValue}`);

    // Toggle selection: if clicked section is already selected, deselect it. Otherwise, select it.
    setSelectedSection((prevSelected) =>
      prevSelected === sectionName ? null : sectionName
    );
    // TODO: Store cmValue if needed for EscenaTXT, e.g., in a state like sectionConfigs
  };

  // Handler for direct clicks on the 3D model parts via EscenaTXT
  const handleDirectModelClick = (sectionName) => {
    console.log(`Direct model click on: ${sectionName}`);
    setSelectedSection((prevSelected) =>
      prevSelected === sectionName ? null : sectionName
    );
    // If a direct click should open the popover, or clear a value, add logic here.
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {isMobile && !isLandscape ? (
        <LandscapePrompt>
          <p>
            Para una mejor experiencia, por favor gira tu dispositivo a la
            posición horizontal (apaisado).
          </p>
          <p>
            La experiencia en este configurador puede no ser óptima en
            dispositivos móviles. Para mejores resultados, considera usar un
            dispositivo con pantalla más grande o un ordenador.
          </p>
        </LandscapePrompt>
      ) : (
        <>
          {isMobile &&
            isLandscape && ( // Show only if mobile AND landscape
              <Alert
                severity="warning"
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1001, // Ensure it's above general UI but potentially below critical modals
                  minWidth: "300px",
                  maxWidth: "calc(100% - 40px)", // Max width with some padding
                  boxSizing: "border-box",
                }}
              >
                <AlertTitle>Aviso para móviles</AlertTitle>
                La experiencia en este configurador puede no ser óptima en
                dispositivos móviles. Para mejores resultados, considera usar un
                dispositivo con pantalla más grande o un ordenador.
              </Alert>
            )}
          <TXTUI />
          <Iconos onConfigAccept={handleIconConfigAccept} />
          <Canvas
            flat
            frameloop={currentFrameLoop} // Use state for dynamic frameloop
            shadows={"soft"}
            gl={{ antialias: false }}
          >
            {/* Configuración de cámara */}
            <PerspectiveCamera
              makeDefault={true}
              far={100}
              near={0.1}
              fov={31.417}
              position={[10, 6.6, 9.4]}
              rotation={[0.005, 0.973, -0.004]}
            />
            {/* <SoftShadows size={32} samples={10} focus={1} /> */}
            {/* <Sky azimuth={0.973} turbidity={20} sunPosition={[2, 2, 1]} /> */}
            {/* Componente 3D */}
            <EscenaTXT
              onSectionClick={handleDirectModelClick}
              // Pass cmValue or sectionConfigs here if EscenaTXT needs it
            />
            {/* Entorno */}
            <Environment
              files="/HDRI INTERCAMBIADOR TXT.hdr"
              background
              backgroundIntensity={3}
              environmentIntensity={1}
              environmentRotation={[rotacionX, rotacionZ, rotacionY]}
              backgroundRotation={[rotacionX, rotacionZ, rotacionY]}
            />
            {/* Reemplazamos la luz direccional con nuestro componente personalizado */}
            {/* <DirectionalLightWithTarget />
             */}
            <directionalLight
              castShadow
              intensity={4}
              position={[-25, 7, 16]}
              shadow-mapSize={[4096, 4096]}
              shadow-bias={-0.001}
              shadow-camera-left={-15}
              shadow-camera-right={15}
              shadow-camera-top={15}
              shadow-camera-bottom={-15}
              shadow-camera-near={0.1}
              shadow-camera-far={50}
            />
            {/* Luz ambiental suave para iluminar áreas en sombra */}
            {/* <ambientLight intensity={1} color={0xffffff} /> */}
            <EffectComposer
              enableNormalPass
              enabled={true}
              autoClear={false}
              multisampling={8}
            >
              <ToneMapping
                adaptive
                resolution={256}
                middleGrey={0.5}
                maxLuminance={16.0}
                averageLuminance={1.0}
                adaptationRate={1.0}
                mode={ToneMapping.ACES}
              />
            </EffectComposer>
          </Canvas>
        </>
      )}
    </div>
  );
}

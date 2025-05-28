import React, { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera, SoftShadows, Stats } from "@react-three/drei";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";
import { EscenaTXT } from "./EscenaTXT";
import { useConfigStore } from "./store";
import { Leva, useControls, folder } from "leva";
import Layers from "../../Layers";

const rotacionX = 0;
const rotacionY = 0;
const rotacionZ = 2.094395;
// const rotacionZ = 244.4;
function DirectionalLightWithTarget(targetX, targetY, targetZ) {
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
        intensity={2.75}
        position={[-10, 15, 16]}
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.001}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
      />
      {/* Este objeto actúa como el target de la luz */}
      <object3D ref={targetRef} position={[0, 10, 5]} />
    </>
  );
}
export function CanvasSetup() {
  const [currentFrameLoop, setCurrentFrameLoop] = useState("always");
  const [renderer, setRenderer] = useState();
  const { materialPorcelanicoSeleccionado } = useConfigStore();
  const cameraRef = useRef();
  const directionalLightRef = useRef();
  const lightTargetRef = useRef();

  useEffect(() => {
    setCurrentFrameLoop("always");
    const timer = setTimeout(() => {
      setCurrentFrameLoop("demand");
    }, 5000);
    return () => clearTimeout(timer);
  }, [materialPorcelanicoSeleccionado]);

  useEffect(() => {
    if (directionalLightRef.current) {
      directionalLightRef.current.target.position.set(5, 5, 0);
      directionalLightRef.current.target.updateMatrixWorld();
    }
  }, []);

  // Configuración de capas
  const [cameraLayers, setCameraLayers] = useState([0, 1]); // La cámara ve las capas 0 y 1

  // Añadir un renderizado forzado al inicio para asegurar que todo se renderice correctamente
  useEffect(() => {
    // Forzar un renderizado después de un breve retraso
    const timer = setTimeout(() => {
      setCurrentFrameLoop((prev) => (prev === "always" ? "demand" : "always"));
      // Volver al estado original después de otro breve retraso
      setTimeout(() => {
        setCurrentFrameLoop("always");
      }, 100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Leva collapsed />
      <Canvas
        // flat
        frameloop={currentFrameLoop}
        shadows={"soft"}
      >
        <Stats />
        <PerspectiveCamera
          makeDefault={true}
          ref={cameraRef}
          far={25}
          near={0.1}
          fov={31.417}
          position={[10, 6.6, 9.4]}
          rotation={[0.005, 0.973, -0.004]}
          layers={[1]}
        />

        <SoftShadows size={10} samples={10} focus={4} />
        {/* Componente 3D */}
        <EscenaTXT layer />
        {/* Entorno */}
        <Environment
          files="/HDRI INTERCAMBIADOR TXT.hdr"
          background
          backgroundIntensity={1}
          environmentIntensity={1}
          environmentRotation={[rotacionX, rotacionZ, rotacionY]}
          backgroundRotation={[rotacionX, rotacionZ, rotacionY]}
          // encoding={3001}
        />
        <DirectionalLightWithTarget targetX={0} targetY={10} targetZ={5} />

        <pointLight position={[7, 6, 5.5]} intensity={200} decay={1} layers={1} />
      </Canvas>
    </>
  );
}

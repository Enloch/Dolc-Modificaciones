import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, SoftShadows, Stats } from "@react-three/drei";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";
import { EscenaTXT } from "./EscenaTXT";
import { useConfigStore } from "./store";
import { Leva, useControls, folder } from "leva";

const rotacionX = 0;
const rotacionY = 0;
const rotacionZ = 244.4;
// const rotacionZ = 244.4;

export function CanvasSetup({ sectionConfigs, cmValue, onSectionClick }) {
  const [currentFrameLoop, setCurrentFrameLoop] = useState("always");
  const { materialPorcelanicoSeleccionado } = useConfigStore();

  useEffect(() => {
    setCurrentFrameLoop("always");
    const timer = setTimeout(() => {
      setCurrentFrameLoop("demand");
    }, 5000);
    return () => clearTimeout(timer);
  }, [materialPorcelanicoSeleccionado]);

  return (
    <>
      <Leva collapsed />
      <Canvas
        flat
        frameloop={currentFrameLoop}
        shadows={"soft"}
        gl={{
          // preserveDrawingBuffer: true,
          antialias: false,
        }}
      >
        <Stats />
        <PerspectiveCamera
          makeDefault={true}
          far={100}
          near={0.1}
          fov={31.417}
          position={[10, 6.6, 9.4]}
          rotation={[0.005, 0.973, -0.004]}
        />
        <SoftShadows size={32} samples={10} focus={1} />
        {/* Componente 3D */}
        <EscenaTXT sectionConfigs={sectionConfigs} cmValue={cmValue} onSectionClick={onSectionClick} />
        {/* Entorno */}
        <Environment
          files="/HDRI INTERCAMBIADOR TXT.hdr"
          background
          backgroundIntensity={3}
          environmentIntensity={1}
          environmentRotation={[rotacionX, rotacionZ, rotacionY]}
          backgroundRotation={[rotacionX, rotacionZ, rotacionY]}
        />
        {/* <DirectionalLightWithTarget /> */}
        <directionalLight
          castShadow
          intensity={2}
          position={[-25, 7, 16]}
          shadow-mapSize={[4096, 4096]}
          shadow-bias={-0.0}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
        />
        <ambientLight intensity={2} />
        <EffectComposer enableNormalPass enabled={true} autoClear={false} multisampling={8}>
          <ToneMapping
            adaptive
            resolution={256}
            middleGrey={0.6}
            maxLuminance={16.0}
            averageLuminance={1.0}
            adaptationRate={1.0}
            mode={ToneMapping.ACES_FILMIC}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

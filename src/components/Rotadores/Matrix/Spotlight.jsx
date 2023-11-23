import React, { useRef, useEffect } from "react";
import { useControls } from "leva";
import { SpotLightHelper, Object3D } from "three";
import { useThree } from "@react-three/fiber";

// Componente SpotLightComponent
export const SpotLightComponent = ({ targetPosition, lightPosition }) => {
  const lightRef = useRef();
  const targetRef = useRef(new Object3D());
  const helperRef = useRef();
  const { scene } = useThree();

  const { color, intensity, angle, penumbra, position } = useControls(
    "SpotLight",
    {
      color: "#ffffff",
      intensity: { value: 500, min: 0, max: 750, step: 1 },
      angle: { value: Math.PI / 8, min: 0, max: Math.PI / 2, step: 0.01 },
      penumbra: { value: 0, min: 0, max: 1, step: 0.1 },
      position: { x: 6, y: 17, z: 8 },
    }
  );

  useEffect(() => {
    const target = targetRef.current;
    target.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    scene.add(target);
    lightRef.current.target = target;

    const helper = new SpotLightHelper(lightRef.current, "red");
    helperRef.current = helper;
    scene.add(helper);

    helper.update();

    return () => {
      scene.remove(target);
      scene.remove(helper);
    };
  }, [targetPosition, scene]);

  useEffect(() => {
    helperRef.current?.update();
  }, [targetPosition, color, intensity, angle, penumbra]); // Agregado color, intensity, angle, penumbra a las dependencias

  return (
    <spotLight
      ref={lightRef}
      castShadow
      shadow-bias={-0.0001}
      shadow-mapSize={[4096, 4096]}
      color={color}
      intensity={intensity}
      position={[position.x, position.y, position.z]} // Usado lightPosition para posición
      angle={angle}
      penumbra={penumbra}
    />
  );
};

// Componente Lamp (usando un box como representación temporal)
export const Box = () => {
  const { lampPosition, targetPosition, lightPosition } = useControls(
    "Settings",
    {
      lampPosition: { x: 1, y: 1.1, z: 0.1 },
      targetPosition: { x: 0, y: -20, z: 0 },
      lightPosition: { x: 0, y: 0.1, z: 0 }, // Nueva propiedad lightPosition
    }
  );

  return (
    <group position={[lampPosition.x, lampPosition.y, lampPosition.z]}>
      <SpotLightComponent
        targetPosition={targetPosition}
        lightPosition={lightPosition}
      />
    </group>
  );
};

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Layers as ThreeLayers } from "three";

// Función para convertir un array de índices a una máscara de bits
const bitmaskFromIndicesArray = (indices) => {
  return indices.reduce((acc, i) => acc | (1 << i), 0);
};

const Layers = ({ layers = [0] }) => {
  const { scene } = useThree();
  const layersObj = useRef(new ThreeLayers());

  useEffect(() => {
    // Convertir el valor de layers a un array si es un número
    const layersArray = Array.isArray(layers) ? layers : [layers];

    // Aplicar la máscara de bits a las capas
    layersObj.current.mask = bitmaskFromIndicesArray(layersArray);

    // Aplicar a todos los objetos de la escena que no tengan un padre
    // (esto es similar a cómo funciona el componente original)
    scene.traverse((child) => {
      if (child.layers && !child.parent) {
        child.layers.mask = layersObj.current.mask;
      }
    });

    return () => {
      // Restaurar la máscara por defecto al desmontar
      layersObj.current.mask = 0xffffffff;
    };
  }, [layers, scene]);

  return null; // No renderizamos nada en el DOM
};

export default Layers;

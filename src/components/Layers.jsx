import { forwardRef, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export const Layers = forwardRef(({ layers = [0], children }, ref) => {
  const { invalidate } = useThree();
  const groupRef = useRef();
  const layersArray = Array.isArray(layers) ? layers : [layers];
  const layersMask = layersArray.reduce((mask, layer) => mask | (1 << layer), 0);

  // Apply layers to the group's children
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.layers) {
          child.layers.mask = 0; // Disable all layers first
          layersArray.forEach((layer) => {
            child.layers.enable(layer);
          });
        }
      });
      invalidate();
    }
  }, [layersArray, invalidate]);

  if (children) {
    return <group ref={groupRef}>{children}</group>;
  }

  return null;
});

export default Layers;

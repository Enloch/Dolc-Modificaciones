import React from "react";
import IconoSelect from "../../../assets/icons/open-indicator.svg";

export const TXTUI = () => {
  return (
    <>
      <div
        style={{
          width: "20%",
          height: "20%",
          backgroundColor: "white",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 10,
        }}
      ></div>
    </>
  );
};

export const Iconos = ({ onIconClick }) => {
  const iconSize = "30px";
  const iconSections = [
    { name: "Seccion1", left: "36%", alt: "selector1" },
    { name: "Seccion2", left: "42%", alt: "selector2" },
    { name: "Seccion3", left: "50%", alt: "selector3" },
    { name: "Seccion4", left: "60%", alt: "selector4" },
    { name: "Seccion5", left: "72%", alt: "selector5" },
    { name: "Seccion6", left: "88%", alt: "selector6" },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 9,
        }}
      >
        {iconSections.map((icon) => (
          <div
            key={icon.name}
            onClick={() => onIconClick && onIconClick(icon.name)}
            style={{
              position: "absolute",
              left: icon.left,
              top: "50%", // Assuming all icons are at the same top position
              width: iconSize,
              height: iconSize,
              cursor: "pointer", // Add cursor pointer to indicate clickability
            }}
          >
            <img
              src={IconoSelect}
              alt={icon.alt}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

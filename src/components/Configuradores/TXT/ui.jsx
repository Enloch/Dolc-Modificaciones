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

export const Iconos = () => {
  const iconSize = "30px";
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
        <div
          style={{
            position: "absolute",
            left: "36%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector1" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "42%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector2" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector3" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "60%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector4" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "72%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector5" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "88%",
            top: "50%",
            width: iconSize,
            height: iconSize,
          }}
        >
          <img src={IconoSelect} alt="selector6" />
        </div>
      </div>
    </>
  );
};

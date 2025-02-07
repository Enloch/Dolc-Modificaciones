import React, { useRef, useState, useEffect } from "react";
import MultipleOptionsProvider from "../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import {
  AplicacionesTXT as Aplicaciones,
  CaracteristicasTXT as Caracteristicas,
  DescargasTXT as Descargas,
  DisenosTXT as Disenos,
  DolckerTXT as Dolcker,
  Final,
  IndiceTXT as Indice,
  SistemasTXT as Sistemas,
  VentajasTXT as Ventajas,
  GaleriaTXT as Galeria,
} from "../../modules";

const DolckerTXT = () => {
  const indiceRef = useRef();
  const [showButton, setShowButton] = useState(false);

  const handleGoToIndice = () => {
    indiceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const dolckerOffsetTop = document.getElementById("dolcker").offsetTop;
    setShowButton(scrollPosition > dolckerOffsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MultipleOptionsProvider>
      <Indice id='indice' indiceRef={indiceRef} />
      <Dolcker id='dolcker' />
      <Ventajas id='ventajas' />
      <Aplicaciones
        id={["aplicaciones", "rehabilitacion", "obra-nueva"]}
      />
      <Disenos id={["diseno","formato", "configurador"]} />
      <Sistemas
        id={[
          "sistemas",
          "dol-tc11",
          "dol-tc14",
        ]}
      />
      {/* <Descargas id='descargas' /> */}
      <Final />
      {showButton && <StyledButton onClick={handleGoToIndice}>^</StyledButton>}
    </MultipleOptionsProvider>
  );
};

export default DolckerTXT;

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #bfbfbf1c;
  color: #000000;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightgray;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

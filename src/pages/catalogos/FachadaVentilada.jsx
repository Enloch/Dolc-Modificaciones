import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import MultipleOptionsProvider from "../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import Preloader from "../../components/Preloader";
import Loader from "../../components/Loader";

const Aplicaciones = lazy(() => import("../../modules/05_Aplicaciones"));
const Caracteristicas = lazy(() => import("../../modules/07_Caracteristicas"));
const Descargas = lazy(() => import("../../modules/09_Descargas"));
const Disenos = lazy(() => import("../../modules/06_Diseno"));
const Dolcker = lazy(() => import("../../modules/03_Dolcker"));
const Final = lazy(() => import("../../modules/10_Final"));
const Indice = lazy(() => import("../../modules/02_Indice"));
const Introduccion = lazy(() => import("../../modules/01_Introduccion"));
const Sistemas = lazy(() => import("../../modules/08_Sistemas"));
const Ventajas = lazy(() => import("../../modules/04_Ventajas"));
const Galeria = lazy(() => import("../../modules/11_Galeria"));

const FachadaVentilada = () => {
  const indiceRef = useRef();
  const [showButton, setShowButton] = useState(false);

  const handleGoToIndice = () => {
    indiceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const dolckerOffsetTop = document.getElementById("dolcker").offsetTop;
    setShowButton(scrollTop > dolckerOffsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <MultipleOptionsProvider>
        <Suspense fallback={<Loader />}>
          <Indice id="indice" indiceRef={indiceRef} />
          <Dolcker id="dolcker" />
          <Ventajas id="ventajas" />
          <Aplicaciones
            id={[
              "aplicaciones",
              "rehabilitacion",
              "obra-nueva",
              "fachadas",
              "terrazas",
            ]}
          />
          <Disenos
            id={[
              "diseno",
              "formato",
              "despiece",
              "acabados",
              "espesores",
              "piezas",
              "series",
            ]}
          />
          <Caracteristicas
            id={["caracteristicas-especiales", "datos-tecnicos"]}
          />
          <Sistemas
            id={[
              "sistemas",
              "dolcker-and-clip",
              "dol-tc11",
              "dol-tc14",
              "dol-hc20",
            ]}
          />
          <Galeria id="galeria" />
          <Descargas id="descargas" />
          <Final />
        </Suspense>
        {showButton && (
          <StyledButton onClick={handleGoToIndice}>
            <span role="img" aria-label="up arrow">
              &#8593;
            </span>
          </StyledButton>
        )}
      </MultipleOptionsProvider>
  );
};

export default FachadaVentilada;

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #bfbfbf1c;
  color: #000000;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightgray;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import MultipleOptionsProvider from "../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import Preloader from "../../components/Preloader";
import Loader from "../../components/Loader";

// Resource tracking for lazy-loaded components
const createLoadTracker = () => {
  const resources = [];
  let totalResources = 11; // Total number of lazy-loaded components
  let loadedResources = 0;

  return {
    register: (promise) => {
      const resource = { loading: true, promise };
      resources.push(resource);

      promise
        .then(() => {
          resource.loading = false;
          loadedResources++;
        })
        .catch((error) => {
          console.error("Error loading resource:", error);
          resource.loading = false;
          loadedResources++;
        });

      return promise;
    },
    getStatus: () => ({
      loading: loadedResources < totalResources,
      progress: Math.min(
        Math.round((loadedResources / totalResources) * 100),
        100
      ),
    }),
  };
};

const resourceTracker = createLoadTracker();

// Wrap lazy imports with resource tracker
const Aplicaciones = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/05_Aplicaciones"))
);
const Caracteristicas = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/07_Caracteristicas"))
);
const Descargas = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/09_Descargas"))
);
const Disenos = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/06_Diseno"))
);
const Dolcker = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/03_Dolcker"))
);
const Final = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/10_Final"))
);
const Indice = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/02_Indice"))
);
const Introduccion = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/01_Introduccion"))
);
const Sistemas = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/08_Sistemas"))
);
const Ventajas = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/04_Ventajas"))
);
const Galeria = lazy(() =>
  resourceTracker.register(import("../../modules/ES/System/11_Galeria"))
);

const FachadaVentilada = () => {
  const indiceRef = useRef();
  const [showButton, setShowButton] = useState(false);
  const [resourceStatus, setResourceStatus] = useState({
    loading: true,
    progress: 0,
  });

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

  // Track loading progress
  useEffect(() => {
    const updateProgress = () => {
      setResourceStatus(resourceTracker.getStatus());

      if (resourceTracker.getStatus().loading) {
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
  }, []);

  return (
    <Suspense fallback={<Loader resourceStatus={resourceStatus} />}>
      <MultipleOptionsProvider>
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
        {showButton && (
          <StyledButton onClick={handleGoToIndice}>
            <span role="img" aria-label="up arrow">
              &#8593;
            </span>
          </StyledButton>
        )}
      </MultipleOptionsProvider>
    </Suspense>
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

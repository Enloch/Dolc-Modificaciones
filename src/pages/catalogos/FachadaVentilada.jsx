import React, { useRef, useState, useEffect, useCallback } from "react";
import MultipleOptionsProvider from "../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import { Titulo } from "../../components/Titulos";
import { DISTANCES } from "../../global/GlobalStyles";
import {
  Aplicaciones,
  Caracteristicas,
  Descargas,
  Disenos,
  Dolcker,
  Final,
  Indice,
  Introduccion,
  Sistemas,
  Ventajas,
  Galeria,
} from "../../modules";

// Importaciones de MUI para el acordeón
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Crear un contexto para compartir la función de apertura de secciones
import { createContext } from "react";
export const AccordionContext = createContext();

// Componente contenedor para las secciones con acordeón
// sectionId: ID único para identificar la sección en el estado expandedSection
// contentIds: ID o array de IDs para los elementos dentro del acordeón (para navegación interna)
const AccordionSection = ({
  title,
  component: Component,
  contentIds,
  expanded,
  onChange,
  sectionId,
}) => {
  return (
    <StyledAccordion
      expanded={expanded === sectionId}
      onChange={() => onChange(expanded === sectionId ? false : sectionId)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${sectionId}-content`}
        id={`${sectionId}-header`}
      >
        <Titulo fontFamily="Poppins">{title}</Titulo>
      </AccordionSummary>
      <AccordionDetails>
        <Component id={contentIds} />
      </AccordionDetails>
    </StyledAccordion>
  );
};

// Mapa de correspondencia entre los IDs de los enlaces y los IDs de las secciones
const linkToSectionMap = {
  dolcker: "dolcker",
  ventajas: "ventajas",
  aplicaciones: "aplicaciones",
  rehabilitacion: "aplicaciones",
  "obra-nueva": "aplicaciones",
  fachadas: "aplicaciones",
  terrazas: "aplicaciones",
  diseno: "disenos",
  formato: "disenos",
  despiece: "disenos",
  acabados: "disenos",
  espesores: "disenos",
  piezas: "disenos",
  series: "disenos",
  "caracteristicas-especiales": "caracteristicas",
  "datos-tecnicos": "caracteristicas",
  sistemas: "sistemas",
  "dolcker-and-clip": "sistemas",
  "dol-tc11": "sistemas",
  "dol-tc14": "sistemas",
  "dol-hc20": "sistemas",
  galeria: "galeria",
  descargas: "descargas",
};

const FachadaVentilada = () => {
  const indiceRef = useRef();
  const [showButton, setShowButton] = useState(false);
  // Estado para controlar qué acordeón está expandido
  const [expandedSection, setExpandedSection] = useState("dolcker"); // "dolcker" estará abierto por defecto

  // Función para abrir una sección específica desde el índice
  const openSectionFromLink = useCallback((linkId) => {
    // Buscar la sección correspondiente al enlace
    const sectionId = linkToSectionMap[linkId];
    if (sectionId) {
      console.log(`Abriendo sección: ${sectionId} desde enlace: ${linkId}`);

      // Abrir la sección
      setExpandedSection(sectionId);

      // Desplazarse hasta la sección con un tiempo de espera mayor
      // para asegurar que la sección esté completamente expandida
      setTimeout(() => {
        // Primero intentar encontrar el elemento específico por su ID
        let element = document.getElementById(linkId);
        console.log(`Buscando elemento específico: ${linkId}`, element);

        if (!element) {
          // Si no se encuentra el elemento específico, buscar el encabezado de la sección
          element = document.getElementById(`${sectionId}-header`);
          console.log(
            `Buscando encabezado de sección: ${sectionId}-header`,
            element
          );
        }

        if (element) {
          // Desplazarse con un offset para mejorar la visibilidad
          const yOffset = -20; // 20px de margen superior
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
          console.log(`Desplazándose a: ${y}px`);
        } else {
          console.warn(`No se encontró ningún elemento para: ${linkId}`);
        }
      }, 450);
    }
  }, []);

  const handleAccordionChange = (sectionId) => {
    setExpandedSection(sectionId);
  };

  const handleGoToIndice = () => {
    indiceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const dolckerHeader = document.getElementById("dolcker-header");
    if (dolckerHeader) {
      const dolckerOffsetTop = dolckerHeader.offsetTop;
      setShowButton(scrollTop > dolckerOffsetTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Interceptar los clics en los enlaces del índice
    const handleLinkClick = (event) => {
      // Verificar si el clic fue en un enlace del índice
      const link = event.target.closest("a");
      if (
        link &&
        link.getAttribute("href") &&
        link.getAttribute("href").startsWith("#")
      ) {
        // Obtener el ID del enlace (sin el #)
        const linkId = link.getAttribute("href").substring(1);
        console.log(`Clic en enlace: #${linkId}`);

        // Verificar si tenemos una sección correspondiente a este enlace
        if (linkToSectionMap[linkId]) {
          // Prevenir el comportamiento predeterminado
          event.preventDefault();

          // Abrir la sección correspondiente
          openSectionFromLink(linkId);
        }
      }
    };

    // Agregar el event listener
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleLinkClick);
    };
  }, [openSectionFromLink]);

  return (
    <MultipleOptionsProvider>
      <AccordionContext.Provider value={{ openSectionFromLink }}>
        {/* <Introduccion indiceRef={indiceRef} /> */}
        <Indice id="indice" indiceRef={indiceRef} />

        <AccordionSection
          title="Dolcker Soluciona"
          component={(props) => <Dolcker {...props} />}
          contentIds="dolcker"
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="dolcker"
        />

        <AccordionSection
          title="Ventajas"
          component={(props) => <Ventajas {...props} />}
          contentIds="ventajas"
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="ventajas"
        />

        <AccordionSection
          title="Aplicaciones"
          component={(props) => <Aplicaciones {...props} />}
          contentIds={[
            "aplicaciones",
            "rehabilitacion",
            "obra-nueva",
            "fachadas",
            "terrazas",
          ]}
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="aplicaciones"
        />

        <AccordionSection
          title="Diseños"
          component={(props) => <Disenos {...props} />}
          contentIds={[
            "diseno",
            "formato",
            "despiece",
            "acabados",
            "espesores",
            "piezas",
            "series",
          ]}
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="disenos"
        />

        <AccordionSection
          title="Características"
          component={(props) => <Caracteristicas {...props} />}
          contentIds={["caracteristicas-especiales", "datos-tecnicos"]}
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="caracteristicas"
        />

        <AccordionSection
          title="Sistemas"
          component={(props) => <Sistemas {...props} />}
          contentIds={[
            "sistemas",
            "dolcker-and-clip",
            "dol-tc11",
            "dol-tc14",
            "dol-hc20",
          ]}
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="sistemas"
        />

        <AccordionSection
          title="Galería"
          component={(props) => <Galeria {...props} />}
          contentIds="galeria"
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="galeria"
        />

        <AccordionSection
          title="Descargas"
          component={(props) => <Descargas {...props} />}
          contentIds="descargas"
          expanded={expandedSection}
          onChange={handleAccordionChange}
          sectionId="descargas"
        />

        <Final />
        {showButton && (
          <StyledButton onClick={handleGoToIndice}>
            <span role="img" aria-label="up arrow">
              &#8593;
            </span>
          </StyledButton>
        )}
      </AccordionContext.Provider>
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

// Estilos para el acordeón
const StyledAccordion = styled(Accordion)`
  &.MuiAccordion-root {
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    border-radius: 8px;
    overflow: hidden;

    &:before {
      display: none; /* Eliminar la línea superior del acordeón */
    }
  }

  .MuiAccordionSummary-root {
    padding: 0 ${DISTANCES.medium};
    min-height: 64px;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &.Mui-expanded {
      min-height: 64px;
    }

    @media (max-width: 768px) {
      padding: 0 ${DISTANCES.small};
    }
  }

  .MuiAccordionSummary-content {
    margin: 12px 0;

    &.Mui-expanded {
      margin: 0;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .MuiAccordionDetails-root {
    padding: 0;
  }
`;

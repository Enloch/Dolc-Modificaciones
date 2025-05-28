import React, { useState } from "react";
import { useConfigStore } from "./store";
import IconoSelect from "../../../assets/icons/open-indicator.svg";
import IconoMenu from "../../../assets/icons/abrir-menu.svg";
//-------- Iconos de material perfil
import { CatalogoPerfiles } from "./Materiales";
//--------
import { TIPOS_MATERIAL, TEXTURAS_POR_MATERIAL } from "./texturas";
import {
  Popover,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

// Define Styled Components

// Constants for MenuIcon positioning
const MENU_MAX_WIDTH = 350; // px, from MenuContainer's max-width
const ICON_WIDTH = 30; // px, from MenuIcon's width
const ICON_MARGIN_RIGHT_OPEN = 10; // px, desired margin from the right edge of the open menu
const ICON_POSITION_LEFT_OPEN = MENU_MAX_WIDTH - ICON_WIDTH - ICON_MARGIN_RIGHT_OPEN; // 310px
const ICON_POSITION_LEFT_CLOSED = 20; // px

const MenuIcon = styled.img`
  position: absolute;
  top: 3%;
  left: ${({ isOpen }) => (isOpen ? `${ICON_POSITION_LEFT_OPEN}px` : `${ICON_POSITION_LEFT_CLOSED}px`)};
  width: ${ICON_WIDTH}px;
  z-index: 11;
  cursor: pointer;
  transition:
    transform 1.5s ease-in-out,
    filter 1.5s ease-in-out,
    left 1.5s ease-in-out; // Added 'left' to transition
  filter: ${({ isOpen }) => (isOpen ? "invert(0)" : "invert(1)")};
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;

const MenuContainer = styled.div`
  width: auto;
  max-width: ${MENU_MAX_WIDTH}px; // Used constant
  height: 100%;
  background: rgba(255, 255, 255, 0.575);
  backdrop-filter: blur(7.5px);
  position: absolute;
  top: 0;
  z-index: 10;

  /* CHANGED: Allow vertical scrolling if content overflows */
  overflow-y: auto;
  /* You might want to explicitly hide horizontal scrollbar if not needed */
  /* overflow-x: hidden; */

  /* ADDED: CSS to hide the scrollbar itself */
  /* For WebKit browsers (Chrome, Safari, new Edge) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* For Firefox */
  scrollbar-width: none;

  /* For IE and old Edge */
  -ms-overflow-style: none;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  left: ${({ isOpen }) => (isOpen ? "0" : `-${MENU_MAX_WIDTH}px`)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  transition:
    left 1.5s ease-in-out,
    opacity 1.5s ease-in-out,
    visibility 0s ease-in-out ${({ isOpen }) => (isOpen ? "0s" : "1.5s")};
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MaterialOption = ({ src, alt, label, isSelected, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "center",
      width: "calc(33.333% - 16px)", // 3 items per row with gap
      minWidth: "70px",
      padding: "8px",
      border: isSelected ? "2px solid #414141" : "2px solid transparent",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "border-color 0.3s ease, background-color 0.3s ease",
      boxSizing: "border-box",
      "&:hover": {
        borderColor: isSelected ? "#c9c9c9" : "#e0e0e0",
        backgroundColor: isSelected ? "transparent" : "#f5f5f5",
      },
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "65px",
        height: "65px",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
    <Typography variant="body2" sx={{ textAlign: "center" }}>
      {label}
    </Typography>
  </Box>
);

export const TXTUI = () => {
  const {
    menuSeleccionActivo,
    setMenuSeleccionActivo,
    materialPorcelanicoSeleccionado, // Get current selection
    setMaterialPorcelanicoSeleccionado, // Get setter
    materialPerfilSeleccionado,
    setMaterialPerfilSeleccionado,
    setSection1,
    setSection2,
    setSection3,
    setSection4,
    setSection5,
    setSection6,
    sistemaActivo, // Destructure from store
    setSistemaActivo, // Destructure from store
  } = useConfigStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Changed: Default state is now closed
  // State to manage which accordion is expanded
  const [expandedAccordion, setExpandedAccordion] = useState(false); // false means all are closed initially

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler for accordion changes
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  // Updated handler to use global state setter
  const handleTxtTypeChange = (event) => {
    setSistemaActivo(event.target.value); // Use global setter
    // console.log("Selected TXT Model:", event.target.value); // Optional: for debugging
  };

  const handleReiniciarPosicionamiento = (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    setSection1(0);
    setSection2(0);
    setSection3(0);
    setSection4(0);
    setSection5(0);
    setSection6(0);
  };

  return (
    <>
      <MenuIcon src={IconoMenu} isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <Typography variant="h4" sx={{ marginBottom: "10px" }}>
            Configuración
          </Typography>

          {/* New Accordion for TXT Model Selection */}
          <Accordion
            expanded={expandedAccordion === "panelTXTType"}
            onChange={handleAccordionChange("panelTXTType")}
            onClick={() => setMenuSeleccionActivo(false)} // Consistent with other selection panels
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panelTXTType-content" id="panelTXTType-header">
              <Typography variant="h6">Seleccionar Modelo TXT</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="modelo-txt-seleccion"
                  name="modelo-txt-radio-buttons-group"
                  value={sistemaActivo} // Use global state
                  onChange={handleTxtTypeChange}
                >
                  <FormControlLabel value="TXT11" control={<Radio />} label="TXT11" />
                  <FormControlLabel value="TXT13" control={<Radio />} label="TXT13" />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedAccordion === "panel3"}
            onChange={handleAccordionChange("panel3")}
            onClick={() => setMenuSeleccionActivo(expandedAccordion === "panel3" ? false : true)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h6">Configura el posicionamiento</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={(event) => event.stopPropagation()}>
                Utiliza los iconos de la izquierda para seleccionar la sección que deseas configurar.
              </Typography>
              <Button onClick={handleReiniciarPosicionamiento}>Reiniciar posicionamiento</Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === "panel1"}
            onChange={handleAccordionChange("panel1")}
            onClick={() => setMenuSeleccionActivo(false)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h6">Acabado Porcelánico</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "space-between", // Kept as per original, can be changed to "flex-start"
                  width: "100%",
                }}
              >
                {Object.values(TEXTURAS_POR_MATERIAL).map((material) => (
                  <MaterialOption
                    key={material.id}
                    src={material.imagenes[0]} // Use the first image from the material's image array
                    alt={material.nombre}
                    label={material.nombre}
                    isSelected={materialPorcelanicoSeleccionado === material.id}
                    onClick={() => setMaterialPorcelanicoSeleccionado(material.id)}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedAccordion === "panel2"}
            onChange={handleAccordionChange("panel2")}
            onClick={() => setMenuSeleccionActivo(false)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h6">Elegir Material de perfil</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", maxHeight: "300px", overflow: "auto" }}>
                {Object.values(CatalogoPerfiles).map((material) => (
                  <MaterialOption
                    key={material.id}
                    src={material.miniTexture} // Uses the imported mini texture path from CatalogoPerfiles
                    alt={material.label}
                    label={material.label}
                    onClick={() => setMaterialPerfilSeleccionado(material.id)}
                    isSelected={materialPerfilSeleccionado === material.id}
                    selected={materialPerfilSeleccionado === material.id}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export const Iconos = ({ onConfigAccept }) => {
  const { setSelectedSection, setSection1, setSection2, setSection3, setSection4, setSection5, setSection6, menuSeleccionActivo } =
    useConfigStore();

  const iconSize = "30px";
  const iconSections = [
    { name: "Seccion1", left: "36%", alt: "selector1" },
    { name: "Seccion2", left: "42%", alt: "selector2" },
    { name: "Seccion3", left: "50%", alt: "selector3" },
    { name: "Seccion4", left: "60%", alt: "selector4" },
    { name: "Seccion5", left: "72%", alt: "selector5" },
    { name: "Seccion6", left: "88%", alt: "selector6" },
  ];

  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [popoverOpenForSection, setPopoverOpenForSection] = useState(null);
  const [currentPopoverValue, setCurrentPopoverValue] = useState(0);

  const handleIconClick = (event, sectionName) => {
    setPopoverAnchorEl(event.currentTarget);
    setPopoverOpenForSection(sectionName);
    setCurrentPopoverValue(0); // Reset to default numeric value
    setSelectedSection(sectionName);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setPopoverOpenForSection(null);
  };

  const handlePopoverValueChange = (event) => {
    const numericValue = parseFloat(event.target.value);
    setCurrentPopoverValue(numericValue);

    if (popoverOpenForSection) {
      switch (popoverOpenForSection) {
        case "Seccion1":
          setSection1(numericValue);
          break;
        case "Seccion2":
          setSection2(numericValue);
          break;
        case "Seccion3":
          setSection3(numericValue);
          break;
        case "Seccion4":
          setSection4(numericValue);
          break;
        case "Seccion5":
          setSection5(numericValue);
          break;
        case "Seccion6":
          setSection6(numericValue);
          break;
        default:
          console.warn("Unknown section in handlePopoverValueChange:", popoverOpenForSection);
      }
    }
  };

  const handleAccept = () => {
    handlePopoverClose();
  };

  const open = Boolean(popoverAnchorEl);
  const id = open ? `popover-${popoverOpenForSection}` : undefined;

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
          display: menuSeleccionActivo ? "block" : "none",
        }}
      >
        {iconSections.map((icon) => (
          <div
            key={icon.name}
            onClick={(e) => handleIconClick(e, icon.name)}
            style={{
              position: "absolute",
              left: icon.left,
              top: "50%",
              width: iconSize,
              height: iconSize,
              cursor: "pointer",
            }}
          >
            <img src={IconoSelect} alt={icon.alt} style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </div>

      {popoverOpenForSection && (
        <Popover
          id={id}
          open={open}
          anchorEl={popoverAnchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        >
          <Box sx={{ p: 2, minWidth: "150px" }}>
            <Typography variant="subtitle1" gutterBottom>
              {`Configurar ${popoverOpenForSection}`}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="altura-seleccion"
                name="altura-seleccion-radio-buttons-group"
                value={currentPopoverValue}
                onChange={handlePopoverValueChange}
              >
                <FormControlLabel value={0} control={<Radio size="small" />} label="0cm" />
                <FormControlLabel value={0.03} control={<Radio size="small" />} label="3cm" />
                <FormControlLabel value={0.06} control={<Radio size="small" />} label="6cm" />
              </RadioGroup>
              <Button onClick={handleAccept} variant="contained" size="small" sx={{ mt: 1 }}>
                Aceptar
              </Button>
            </FormControl>
          </Box>
        </Popover>
      )}
    </>
  );
};

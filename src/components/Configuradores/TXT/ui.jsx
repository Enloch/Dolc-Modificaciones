import React, { useState } from "react";
import { useConfigStore } from "./store";
import IconoSelect from "../../../assets/icons/open-indicator.svg";
import IconoMenu from "../../../assets/icons/abrir-menu.svg";
//-------- Iconos de material porcelánico
import IconoPaladio from "/texturas/TXT/piezas/PALADIO/PALADIO 60X120 (1).jpg";
import IconoEstatuario from "/texturas/TXT/piezas/ESTATUARIO/ESTATUARIO 60X120 (1).jpg";
//-------- Iconos de material perfil
import IconoEmberoDorado from "/texturas/Embero Dorado Rugoso 1K.jpg";
import IconoEmbero from "/texturas/EmberoTexturaRugoso.jpg";
import IconoOlmo from "/texturas/Olmo Rugoso 1K.jpg";
//--------
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
const ICON_POSITION_LEFT_OPEN =
  MENU_MAX_WIDTH - ICON_WIDTH - ICON_MARGIN_RIGHT_OPEN; // 310px
const ICON_POSITION_LEFT_CLOSED = 20; // px

const MenuIcon = styled.img`
  position: absolute;
  top: 3%;
  left: ${({ isOpen }) =>
    isOpen ? `${ICON_POSITION_LEFT_OPEN}px` : `${ICON_POSITION_LEFT_CLOSED}px`};
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
  overflow: auto;
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

const MaterialOption = ({ src, alt, label }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "center",
      width: "80px", // Standardized width
      height: "auto",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "80px",
        height: "80px",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
    <Typography variant="body1" sx={{ textAlign: "center" }}>
      {label}
    </Typography>
  </Box>
);

export const TXTUI = () => {
  const { menuSeleccionActivo, setMenuSeleccionActivo } = useConfigStore();
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

  return (
    <>
      <MenuIcon
        src={IconoMenu}
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <Typography variant="h4" sx={{ marginBottom: "10px" }}>
            Configuración
          </Typography>

          <Accordion
            expanded={expandedAccordion === "panel1"}
            onChange={handleAccordionChange("panel1")}
            onClick={() => setMenuSeleccionActivo(false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Elegir material porcelánico</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <MaterialOption
                  src={IconoPaladio}
                  alt="Paladio"
                  label="Paladio"
                />
                <MaterialOption
                  src={IconoEstatuario}
                  alt="Estatuario"
                  label="Estatuario"
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedAccordion === "panel2"}
            onChange={handleAccordionChange("panel2")}
            onClick={() => setMenuSeleccionActivo(false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Elegir Material de perfil</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <MaterialOption
                  src={IconoEmberoDorado}
                  alt="Embero Dorado"
                  label="Embero Dorado"
                />
                <MaterialOption src={IconoEmbero} alt="Embero" label="Embero" />
                <MaterialOption src={IconoOlmo} alt="Olmo" label="Olmo" />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedAccordion === "panel3"}
            onChange={handleAccordionChange("panel3")}
            onClick={() => setMenuSeleccionActivo(!menuSeleccionActivo)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6">Configura el posicionamiento</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Utiliza los iconos de la izquierda para seleccionar la sección
                que deseas configurar.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export const Iconos = ({ onConfigAccept }) => {
  const {
    setSelectedSection,
    setSection1,
    setSection2,
    setSection3,
    setSection4,
    setSection5,
    setSection6,
    menuSeleccionActivo,
  } = useConfigStore();

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
          console.warn(
            "Unknown section in handlePopoverValueChange:",
            popoverOpenForSection
          );
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
            <img
              src={IconoSelect}
              alt={icon.alt}
              style={{ width: "100%", height: "100%" }}
            />
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
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" />}
                  label="0cm"
                />
                <FormControlLabel
                  value={0.03}
                  control={<Radio size="small" />}
                  label="3cm"
                />
                <FormControlLabel
                  value={0.06}
                  control={<Radio size="small" />}
                  label="6cm"
                />
              </RadioGroup>
              <Button
                onClick={handleAccept}
                variant="contained"
                size="small"
                sx={{ mt: 1 }}
              >
                Aceptar
              </Button>
            </FormControl>
          </Box>
        </Popover>
      )}
    </>
  );
};

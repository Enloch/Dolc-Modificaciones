import React, { useState } from "react";
import { useConfigStore } from "./store";
import IconoSelect from "../../../assets/icons/open-indicator.svg";
import IconoMenu from "../../../assets/icons/abrir-menu.svg";

import {
  Popover,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";

// Define Styled Components
const MenuIcon = styled.img`
  position: absolute;
  top: 3%;
  width: 30px;
  z-index: 11;
  cursor: pointer;
  transition:
    transform 1.5s ease-in-out,
    filter 1.5s ease-in-out,
    left 1.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "17%" : "1%")};
  filter: ${({ isOpen }) => (isOpen ? "invert(0)" : "invert(1)")};
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;

const MenuContainer = styled.div`
  width: 20%;
  height: 100%;
  background: rgba(255, 255, 255, 0.575);
  backdrop-filter: blur(7.5px);
  position: absolute;
  top: 0;
  z-index: 10;
  transition: left 1.5s ease-in-out; // Simplified transition
  left: ${({ isOpen }) => (isOpen ? "0" : "-20%")};
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TXTUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MenuIcon
        src={IconoMenu}
        isOpen={isMenuOpen}
        onClick={toggleMenu}
        alt="flecha-menu"
      />
      <MenuContainer id="menu" isOpen={isMenuOpen}>
        <MenuContent>
          <Typography variant="h4">Configuración</Typography>
          <Typography variant="h6">Elegir material porcelánico</Typography>
          <Box></Box>
          <Typography variant="h6">Elegir Material de perfil</Typography>
          <Typography variant="h6">Configura el posicionamiento</Typography>
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

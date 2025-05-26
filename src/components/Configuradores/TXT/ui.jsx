import React, { useState } from "react";
import IconoSelect from "../../../assets/icons/open-indicator.svg";
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

export const Iconos = ({ onConfigAccept }) => {
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
  const [currentPopoverValue, setCurrentPopoverValue] = useState("0cm");

  const handleIconClick = (event, sectionName) => {
    setPopoverAnchorEl(event.currentTarget);
    setPopoverOpenForSection(sectionName);
    setCurrentPopoverValue("0cm");
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setPopoverOpenForSection(null);
  };

  const handlePopoverValueChange = (event) => {
    setCurrentPopoverValue(event.target.value);
  };

  const handleAccept = () => {
    if (onConfigAccept && popoverOpenForSection) {
      onConfigAccept(popoverOpenForSection, currentPopoverValue);
    }
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
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
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
                  value="0cm"
                  control={<Radio size="small" />}
                  label="0cm"
                />
                <FormControlLabel
                  value="3cm"
                  control={<Radio size="small" />}
                  label="3cm"
                />
                <FormControlLabel
                  value="6cm"
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

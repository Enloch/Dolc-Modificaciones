import React, { useState } from "react";
import styled from "styled-components";
import { NombreMateriales } from "./Materiales";
import { SketchPicker } from "react-color";
import {
  MenuContainer,
  MenuContainer2,
  MaterialButton,
  MaterialImage,
  MaterialTextContainer,
  MaterialText,
  ModelImage,
  ModelButton,
  Titulo,
} from "./styles";
import IconoRAL from "../../../assets/icons/RAL.png";
import { Mallas } from "./Mallas";

import Perfil1 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL1.jpg";
import Perfil2 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL2.jpg";
import Perfil3 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL3.jpg";
import Perfil4 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL4.jpg";

const Menu = ({
  handleModelChange,
  handleMaterialChange,
  color,
  setColor,
  colorPickerActive,
  setColorPickerActive,
  setSelectedMatrix,
}) => {
  const [showModelButtons, setShowModelButtons] = useState(true);
  const [showMaterialButtons, setShowMaterialButtons] = useState(false);
  const [showMetales, setShowMetales] = useState(false);
  const [showMaderas, setShowMaderas] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleToggleMaterialButtons = (matrix) => {
    setShowModelButtons(false);
    setShowMaterialButtons(!showMaterialButtons);
    setShowMetales(true); // Mostrar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
    setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
    setSelectedMatrix(matrix);
  };

  const handleHideButtons = () => {
    setShowModelButtons(true);
    setShowMaterialButtons(false);
    setShowMetales(false); // Ocultar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
  };

  return (
    <div>
      {showModelButtons && (
        <MenuContainer visible={showModelButtons}>
          {Object.keys(Mallas).map((category, i) => (
            <ModelButton key={i} onClick={() => setSelectedCategory(category)}>
              {`Category ${category}`}
              <ModelImage
                src={Mallas[category].image}
                alt={`Category ${category}`}
              />
            </ModelButton>
          ))}
        </MenuContainer>
      )}
      {selectedCategory &&
        Mallas[selectedCategory].matrices.map((matrix, i) => (
          <ModelButton
            key={i}
            onClick={() => handleToggleMaterialButtons(matrix)}
          >
            {matrix.name}
            <ModelImage src={matrix.image} alt={matrix.name} />
          </ModelButton>
        ))}
      {showMaterialButtons && (
        <>
          <Titulo onClick={handleHideButtons}>Volver a Modelos</Titulo>
          <div className='metales'>
            <Titulo
              onClick={() => (
                setShowMetales(!showMetales),
                setShowMaderas(false),
                setShowColorPicker(false),
                setColorPickerActive(false)
              )}
            >
              Metales
            </Titulo>
            <MenuContainer2 visible={showMaterialButtons && showMetales}>
              {NombreMateriales.slice(0, 18).map((material, index) => (
                <MaterialButton
                  key={index}
                  onClick={() => handleMaterialChange(index)}
                >
                  <MaterialImage
                    src={material.textura}
                    alt={`Material ${material.nombre}`}
                  />
                  <MaterialTextContainer>
                    <MaterialText>{material.nombre}</MaterialText>
                  </MaterialTextContainer>
                </MaterialButton>
              ))}
            </MenuContainer2>
            <Titulo
              onClick={() => (
                setShowMaderas(!showMaderas),
                setShowMetales(false),
                setShowColorPicker(false),
                setColorPickerActive(false)
              )}
            >
              Maderas
            </Titulo>
            <MenuContainer2 visible={showMaterialButtons && showMaderas}>
              {NombreMateriales.slice(18, 22).map((material, index) => (
                <MaterialButton
                  key={index}
                  onClick={() => handleMaterialChange(index + 18)}
                >
                  <MaterialImage
                    src={material.textura}
                    alt={`Material ${material.nombre}`}
                  />
                  <MaterialTextContainer>
                    <MaterialText>{material.nombre}</MaterialText>
                  </MaterialTextContainer>
                </MaterialButton>
              ))}
            </MenuContainer2>
            <Titulo
              onClick={() => (
                setShowColorPicker(true),
                setColorPickerActive(true),
                setShowMetales(false),
                setShowMaderas(false)
              )}
            >
              Sólidos
            </Titulo>
            <MenuContainer2 visible={showColorPicker}>
              <SketchPicker color={color} onChange={handleColorChange} />
            </MenuContainer2>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;

import React, { useState } from "react";
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
import { Mallas } from "./Mallas";

const Menu = ({
  handleModelChange,
  handleMaterialChange,
  color,
  setColor,
  colorPickerActive,
  setColorPickerActive,
  setSelectedMatrix,
}) => {
  const [showCategoryButtons, setShowCategoryButtons] = useState(true);
  const [showModelButtons, setShowModelButtons] = useState(false);
  const [showMaterialButtons, setShowMaterialButtons] = useState(false);
  const [showMetales, setShowMetales] = useState(false);
  const [showMaderas, setShowMaderas] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleModels = () => {
    setShowCategoryButtons(false);
    setShowModelButtons(true);
    setShowMaterialButtons(false);
    setShowMetales(false); // Ocultar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
    setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
  };
  const handleToggleMaterialButtons = (matrix) => {
    setShowCategoryButtons(false);
    setShowModelButtons(false);
    setShowMaterialButtons(!showMaterialButtons);
    setShowMetales(true); // Mostrar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
    setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
    setSelectedMatrix(matrix);
  };

  const handleHideButtons = () => {
    setShowCategoryButtons(true);
    setShowModelButtons(false);
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
      {showCategoryButtons && (
        <MenuContainer visible={showCategoryButtons}>
          {Object.keys(Mallas).map((category, i) => (
            <ModelButton
              key={i}
              onClick={() => (setSelectedCategory(category), handleModels())}
            >
              {`Category ${category}`}
              <ModelImage
                src={Mallas[category].image}
                alt={`Category ${category}`}
              />
            </ModelButton>
          ))}
        </MenuContainer>
      )}
      {selectedCategory && (
        <MenuContainer visible={showModelButtons}>
          {Mallas[selectedCategory].matrices.map((matrix, i) => (
            <ModelButton
              key={i}
              onClick={() => handleToggleMaterialButtons(matrix)}
            >
              {matrix.name}
              <ModelImage src={matrix.image} alt={matrix.name} />
            </ModelButton>
          ))}
        </MenuContainer>
      )}
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

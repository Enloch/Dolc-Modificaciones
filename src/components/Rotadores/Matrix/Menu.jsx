import React, { useState, Suspense } from "react";
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
  ModelTitulo,
  Titulo,
  CategoryButton,
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
  const [showModelTitulos, setShowModelTitulos] = useState(false);
  const [showMaterialButtons, setShowMaterialButtons] = useState(false);
  const [showMetales, setShowMetales] = useState(false);
  const [showMaderas, setShowMaderas] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("1");

  const handleModels = () => {
    setShowCategoryButtons(true);
    setShowModelTitulos(true);
    setShowMaterialButtons(false);
    setShowMetales(false); // Ocultar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
    setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
  };
  const handleToggleMaterialButtons = (matrix) => {
    setShowCategoryButtons(false);
    setShowModelTitulos(false);
    setShowMaterialButtons(!showMaterialButtons);
    setShowMetales(true); // Mostrar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
    setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
    setSelectedMatrix(matrix);
  };

  const handleHideButtons = () => {
    setShowCategoryButtons(true);
    setShowModelTitulos(false);
    setShowMaterialButtons(false);
    setShowMetales(false); // Ocultar los botones de metales
    setShowMaderas(false); // Ocultar los botones de maderas
    setShowColorPicker(false); // Ocultar el color picker
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
  };
  const categoryButtons = [
    { id: "1", label: "Category 1" },
    { id: "2", label: "Category 2" },
    { id: "3", label: "Category 3" },
    { id: "4", label: "Category 4" },
    { id: "5", label: "Category 5" },
    { id: "6", label: "Category 6" },
    { id: "7", label: "Category 7" },
    { id: "8", label: "Category 8" },
    { id: "9", label: "Category 9" },
  ];
  return (
    <div>
      <Suspense>
        {showCategoryButtons && (
          <MenuContainer visible={showCategoryButtons}>
            {categoryButtons.map((category) => (
              <div key={category.id}>
                <CategoryButton
                  onClick={() => (
                    setSelectedCategory(category.id), handleModels()
                  )}
                >
                  {category.label}
                </CategoryButton>
                {selectedCategory === category.id &&
                  Mallas[selectedCategory].matrices.map((matrix, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleToggleMaterialButtons(matrix)}
                    >
                      <ModelTitulo>{matrix.name}</ModelTitulo>
                      <ModelImage src={matrix.image} alt={matrix.name} />
                    </div>
                  ))}
              </div>
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
      </Suspense>
    </div>
  );
};

export default Menu;

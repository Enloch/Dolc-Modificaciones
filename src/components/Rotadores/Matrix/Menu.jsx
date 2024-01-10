import React, { useState, Suspense, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { Materiales, NombreMateriales } from "./Materiales";
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
import useStore from "./store";
const Menu = ({ handleModelChange }) => {
  const {
    color,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,
    colorPickerActive,
    setColorPickerActive,
    selectedMatrix,
    materialIndex,
    isMenuOpen,
    setIsMenuOpen,
    selectedModel1,
    selectedModel2,
    selectedModel3,
    selectedModel4,
    selectedModel5,
    selectedModel6,
    setSelectedModel1,
    setSelectedModel2,
    setSelectedModel3,
    setSelectedModel4,
    setSelectedModel5,
    setSelectedModel6,
    setSelectedMatrix1,
    setSelectedMatrix2,
    setSelectedMatrix3,
    setSelectedMatrix4,
    setSelectedMatrix5,
    setSelectedMatrix6,
    setMaterialIndex1,
    setMaterialIndex2,
    setMaterialIndex3,
    setMaterialIndex4,
    setMaterialIndex5,
    setMaterialIndex6,
    setMaterialSource1,
    setMaterialSource2,
    setMaterialSource3,
    setMaterialSource4,
    setMaterialSource5,
    setMaterialSource6,
    leivaSelected,
    setLeivaSelected,
  } = useStore();
  const [menuInicial, setMenuicial] = useState(true);
  const [showCategoryButtons, setShowCategoryButtons] = useState(false);
  const [showModelTitulos, setShowModelTitulos] = useState(false);
  const [showMaterialButtons, setShowMaterialButtons] = useState(false);
  const [showMetales, setShowMetales] = useState(false);
  const [showMaderas, setShowMaderas] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [prevLeivaSelected, setPrevLeivaSelected] = useState(leivaSelected);
  const handleInicio = () => {
    setMenuicial(true);
    setShowCategoryButtons(false);
    setShowMaterialButtons(false);
    setShowMetales(false);
    setShowMaderas(false);
    setShowColorPicker(false);
    setColorPickerActive(false);
  };
  const handleModels = () => {
    setMenuicial(false);
    setShowCategoryButtons(true);
    setShowMaterialButtons(false);
    setShowMetales(false);
    setShowMaderas(false);
    setShowColorPicker(false);
    setColorPickerActive(false);
  };
  const handleMaterials = () => {
    setMenuicial(false);
    setShowCategoryButtons(false);
    setShowMaterialButtons(true);
    setShowMetales(true);
    setShowMaderas(false);
    setShowColorPicker(false);
    setColorPickerActive(false);
  };
  const handleHideButtons = () => {
    setShowCategoryButtons(true);
    setShowMaterialButtons(false);
    setShowMetales(false);
    setShowMaderas(false);
    setShowColorPicker(false);
  };
  useEffect(() => {
    if (prevLeivaSelected && !leivaSelected) {
      // Esta lógica se ejecutará solo cuando leivaSelected cambie de true a false
      setSelectedMatrix1(Mallas[2].matrices[13]);
      setSelectedMatrix2(Mallas[2].matrices[13]);
      setSelectedMatrix3(Mallas[2].matrices[13]);
      setSelectedMatrix4(Mallas[2].matrices[13]);
      setSelectedMatrix5(Mallas[2].matrices[13]);
      setSelectedMatrix6(Mallas[2].matrices[13]);
    }
    // Actualizar prevLeivaSelected para la próxima renderización
    setPrevLeivaSelected(leivaSelected);
  }, [leivaSelected]); // Este efecto se ejecutará cada vez que leivaSelected cambie

  const handleToggleMaterialButtons = (matrix) => {
    if (leivaSelected === true) {
      setSelectedMatrix1(matrix);
      setSelectedMatrix2(matrix);
      setSelectedMatrix3(matrix);
      setSelectedMatrix4(matrix);
      setSelectedMatrix5(matrix);
      setSelectedMatrix6(matrix);
      if (selectedModel1) {
        setSelectedMatrix1(matrix);
        setSelectedModel1(false);
      }
      if (selectedModel2) {
        setSelectedMatrix1(matrix);
        setSelectedModel2(false);
      }
      if (selectedModel3) {
        setSelectedMatrix1(matrix);
        setSelectedModel3(false);
      }
      if (selectedModel4) {
        setSelectedMatrix1(matrix);
        setSelectedModel4(false);
      }
      if (selectedModel5) {
        setSelectedMatrix1(matrix);
        setSelectedModel5(false);
      }
      if (selectedModel6) {
        setSelectedMatrix1(matrix);
        setSelectedModel6(false);
      }
    } else {
      if (selectedModel1) {
        setSelectedMatrix1(matrix);
        setSelectedModel1(false);
      }
      if (selectedModel2) {
        setSelectedMatrix2(matrix);
        setSelectedModel2(false);
      }
      if (selectedModel3) {
        setSelectedMatrix3(matrix);
        setSelectedModel3(false);
      }
      if (selectedModel4) {
        setSelectedMatrix4(matrix);
        setSelectedModel4(false);
      }
      if (selectedModel5) {
        setSelectedMatrix5(matrix);
        setSelectedModel5(false);
      }
      if (selectedModel6) {
        setSelectedMatrix6(matrix);
        setSelectedModel6(false);
      }
    }
  };

  const handleMaterialChange = (index) => {
    if (selectedModel1) {
      setMaterialIndex1(index);
      setSelectedModel1(false);
    }
    if (selectedModel2) {
      setMaterialIndex2(index);
      setSelectedModel2(false);
    }
    if (selectedModel3) {
      setMaterialIndex3(index);
      setSelectedModel3(false);
    }
    if (selectedModel4) {
      setMaterialIndex4(index);
      setSelectedModel4(false);
    }
    if (selectedModel5) {
      setMaterialIndex5(index);
      setSelectedModel5(false);
    }
    if (selectedModel6) {
      setMaterialIndex6(index);
      setSelectedModel6(false);
    }
  };
  const handleColorChange = (newColor) => {
    if (selectedModel1) {
      setColor1(newColor.hex);
      setMaterialSource1("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
    if (selectedModel2) {
      setColor2(newColor.hex);
      setMaterialSource2("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
    if (selectedModel3) {
      setColor3(newColor.hex);
      setMaterialSource3("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
    if (selectedModel4) {
      setColor4(newColor.hex);
      setMaterialSource4("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
    if (selectedModel5) {
      setColor5(newColor.hex);
      setMaterialSource5("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
    if (selectedModel6) {
      setColor6(newColor.hex);
      setMaterialSource6("colorPicker");
      // handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
    }
  };
  const handleMaterialsChange = (index) => {
    if (selectedModel1) {
      setMaterialSource1("materials");
      handleMaterialChange(index);
    }
    if (selectedModel2) {
      setMaterialSource2("materials");
      handleMaterialChange(index);
    }
    if (selectedModel3) {
      setMaterialSource3("materials");
      handleMaterialChange(index);
    }
    if (selectedModel4) {
      setMaterialSource4("materials");
      handleMaterialChange(index);
    }
    if (selectedModel5) {
      setMaterialSource5("materials");
      handleMaterialChange(index);
    }
    if (selectedModel6) {
      setMaterialSource6("materials");
      handleMaterialChange(index);
    }
  };

  const categoryButtons = [
    { id: "1", label: "Planex" },
    { id: "2", label: "Tubex" },
    { id: "3", label: "Vivex" },
    { id: "4", label: "Vertex" },
    { id: "5", label: "Windx" },
    { id: "6", label: "Displax" },
    { id: "7", label: "Tecnux" },
    { id: "8", label: "Leiva" },
  ];

  return (
    <div>
      <Suspense>
        {menuInicial && (
          <MenuContainer visible={menuInicial}>
            <Titulo
              onClick={handleModels}
              style={{
                fontWeight: "bold",
                borderTop: "1px solid #343434",
                padding: "10px 0px",
                margin: "0px 5px",
              }}
            >
              Selecciona matriz
            </Titulo>
            <Titulo
              onClick={handleMaterials}
              style={{
                fontWeight: "bold",
                borderTop: "1px solid #343434",
                padding: "10px 0px",
                margin: "0px 5px",
              }}
            >
              Selecciona acabado
            </Titulo>
          </MenuContainer>
        )}
        {showCategoryButtons && (
          <MenuContainer visible={showCategoryButtons}>
            <Titulo
              onClick={handleInicio}
              style={{
                fontWeight: "bold",
                borderTop: "1px solid #343434",
                borderBottom: "1px solid #343434",
                padding: "10px 0px",
              }}
            >
              Volver atrás
            </Titulo>
            {categoryButtons.map((category) => (
              <div key={category.id}>
                <CategoryButton
                  onClick={() => {
                    if (selectedCategory === category.id) {
                      setSelectedCategory(null);
                      handleHideButtons();
                      setLeivaSelected(false); // Establece en false si se cierra la categoría
                    } else {
                      setSelectedCategory(category.id);
                      handleModels();
                      setLeivaSelected(category.id === "8"); // Establece en true si la categoría es Leiva
                    }
                  }}
                >
                  {category.label}
                </CategoryButton>
                <div
                  style={{
                    maxHeight: "45vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
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
              </div>
            ))}
          </MenuContainer>
        )}

        {showMaterialButtons && (
          <>
            <Titulo
              onClick={handleInicio}
              style={{
                fontWeight: "bold",
                borderTop: "1px solid #343434",
                borderBottom: "1px solid #343434",
                padding: "10px 0px",
              }}
            >
              Volver atrás
            </Titulo>
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
                    onClick={() => handleMaterialsChange(index)}
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
                    onClick={() => handleMaterialsChange(index + 18)}
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
              <MenuContainer2
                visible={showColorPicker}
                onMouseUp={() => {
                  if (
                    selectedModel1 ||
                    selectedModel2 ||
                    selectedModel3 ||
                    selectedModel4 ||
                    selectedModel5 ||
                    selectedModel6
                  ) {
                    handleMaterialChange(0);
                  }
                }}
              >
                <SketchPicker
                  color={
                    selectedModel1
                      ? color1
                      : selectedModel2
                      ? color2
                      : selectedModel3
                      ? color3
                      : selectedModel4
                      ? color4
                      : selectedModel5
                      ? color5
                      : selectedModel6
                      ? color6
                      : "#ffffff" // Un valor por defecto en caso de que ningún modelo esté seleccionado
                  }
                  onChange={handleColorChange}
                />
              </MenuContainer2>
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Menu;

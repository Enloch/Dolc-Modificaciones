import React, { useState } from 'react'
import styled from 'styled-components'
import { NombreMateriales } from './Materiales'
import { SketchPicker } from 'react-color'
import IconoRAL from '../../../assets/icons/RAL.png'

const MenuContainer = styled.div`
    width: 100%;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 5px;
`

const MenuContainer2 = styled.div`
    width: 100%;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    flex-direction: row;
    flex-wrap: wrap;
`

const MaterialButton = styled.button`
    width: 70px;
    height: 75px;
    padding: 0;
    background: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
`

const MaterialImage = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
`
const MaterialTextContainer = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: break-spaces;
    margin-top: 2px;
`
const MaterialText = styled.span`
    font-size: 10px;
`

const ModelButton = styled.button`
    margin: 0 auto;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`

const ModelImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Titulo = styled.h2`
    cursor: pointer;
    margin: 5px;
    ::before {
        content: '>  ';
    }
`
const Menu = ({
    handleModelChange,
    handleMaterialChange,
    color,
    setColor,
    colorPickerActive,
    setColorPickerActive,
}) => {
    const [showModelButtons, setShowModelButtons] = useState(true)
    const [showMaterialButtons, setShowMaterialButtons] = useState(false)
    const [showMetales, setShowMetales] = useState(false)
    const [showMaderas, setShowMaderas] = useState(false)
    const [showColorPicker, setShowColorPicker] = useState(false)

    const handleToggleMaterialButtons = () => {
        setShowModelButtons(false)
        setShowMaterialButtons(!showMaterialButtons)
        setShowMetales(true) // Mostrar los botones de metales
        setShowMaderas(false) // Ocultar los botones de maderas
        setShowColorPicker(false) // Ocultar el color picker
        setColorPickerActive(false) // Establecer colorPickerActive en false al seleccionar un material
    }

    const handleHideButtons = () => {
        setShowModelButtons(true)
        setShowMaterialButtons(false)
        setShowMetales(false) // Ocultar los botones de metales
        setShowMaderas(false) // Ocultar los botones de maderas
        setShowColorPicker(false) // Ocultar el color picker
    }

    const handleColorChange = newColor => {
        setColor(newColor.hex)
        handleMaterialChange(0) // Restablecer el material cuando se selecciona un color
    }

    return (
        <div>
            {showModelButtons && (
                <MenuContainer visible={showModelButtons}>
                    <ModelButton
                        onClick={() => {
                            handleModelChange('Modelo 1')
                            handleToggleMaterialButtons()
                        }}
                    >
                        <ModelImage
                            src='https://via.placeholder.com/120x80.png?text=Modelo1'
                            alt='Modelo 1'
                        />
                    </ModelButton>
                    <ModelButton
                        onClick={() => {
                            handleModelChange('Modelo 2')
                            handleToggleMaterialButtons()
                        }}
                    >
                        <ModelImage
                            src='https://via.placeholder.com/120x80.png?text=Modelo2'
                            alt='Modelo 2'
                        />
                    </ModelButton>
                    <ModelButton
                        onClick={() => {
                            handleModelChange('Modelo 3')
                            handleToggleMaterialButtons()
                        }}
                    >
                        <ModelImage
                            src='https://via.placeholder.com/120x80.png?text=Modelo3'
                            alt='Modelo 3'
                        />
                    </ModelButton>
                    <ModelButton
                        onClick={() => {
                            handleModelChange('Modelo 4')
                            handleToggleMaterialButtons()
                        }}
                    >
                        <ModelImage
                            src='https://via.placeholder.com/120x80.png?text=Modelo4'
                            alt='Modelo 4'
                        />
                    </ModelButton>
                </MenuContainer>
            )}

            {showMaterialButtons && (
                <>
                    <Titulo onClick={handleHideButtons}>
                        Volver a Modelos
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
                        <MenuContainer2
                            visible={showMaterialButtons && showMetales}
                        >
                            {NombreMateriales.slice(0, 18).map(
                                (material, index) => (
                                    <MaterialButton
                                        key={index}
                                        onClick={() =>
                                            handleMaterialChange(index)
                                        }
                                    >
                                        <MaterialImage
                                            src={material.textura}
                                            alt={`Material ${material.nombre}`}
                                        />
                                        <MaterialTextContainer>
                                            <MaterialText>
                                                {material.nombre}
                                            </MaterialText>
                                        </MaterialTextContainer>
                                    </MaterialButton>
                                )
                            )}
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
                        <MenuContainer2
                            visible={showMaterialButtons && showMaderas}
                        >
                            {NombreMateriales.slice(18, 22).map(
                                (material, index) => (
                                    <MaterialButton
                                        key={index}
                                        onClick={() =>
                                            handleMaterialChange(index + 18)
                                        }
                                    >
                                        <MaterialImage
                                            src={material.textura}
                                            alt={`Material ${material.nombre}`}
                                        />
                                        <MaterialTextContainer>
                                            <MaterialText>
                                                {material.nombre}
                                            </MaterialText>
                                        </MaterialTextContainer>
                                    </MaterialButton>
                                )
                            )}
                        </MenuContainer2>
                        <Titulo
                            onClick={() => (
                                setShowColorPicker(true),
                                setColorPickerActive(true),
                                setShowMetales(false),
                                setShowMaderas(false)
                            )}
                        >
                            Colores
                        </Titulo>
                        <MenuContainer2 visible={showColorPicker}>
                            <SketchPicker
                                color={color}
                                onChange={handleColorChange}
                            />
                        </MenuContainer2>
                    </div>
                </>
            )}
        </div>
    )
}

export default Menu

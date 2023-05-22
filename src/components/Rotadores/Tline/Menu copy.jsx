import React, { useState } from 'react'
import styled from 'styled-components'
import { NombreMateriales } from './Materiales'
import IconoAbrir from '../../../assets/icons/open-indicator.svg'

const MenuContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`

const MenuContainer2 = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    overflow-x: auto;
    position: relative;
    bottom: -50px;
    left: -65px;
`

const MaterialButton = styled.button`
    width: 90px;
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

const MaterialText = styled.span`
    font-size: 10px;
    margin-top: 2px;
`

const ModelButton = styled.button`
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

const Menu = ({ handleModelChange, handleMaterialChange }) => {
    const [showModelButtons, setShowModelButtons] = useState(false)
    const [showMaterialButtons, setShowMaterialButtons] = useState(false)

    const handleToggleModelButtons = () => {
        setShowModelButtons(!showModelButtons)
        setShowMaterialButtons(false)
    }

    const handleToggleMaterialButtons = () => {
        setShowModelButtons(false)
        setShowMaterialButtons(!showMaterialButtons)
    }

    const handleHideButtons = () => {
        setShowModelButtons(false)
        setShowMaterialButtons(false)
    }

    return (
        <div>
            {!showModelButtons && !showMaterialButtons && (
                <ModelButton onClick={handleToggleModelButtons}>
                    <ModelImage
                        style={{ width: '20px', height: '20px' }}
                        src={IconoAbrir}
                        alt='Abrir'
                    />
                </ModelButton>
            )}

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
                    <MaterialButton
                        onClick={handleHideButtons}
                        style={{
                            position: 'absolute',
                            bottom: '126px',
                            left: '-25px',
                            width: '40px',
                            height: '40px',
                        }}
                    >
                        <ModelImage
                            style={{ width: '20px', height: '20px' }}
                            src={IconoAbrir}
                            alt='Abrir'
                        />
                    </MaterialButton>

                    <MenuContainer2 visible={showMaterialButtons}>
                        {NombreMateriales.map((material, index) => (
                            <MaterialButton
                                key={index}
                                onClick={() => handleMaterialChange(index)}
                            >
                                <MaterialImage
                                    src={material.textura}
                                    alt={`Material ${index + 1}`}
                                />
                                <MaterialText>{material.nombre}</MaterialText>
                            </MaterialButton>
                        ))}
                    </MenuContainer2>
                </>
            )}
        </div>
    )
}

export default Menu

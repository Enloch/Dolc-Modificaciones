import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { BsMouse } from 'react-icons/bs'
import Fondo from '../assets/images/Inicio/inicio.jpg'
import Logo from '../assets/images/Inicio/logo.png'

const Loading = ({ onButtonClick }) => {
    return (
        <LoadingPage>
            <LoadingContainer>
                <LoadingTitle src={Logo} />
                <LoadingSubtitle>
                    Desarrollo de fachadas ventiladas innovadoras y de alto
                    rendimiento.
                </LoadingSubtitle>
            </LoadingContainer>
            <ArrowIconContainer>
                <AnimatedArrow
                    size={32}
                    color='white'
                    onClick={onButtonClick}
                />
            </ArrowIconContainer>
        </LoadingPage>
    )
}

export default Loading
// Define los estilos para los botones
const Button = styled.a`
    background: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    margin: 5px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        transition: all 1s cubic-bezier(0, 0.94, 0.13, 1.01);
    }
    &.active {
        color: #696969;
        text-decoration: underline;
    }
    @media screen and (max-width: 786px) {
        margin: 5px 10px;
    }
`

// Define los estilos para el contenedor de los botones
const ButtonsContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 5px;
    @media screen and (max-width: 786px) {
        justify-content: center;
    }
`

const ButtonColumn = styled.div`
    position: absolute;
    left: 14%;
    top: 30px;
    /* transform: translateX(-50%); */
    display: flex;
    flex-direction: column;
    align-items: left;
    @media screen and (max-width: 786px) {
        left: 58%;
        top: 30px;
    }
`

const AdditionalButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

// Define los estilos para la página de carga
const LoadingPage = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
        ),
        url(${Fondo});
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
`

const LoadingContainer = styled.div`
    max-width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -425px;
    @media screen and (max-width: 980px) {
        max-width: 85%;
        margin-top: 0;
    }
`
const LoadingTitle = styled.img`
    filter: invert(1);
    height: auto;
    scale: 0.4;
    object-fit: contain;
`
const LoadingSubtitle = styled.p`
    font-size: 1.5rem;
    text-align: center;
`
// Define los estilos para el contenedor del icono de flecha hacia abajo
const ArrowIconContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

// Define la animación para la flecha
const pulse = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`

// Define los estilos para la flecha animada
const AnimatedArrow = styled(BsMouse)`
    animation: ${pulse} 2s ease-in-out infinite;
`

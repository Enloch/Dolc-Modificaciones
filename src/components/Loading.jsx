import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BsMouse } from 'react-icons/bs'
import Fondo from '../assets/images/Inicio/inicio.jpg'
import Logo from '../assets/images/Inicio/logo.png'

const Loading = ({ onButtonClick }) => {
    return (
        <LoadingPage>
            <ButtonsContainer>
                {/* Añade enlaces a los botones */}
                <Button href='/contacto'>Contacto</Button>
                <Button href='/quienes-somos'>Quiénes Somos</Button>
                <Button href='/'>
                    <strong>ES</strong>
                </Button>
                <Button href='/en'>
                    <strong>EN</strong>
                </Button>
            </ButtonsContainer>
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
    margin: 0 20px;
    text-decoration: none;
    cursor: pointer;
`

// Define los estilos para el contenedor de los botones
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 10px;
    /* transform: translateX(-50%); */
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

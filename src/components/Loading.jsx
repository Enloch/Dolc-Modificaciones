import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Fondo from '../assets/images/Inicio/inicio.jpg'
import Logo from '../assets/images/Inicio/logo.png'

const LoadingPage = styled.div`
    position: fixed;
    top: ${({ show }) => (show ? '0' : '-100%')};
    left: 0;
    width: 100%;
    height: 100%;
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
    z-index: 9999;
    opacity: ${({ show }) => (show ? 1 : 0)};
    transform: ${({ show }) =>
        show ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(1)'};
    transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`
const LoadingContainer = styled.div`
    max-width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -425px;
    @media screen and (max-width: 768px) {
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

const Loading = () => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <LoadingPage show={show}>
            <LoadingContainer>
                <LoadingTitle src={Logo} />
                <LoadingSubtitle>
                    Desarrollo de fachadas ventiladas innovadoras y de alto
                    rendimiento.
                </LoadingSubtitle>
            </LoadingContainer>
        </LoadingPage>
    )
}

export default Loading

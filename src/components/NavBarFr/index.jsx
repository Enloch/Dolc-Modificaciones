import styled from 'styled-components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NavbarContainer = styled.nav`
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
`

// Define los estilos para los botones
const Button = styled.a`
    background: transparent;
    color: white;
    border: none;
    font-size: 0.8rem;
    margin: 5px 20px;
    text-decoration: none;
    z-index: 999;
    cursor: pointer;
    &:hover {
        transition: all 1s cubic-bezier(0, 0.94, 0.13, 1.01);
        color: #c4c4c4;
    }
    &.active {
        color: #696969;
    }
    @media screen and (max-width: 786px) {
        margin: 5px 10px;
    }
`
// Define los estilos para los botones
const Button2 = styled.a`
    background: transparent;
    color: white;
    border: none;
    font-size: 0.8rem;
    margin: 5px 20px;
    text-decoration: none;
    z-index: 999;
    cursor: pointer;
    &:hover {
        color: #c4c4c4;
        transform: translateX(15px);
        transition: 0.2s ease-in-out;
    }
    &.active {
        color: #696969;
    }
    @media screen and (max-width: 786px) {
        margin: 5px 10px;
    }
`
const ButtonsContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: left;
    align-items: flex-start;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 8px;
    justify-content: center;
    z-index: 999;
`

const ButtonColumn = styled(motion.div)`
    z-index: 999;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 5px;
    margin-left: 5px;
`

const AdditionalButtonsContainer = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: left;
`

const Navbar = () => {
    const [showFachadasVentiladasButtons, setShowFachadasVentiladasButtons] =
        useState(false)

    const handleShowFachadasVentiladasButtons = () => {
        setShowFachadasVentiladasButtons(!showFachadasVentiladasButtons)
    }

    const additionalButtons = [
        {
            href: '/fr/fachadas-ventiladas/dolcker-system',
            label: '  Dolcker System',
        },
        {
            // href: '/fachadas-ventiladas/dolcker-t-line',
            // label: '  Dolcker T-LINE',
        },
        // {
        //     href: '/fachadas-ventiladas/dolcker-g10',
        //     label: '  Dolcker G10',
        // },
        // Agrega más botones aquí
    ]
    const buttonHeight = showFachadasVentiladasButtons
        ? `${additionalButtons.length * 40}px`
        : '40px'

    return (
        <NavbarContainer>
            <ButtonsContainer style={{ height: buttonHeight }}>
                <Button href='/contacto'>Contact</Button>
                <Button href='/en/quienes-somos'>A propos de nous</Button>
                <div style={{ position: 'relative', paddingTop: '2.5px' }}>
                    <Button onClick={handleShowFachadasVentiladasButtons}>
                        Façades ventilées
                    </Button>
                    <AnimatePresence>
                        {showFachadasVentiladasButtons && (
                            <ButtonColumn
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <AdditionalButtonsContainer>
                                    {additionalButtons.map(
                                        ({ href, label }) => (
                                            <Button2 key={href} href={href}>
                                                {label}
                                            </Button2>
                                        )
                                    )}
                                </AdditionalButtonsContainer>
                            </ButtonColumn>
                        )}
                    </AnimatePresence>
                </div>
            </ButtonsContainer>
        </NavbarContainer>
    )
}

export default Navbar

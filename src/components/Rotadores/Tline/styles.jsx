import styled from 'styled-components'
import Wipe from '../../../assets/icons/wipe.svg'

export const ContRotador = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const CanvasContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    /* width: ${({ visible }) => (visible ? '75%' : '100%')}; */
    height: 100%;
    cursor: all-scroll;
    @media screen and (max-width: 1080px) {
        width: 66%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`
export const BotonExpandir = styled.a`
    display: none;
    position: absolute;
    top: 50%;
    right: 24%;
    width: 25px;
    height: 25px;
    z-index: 20;
    @media (max-width: 1080px) {
        display: none;
    }
`

export const ImagenExpandir = styled.img`
    width: 100%;
    height: 100%;
`

export const MenuContainer = styled.div`
    width: 33%;
    padding: 5px;
    background-color: #ffffff;
    height: 100%;
    border-left: 1px solid #e0e0e0;
    /* width: ${({ visible }) => (visible ? '25%' : '0')}; */
    /* display: ${({ visible }) => (visible ? 'block' : 'none')}; */

    @media (max-width: 480px) {
        width: 100%;
        padding: 5px;
        border-left: none;
        border-top: 1px solid #e0e0e0;
    }
`

export const IntroContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

export const IntroContent = styled.div`
    max-width: 150px;
    max-height: 150px;
`

export const IntroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const IntroText = styled.p`
    text-align: center;
`

export const R360Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

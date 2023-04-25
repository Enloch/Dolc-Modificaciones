import styled from 'styled-components'

// Define los estilos para los botones
export const Button = styled.a`
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
export const ButtonsContainer = styled.div`
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

export const ButtonColumn = styled.div`
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

export const AdditionalButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

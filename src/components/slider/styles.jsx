import styled from 'styled-components'

export const SliderContainer = styled.div`
    grid-column: 6 / span5;
    position: relative;
    max-width: 50%;
    @media screen and (max-width: 1024px) {
        max-width: 100%;
        grid-column: 5 / span5;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        grid-column: 1 / -1;
    }
`

export const SliderImage = styled.img`
    width: 100%;
    display: block;
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out 0.5s;
`

export const SliderControls = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const SliderButton = styled.button`
    border: 0px solid #fff;
    border-radius: 50%;
    /* background-color: transparent; */
    background-color: ${props => (props.current ? '#fff' : '#ccc')};
    padding: 6px 6px;
    margin: 4px 4px;

    &:hover {
        cursor: pointer;
    }
    &[current] {
        border-color: #fff;
        background-color: #fff;
        color: #000;
    }
`

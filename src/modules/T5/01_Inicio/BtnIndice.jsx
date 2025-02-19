import styled, { css } from 'styled-components'
import { DISTANCES, GRID } from '../../../global/GlobalStyles'
import { mediaQueryTablet } from '../../../styles/sizes'

const BtnIndice = styled.img`
    position: fixed;
    top: ${GRID.verticalSpace};
    right: ${GRID.horizontalSpace};
    z-index: 4;
    width: 2rem;
    cursor: pointer;
    visibility: hidden;

    opacity: 0;
    transform: translateY(-10vh);
    transition: all 0.5s ease-out;
    mix-blend-mode: difference;

    ${mediaQueryTablet(css`
        top: 3rem;
        right: 2.5rem;
        width: 1.5rem;
    `)}
`

export default BtnIndice

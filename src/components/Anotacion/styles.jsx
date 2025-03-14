import styled, { css } from 'styled-components'
import { DISTANCES, GRID, TextSmall } from '../../global/GlobalStyles'
import { mediaQueryTablet } from '../../styles/sizes'

const StyledAnotacion = styled.div`
    /* Explicitly set grid-column for better cross-browser compatibility */
    grid-column: 3 / span 2;
    
    display: flex;
    align-items: flex-end;

    position: relative;
    padding-bottom: 1rem;

    ${TextSmall}

    cursor: ${({ onClick }) => (onClick !== undefined ? 'pointer' : 'default')};

    img {
        position: absolute;
        right: calc(100% + ${GRID.columnGap});

        min-width: 25px;
        width: auto;
        max-height: calc(2 * ${DISTANCES.small});
    }

    ${mediaQueryTablet(css`
        grid-column: 1 / -1;
        gap: ${GRID.columnGap};
        padding-bottom: 0 !important;

        img {
            position: relative;
            right: auto;
        }
    `)}
`

export default StyledAnotacion

import styled, { css } from 'styled-components'
import { Column6, DISTANCES, TextMedium } from '../global/GlobalStyles'
import check from '../assets/icons/check.svg'
import { mediaQueryTablet } from '../styles/sizes'

const Listado = styled.ul`
    ${Column6}
    ${TextMedium}

    li {
        position: relative;
        //display: flex;
        //justify-content: space-between;

        border-top: 1px solid black;
        padding: 10px 5rem 10px 0;

        ::after {
            content: url(${check});
            position: absolute;
            right: 0;
            /* top: ${DISTANCES.small}; */
            top: 10px;
        }

        ${mediaQueryTablet(css`
            padding: ${DISTANCES.small} 0;
            ::after {
                content: '';
            }
        `)}
    }
`

export default Listado

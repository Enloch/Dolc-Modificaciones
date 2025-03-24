import styled, { css } from 'styled-components'
import Seccion from '../../../components/Seccion'
import { TextMedium } from '../../../global/GlobalStyles'
import { mediaQueryTablet } from '../../../styles/sizes'
import Fondo from '../../../assets/images/Inicio/inicio.jpg'

const StyledIndice = styled(Seccion)`
    min-height: 100vh;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
        ),
        url(${Fondo});
    background-size: cover;
    background-position: center center;
    .flecha-indice {
        width: 25px;
        grid-column: 5;
        align-self: flex-end;
        cursor: pointer;
        ${mediaQueryTablet(css`
            display: none;
        `)}
    }

    .idiomas {
        align-self: flex-start;

        grid-column: 12;
        grid-row: 1;
        display: flex;
        gap: 1rem;
        ${TextMedium}

        a {
            color: white;
            text-decoration: none;
        }

        .seleccionado {
            font-weight: bold;
        }

        ${mediaQueryTablet(css`
            grid-column: 1 / -1;
        `)}
    }
`

export { StyledIndice }

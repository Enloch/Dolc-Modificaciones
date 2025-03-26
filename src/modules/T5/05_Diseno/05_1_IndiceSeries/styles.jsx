import styled, { css } from 'styled-components'
import Seccion from '../../../../components/Seccion'
import { Titulo2 } from '../../../../components/Titulos'
import { column_5_span7, column_total } from '../../../../styles/grid'
import { mediaQueryTablet } from '../../../../styles/sizes'
import Enlace from './Enlace'

const SyledIndiceSeries = styled(Seccion)`
    ${Titulo2} {
        ${column_total}
        margin-bottom: 2rem;
    }

    ${Enlace}, > .enlace {
        grid-column-end: span 2;
        ${mediaQueryTablet(css`
            grid-column-start: 1;
            grid-column-end: -1;
        `)}
    }
    
    .series-grid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 2rem;
        width: 100%;
        ${column_5_span7}
        
        ${mediaQueryTablet(css`
            grid-template-columns: repeat(4, 1fr);
        `)}
        
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }
`

export default SyledIndiceSeries

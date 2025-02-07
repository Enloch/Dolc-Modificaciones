import styled, { css } from 'styled-components'
import Seccion from '../../../components/Seccion'
import Text from '../../../components/Text'
import { DISTANCES } from '../../../global/GlobalStyles'
import {
    column_5_span6,
    column_5_span8,
    gridLayoutTemplate,
} from '../../../styles/grid'
import { mediaQueryTablet } from '../../../styles/sizes'

export const Enlaces = styled.ul`
    ${gridLayoutTemplate({
        numColumns: 4,
        columnGap: DISTANCES.small,
        rowGap: DISTANCES.small,
    })}

    li {
        a {
            color: black;
            text-decoration: none;
        }

        ${mediaQueryTablet(css`
            grid-column: 1 / -1;
        `)}
    }
`

export const StyledGrid = styled.div`
    margin: 0 auto 25px auto;
    ${gridLayoutTemplate({
        numColumns: 3,
        columnGap: DISTANCES.small,
        rowGap: DISTANCES.small,
    })}

    ${mediaQueryTablet(css`
        ${gridLayoutTemplate({
            numColumns: 1,
            columnGap: DISTANCES.small,
            rowGap: DISTANCES.small,
        })}
    `)}
`

export const LegendList = styled.div`
  column-count: 2;
  column-gap: 2rem;
  margin: 1rem 0;
  
  p {
    margin: 0.5rem 0;
    break-inside: avoid-column;
  }

  @media (max-width: 768px) {
    column-count: 1;
  }
`

const StyledSistemas = styled(Seccion)`
    ${StyledGrid} {
        ${column_5_span8}
    }
    ${Enlaces} {
        ${column_5_span8}
    }
    ${Text} {
        ${column_5_span8}
    }
`

export default StyledSistemas

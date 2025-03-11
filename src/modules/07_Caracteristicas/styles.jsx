import styled from 'styled-components'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { column_5_span4, column_5_span6 } from '../../styles/grid'
import { mediaQueryTablet, mediaQueryMobile } from '../../styles/sizes'

const StyledCaracteristicas = styled(Seccion)`
    ${Text} {
        ${column_5_span4}
    }
    
    .MuiBox-root {
        ${column_5_span6}
        margin-top: 2rem;
    }
    
    .MuiTableContainer-root {
        margin-bottom: 2rem;
        overflow-x: auto;
        background-color: transparent;
        
        ${mediaQueryTablet(`
            width: 100%;
        `)}
        
        ${mediaQueryMobile(`
            width: 100%;
        `)}
    }
    
    .MuiTableHead-root {
        background-color: #cecece;
    }
    
    .MuiTableCell-root {
        font-family: 'Poppins', sans-serif;
        background-color: transparent;
        border-bottom: none;
        
        ${mediaQueryMobile(`
            padding: 4px;
            font-size: 10px;
        `)}
    }
    
    .MuiTable-root {
        min-width: 300px;
        background-color: transparent;
        border-collapse: collapse;
    }
    
    .MuiPaper-root {
        background-color: transparent;
        box-shadow: none;
    }
`

export default StyledCaracteristicas

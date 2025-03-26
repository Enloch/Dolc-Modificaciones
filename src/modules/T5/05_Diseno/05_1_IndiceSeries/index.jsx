import { Titulo2 } from '../../../../components/Titulos'
import { COLORS } from '../../../../global/GlobalStyles'
import StyledIndiceSeries from './styles'

const IndiceSeries = ({ id }) => {

    return (
        <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
            <Titulo2>SERIES</Titulo2>
        </StyledIndiceSeries>
    )
}

export default IndiceSeries

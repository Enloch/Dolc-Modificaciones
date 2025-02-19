import { Titulo2 } from '../../../../components/Titulos'
import { COLORS } from '../../../../global/GlobalStyles'
import useImagesSeries from '../../../../hooks/useImagesSeriesTline'
import StyledIndiceSeries from './styles'

const IndiceSeries = ({ id }) => {
    const enlacesSeries = useImagesSeries()

    return (
        <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
            <Titulo2>SERIES - Jorge - 7475 hace renders¿?</Titulo2>
            {enlacesSeries}
        </StyledIndiceSeries>
    )
}

export default IndiceSeries

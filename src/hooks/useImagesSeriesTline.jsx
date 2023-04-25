/* eslint-disable react/jsx-key */
import { Children } from 'react'
import getDataFromModules from '../helpers/getDataFromModules'
import Enlace from '../modules/06_Diseno/06_1_IndiceSeries/Enlace'
import img1 from '../assets/images/DolckerTline/ranurado11mm.webp'
const imagenesAmbienteImports = import.meta.globEager(
    '../assets/images/Series/**/EJEMPLO/**'
)

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports)

const enlacesObj = [
    { titulo: 'Nombre Serie', src: img1, id: '#basalt' },
    { titulo: 'Nombre Serie', src: img1, id: '#dolm' },
    { titulo: 'Nombre Serie', src: img1, id: '#dquartz' },
    { titulo: 'Nombre Serie', src: img1, id: '#marble' },
    { titulo: 'Nombre Serie', src: img1, id: '#stone' },
    { titulo: 'Nombre Serie', src: img1, id: '#quarcity' },
    { titulo: 'Nombre Serie', src: img1, id: '#crete' },
    { titulo: 'Nombre Serie', src: img1, id: '#portland' },
    { titulo: 'Nombre Serie', src: img1, id: '#space' },
    { titulo: 'Nombre Serie', src: img1, id: '#tzment' },
    { titulo: 'Nombre Serie', src: img1, id: '#wood' },
    { titulo: 'Nombre Serie', src: img1, id: '#terrazo' },
    { titulo: 'Nombre Serie', src: img1, id: '#arquitect' },
    { titulo: 'Nombre Serie', src: img1, id: '#volumen' },
]

const useImagesSeries = () => {
    return Children.toArray(
        enlacesObj.map(({ titulo, src, id }) => {
            return (
                <Enlace href={id} className='enlace'>
                    <img src={src} alt={titulo + ' ejemplo'} />
                    <span>{titulo}</span>
                </Enlace>
            )
        })
    )
}

export default useImagesSeries

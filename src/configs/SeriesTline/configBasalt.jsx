import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp'
import InteractivoImg from '../../assets/images/DolckerTline/Interactivofachada.jpg'
import MuestraImg from '../../assets/images/DolckerTline/ranurado11mm.webp'
const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configBASALT = {
    titulo: 'Nombre Serie',
    descripcion: 'Texto Jorge.',
    imgSeleccionar,
    indicadores: [
        {
            top: '15%',
            left: '20%',
            ambiente: {
                imagen: InteractivoImg,
                titulo: 'Nombre serie y acabado',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Nombre',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Nombre',
            },
        },
    ],
    muestras: [
        {
            imagen: MuestraImg,
            titulo: 'Nombre muestra',
        },
        {
            imagen: MuestraImg,
            titulo: 'Nombre muestra',
        },
        {
            imagen: MuestraImg,
            titulo: 'Nombre muestra',
        },
    ],
    acabados: [
        {
            imagen: MuestraImg,
            titulo: 'Nombre acabado',
        },
    ],
}

export default configBASALT

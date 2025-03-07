import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/BASALT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/BASALT/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configBASALT = {
    titulo: 'DO&BASALT',
    descripcion:
        'Une réinterprétation suggestive du basalte chez Dolcker : des nuances élégantes, des détails minutieux et des veines douces sont obtenus grâce aux technologies de production les plus modernes et reproduisent fidèlement les variations chromatiques du produit naturel.',
    imgSeleccionar,
    indicadores: [
        {
            top: '15%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Basalt Beige',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Basalt Gris',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Basalt Graphite',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
        },
        {
            imagen: muestras[1],
            titulo: 'Graphite',
        },
        {
            imagen: muestras[2],
            titulo: 'Gris',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configBASALT

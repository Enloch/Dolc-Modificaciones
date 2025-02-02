import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/QUARCITY/YDRAY-Dolcker-QUARCITY_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/DESPIECE/**'
)

const muestrasBEIGEImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/MUESTRAS_ACABADOS/BEIGE/**'
)
const muestrasBLACKImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/MUESTRAS_ACABADOS/BLACK/**'
)
const muestrasGRAPHITEImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/MUESTRAS_ACABADOS/GRAPHITE/**'
)
const muestrasGREYImports = import.meta.globEager(
    '../../../assets/images/Series/QUARCITY/MUESTRAS_ACABADOS/GREY/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BEIGE: getDataFromModules(muestrasBEIGEImports),
    BLACK: getDataFromModules(muestrasBLACKImports),
    GRAPHITE: getDataFromModules(muestrasGRAPHITEImports),
    GREY: getDataFromModules(muestrasGREYImports),
}

const configQUARCITY = {
    titulo: 'DO&QUARCITY',
    descripcion:
        'Stone effect that reinterprets the elegance of a surface with great strength of materials. Shapes and color combinations, selected by the best references in the natural world, are the strengths of unique surfaces with a random but controlled mixing effect.',
    imgSeleccionar,
    indicadores: [
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Quarcity Beige',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Quarcity Noir',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Quarcity Graphite',
            },
        },
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Quarcity Gris',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
            acabados: muestrasAcabados['BEIGE'],
        },
        {
            imagen: muestras[1],
            titulo: 'Noir',
            acabados: muestrasAcabados['BLACK'],
        },
        {
            imagen: muestras[2],
            titulo: 'Graphite',
            acabados: muestrasAcabados['GRAPHITE'],
        },
        {
            imagen: muestras[3],
            titulo: 'Gris',
            acabados: muestrasAcabados['GREY'],
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
        {
            imagen: acabados[1],
            titulo: 'Honed',
        },
    ],
}

export default configQUARCITY

import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/WOOD/Dolcker WOOD_seleccionar.webp'

const ambientesImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/DESPIECE/**', { eager: true }
)

const muestrasABEDULImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/ABEDUL/**', { eager: true }
)
const muestrasENCINAImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/ENCINA/**', { eager: true }
)
const muestrasEUCALIPTOImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/EUCALIPTO/**', { eager: true }
)
const muestrasMANZANOImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/MANZANO/**', { eager: true }
)
const muestrasSAUCEImports = import.meta.glob(
    '../../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/SAUCE/**', { eager: true }
)

const acabadosImports = import.meta.glob(
    '../../../assets/icons/acabados/**', { eager: true }
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    ABEDUL: getDataFromModules(muestrasABEDULImports),
    ENCINA: getDataFromModules(muestrasENCINAImports),
    EUCALIPTO: getDataFromModules(muestrasEUCALIPTOImports),
    MANZANO: getDataFromModules(muestrasMANZANOImports),
    SAUCE: getDataFromModules(muestrasSAUCEImports),
}

const configWOOD = {
    titulo: 'DO&WOOD',
    descripcion:
        'The natural color of the wood returns to the urban space the vitality of an intense life full of emotion, in total harmony with the environment.',
    imgSeleccionar,
    indicadores: [
        {
            top: '7%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Wood Abedul',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Wood Eucalipto',
            },
        },
        {
            top: '63%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Wood Encina',
            },
        },
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Wood Manzano',
            },
        },
        {
            top: '82%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Wood Sauce',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Abedul',
            acabados: muestrasAcabados['ABEDUL'],
        },
        {
            imagen: muestras[1],
            titulo: 'Encina',
            acabados: muestrasAcabados['ENCINA'],
        },
        {
            imagen: muestras[2],
            titulo: 'Eucalipto',
            acabados: muestrasAcabados['EUCALIPTO'],
        },
        {
            imagen: muestras[3],
            titulo: 'Manzano',
            acabados: muestrasAcabados['MANZANO'],
        },
        {
            imagen: muestras[4],
            titulo: 'Sauce',
            acabados: muestrasAcabados['SAUCE'],
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
        {
            imagen: acabados[2],
            titulo: 'Matte',
        },
    ],
}

export default configWOOD

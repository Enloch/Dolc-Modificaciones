import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/TZMENT/YDRAY-Dolcker-ZEMENT_OK.webp'

const ambientesImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/DESPIECE/**', { eager: true }
)

const muestrasBLACKImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/MUESTRAS_ACABADOS/BLACK/**', { eager: true }
)
const muestrasCOALImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/MUESTRAS_ACABADOS/COAL/**', { eager: true }
)
const muestrasSTEELImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/MUESTRAS_ACABADOS/STEEL/**', { eager: true }
)
const muestrasWHITEImports = import.meta.glob(
    '../../../assets/images/Series/TZMENT/MUESTRAS_ACABADOS/WHITE/**', { eager: true }
)

const acabadosImports = import.meta.glob(
    '../../../assets/icons/acabados/**', { eager: true }
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BLACK: getDataFromModules(muestrasBLACKImports),
    COAL: getDataFromModules(muestrasCOALImports),
    STEEL: getDataFromModules(muestrasSTEELImports),
    WHITE: getDataFromModules(muestrasWHITEImports),
}

const configTZMENT = {
    titulo: 'DO&TZMENT',
    descripcion: '',
    imgSeleccionar,
    indicadores: [
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Tzment Noir',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Tzment Charbon',
            },
        },
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Tzment Acier',
            },
        },
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Tzment Blanc',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Noir',
            acabados: muestrasAcabados['BLACK'],
        },
        {
            imagen: muestras[1],
            titulo: 'Charbon',
            acabados: muestrasAcabados['COAL'],
        },
        {
            imagen: muestras[2],
            titulo: 'Acier',
            acabados: muestrasAcabados['STEEL'],
        },
        {
            imagen: muestras[3],
            titulo: 'Blanc',
            acabados: muestrasAcabados['WHITE'],
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
        {
            imagen: acabados[2],
            titulo: 'Matte',
        },
    ],
}

export default configTZMENT

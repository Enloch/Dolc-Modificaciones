import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/SPACE/Dolcker SPACE_seleccionar.webp'

const ambientesImports = import.meta.glob(
    '../../assets/images/Series/SPACE/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/SPACE/DESPIECE/**', { eager: true }
)

const muestrasBLACKmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/BLACK/**', { eager: true }
)
const muestrasDARKmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/DARK/**', { eager: true }
)
const muestrasIVORYmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/IVORY/**', { eager: true }
)
const muestrasSOFTmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/SOFT/**', { eager: true }
)
const muestrasTAUPEmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/TAUPE/**', { eager: true }
)
const muestrasWHITEmports = import.meta.glob(
    '../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/WHITE/**', { eager: true }
)

const acabadosImports = import.meta.glob('../../assets/icons/acabados/**', { eager: true })

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BLACK: getDataFromModules(muestrasBLACKmports),
    DARK: getDataFromModules(muestrasDARKmports),
    IVORY: getDataFromModules(muestrasIVORYmports),
    SOFT: getDataFromModules(muestrasSOFTmports),
    TAUPE: getDataFromModules(muestrasTAUPEmports),
    WHITE: getDataFromModules(muestrasWHITEmports),
}

const configSPACE = {
    titulo: 'DO&SPACE',
    descripcion:
        'La elegancia de la simplicidad, un estilo atemporal, el minimalismo que se convierte en lenguaje expresivo.',
    imgSeleccionar,
    indicadores: [
        {
            top: '5%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Space Ivory',
            },
        },
        {
            top: '21%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Space Dark',
            },
        },
        {
            top: '37%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Space Black',
            },
        },
        {
            top: '54%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Space White',
            },
        },
        {
            top: '71%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Space Soft',
            },
        },
        {
            top: '86%',
            left: '20%',
            ambiente: {
                imagen: ambientes[5],
                titulo: 'Do&Space Taupe',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Black',
            acabados: muestrasAcabados['BLACK'],
        },
        {
            imagen: muestras[1],
            titulo: 'Dark',
            acabados: muestrasAcabados['DARK'],
        },
        {
            imagen: muestras[2],
            titulo: 'Ivory',
            acabados: muestrasAcabados['IVORY'],
        },
        {
            imagen: muestras[3],
            titulo: 'Soft',
            acabados: muestrasAcabados['SOFT'],
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
            acabados: muestrasAcabados['TAUPE'],
        },
        {
            imagen: muestras[5],
            titulo: 'White',
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
            titulo: 'Mate',
        },
    ],
}

export default configSPACE

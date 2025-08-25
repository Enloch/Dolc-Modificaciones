import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/TERRAZO/Dolcker TERRAZO_seleccionar.webp'

const ambientesImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/DESPIECE/**', { eager: true }
)

const muestrasBASICPROImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BASIC PRO/**', { eager: true }
)
const muestrasBASICImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BASIC/**', { eager: true }
)
const muestrasBEIGEImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BEIGE/**', { eager: true }
)
const muestrasPEARLImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/PEARL/**', { eager: true }
)
const muestrasSILVERImports = import.meta.glob(
    '../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/SILVER/**', { eager: true }
)

const acabadosImports = import.meta.glob('../../assets/icons/acabados/**', { eager: true })

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    'BASIC PRO': getDataFromModules(muestrasBASICPROImports),
    BASIC: getDataFromModules(muestrasBASICImports),
    BEIGE: getDataFromModules(muestrasBEIGEImports),
    PEARL: getDataFromModules(muestrasPEARLImports),
    SILVER: getDataFromModules(muestrasSILVERImports),
}

const configTERRAZO = {
    titulo: 'DO&TERRAZO',
    descripcion: 'Detalles gráficos que se inspiran en el Modernismo.',
    imgSeleccionar,
    indicadores: [
        {
            top: '7%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Terrazo Beige + Silver ',
            },
        },
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Terrazo Basic Pro + Silver ',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Terrazo Silver',
            },
        },
        {
            top: '63%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Terrazo Basic + Silver ',
            },
        },
        {
            top: '82%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Terrazo Pearl + Silver ',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Basic Pro',
            acabados: muestrasAcabados['BASIC PRO'],
        },
        {
            imagen: muestras[1],
            titulo: 'Basic',
            acabados: muestrasAcabados['BASIC'],
        },
        {
            imagen: muestras[2],
            titulo: 'Beige',
            acabados: muestrasAcabados['BEIGE'],
        },
        {
            imagen: muestras[3],
            titulo: 'Pearl',
            acabados: muestrasAcabados['PEARL'],
        },
        {
            imagen: muestras[4],
            titulo: 'Silver',
            acabados: muestrasAcabados['SILVER'],
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

export default configTERRAZO

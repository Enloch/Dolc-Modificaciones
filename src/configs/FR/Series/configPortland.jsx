import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/PORTLAND/Dolcker PORTLAND_seleccionar.webp'

const ambientesImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/DESPIECE/**', { eager: true }
)

const muestrasBLANCOImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/MUESTRAS_ACABADOS/BLANCO/**', { eager: true }
)
const muestrasGRISImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/MUESTRAS_ACABADOS/GRIS/**', { eager: true }
)
const muestrasNACARImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/MUESTRAS_ACABADOS/NACAR/**', { eager: true }
)
const muestrasNEGROImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/MUESTRAS_ACABADOS/NEGRO/**', { eager: true }
)
const muestrasTAUPEImports = import.meta.glob(
    '../../../assets/images/Series/PORTLAND/MUESTRAS_ACABADOS/TAUPE/**', { eager: true }
)

const acabadosImports = import.meta.glob(
    '../../../assets/icons/acabados/**', { eager: true }
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BLANCO: getDataFromModules(muestrasBLANCOImports),
    GRIS: getDataFromModules(muestrasGRISImports),
    NACAR: getDataFromModules(muestrasNACARImports),
    NEGRO: getDataFromModules(muestrasNEGROImports),
    TAUPE: getDataFromModules(muestrasTAUPEImports),
}

const configPORTLAND = {
    titulo: 'DO&PORTLAND',
    descripcion: '',
    imgSeleccionar,
    indicadores: [
        {
            top: '7%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Portland Gris',
            },
        },
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Portland Taupe',
            },
        },
        {
            top: '43%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Portland Noir',
            },
        },
        {
            top: '63%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Portland Blanc',
            },
        },
        {
            top: '82%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Portland Nacre',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Blanc',
            acabados: muestrasAcabados['BLANCO'],
        },
        {
            imagen: muestras[1],
            titulo: 'Gris',
            acabados: muestrasAcabados['GRIS'],
        },
        {
            imagen: muestras[2],
            titulo: 'Nacre',
            acabados: muestrasAcabados['NACAR'],
        },
        {
            imagen: muestras[3],
            titulo: 'Noir',
            acabados: muestrasAcabados['NEGRO'],
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
            acabados: muestrasAcabados['TAUPE'],
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

export default configPORTLAND

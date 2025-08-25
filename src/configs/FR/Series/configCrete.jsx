import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/CRETE/YDRAY-Dolcker-CRETE_OK_seleccionar.webp'

const ambientesImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/DESPIECE/**', { eager: true }
)

const muestrasBLANCOImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/BLANCO/**', { eager: true }
)
const muestrasGRISImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/GRIS/**', { eager: true }
)
const muestrasNEGROImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/NEGRO/**', { eager: true }
)
const muestrasTAUPEImports = import.meta.glob(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/TAUPE/**', { eager: true }
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
    NEGRO: getDataFromModules(muestrasNEGROImports),
    TAUPE: getDataFromModules(muestrasTAUPEImports),
}

const configCRETE = {
    titulo: 'DO&CRETE',
    descripcion:
        "Living material, which attracts'Matériau vivant, qui attire les designers et les aménageurs pour sa façon de se présenter et change selon les reflets de la lumière, créant des matériaux nouveaux et surprenants.', designers and planners for its way of presenting itself and changes according to the reflections of light, creating new and surprising materials.",
    imgSeleccionar,
    indicadores: [
        {
            top: '12%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Crete Blanc',
            },
        },
        {
            top: '80%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Crete Gris',
            },
        },
        {
            top: '60%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Crete Noir',
            },
        },
        {
            top: '35%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Crete Taupe',
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
            titulo: 'Noir',
            acabados: muestrasAcabados['NEGRO'],
        },
        {
            imagen: muestras[3],
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
            imagen: acabados[2],
            titulo: 'Mate',
        },
    ],
}

export default configCRETE

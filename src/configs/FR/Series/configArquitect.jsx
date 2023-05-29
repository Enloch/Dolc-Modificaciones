import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/ARQUITECT/Dolcker ARQUITECT_seleccionar.webp'

const ambientesImport = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/DESPIECE/**'
)

const muestrasAMARILLOImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/AMARILLO/**'
)
const muestrasAZULImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/AZUL/**'
)
const muestrasBLANCOImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/BLANCO/**'
)
const muestrasCENIZAImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/CENIZA/**'
)
const muestrasGRAFITOImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/GRAFITO/**'
)
const muestrasGRISImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/GRIS/**'
)
const muestrasMALVAImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/MALVA/**'
)
const muestrasMANGOImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/MANGO/**'
)
const muestrasNEGROImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/NEGRO/**'
)
const muestrasROJOImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/ROJO/**'
)
const muestrasTURQUESAImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/TURQUESA/**'
)
const muestrasVERDEImports = import.meta.globEager(
    '../../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/VERDE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImport)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const muestrasAcabados = {
    AMARILLO: getDataFromModules(muestrasAMARILLOImports),
    AZUL: getDataFromModules(muestrasAZULImports),
    BLANCO: getDataFromModules(muestrasBLANCOImports),
    CENIZA: getDataFromModules(muestrasCENIZAImports),
    GRAFITO: getDataFromModules(muestrasGRAFITOImports),
    GRIS: getDataFromModules(muestrasGRISImports),
    MALVA: getDataFromModules(muestrasMALVAImports),
    MANGO: getDataFromModules(muestrasMANGOImports),
    NEGRO: getDataFromModules(muestrasNEGROImports),
    ROJO: getDataFromModules(muestrasROJOImports),
    TURQUESA: getDataFromModules(muestrasTURQUESAImports),
    VERDE: getDataFromModules(muestrasVERDEImports),
}

const configArquitect = {
    titulo: 'DO&ARQUITECT',
    descripcion:
        "La série ARQUITECT est le résultat de l'innovation et de la fonctionnalité, l'union entre la technique la plus avancée et la polyvalence. Les formats de la collection, ses tons neutres et son aspect monochrome lui permettent d'être le protagoniste de n'importe quel espace.",
    imgSeleccionar,
    indicadores: [
        {
            top: '5%',
            left: '20%',
            ambiente: {
                imagen: ambientes[13],
                titulo: 'Do&Arquitect Blanc',
            },
        },
        {
            top: '5%',
            left: '75%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Arquitect Cendre',
            },
        },
        {
            top: '21%',
            left: '20%',
            ambiente: {
                imagen: ambientes[10],
                titulo: 'Do&Arquitect Rouge',
            },
        },
        {
            top: '21%',
            left: '75%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Arquitect Jaune',
            },
        },
        {
            top: '37%',
            left: '20%',
            ambiente: {
                imagen: ambientes[12],
                titulo: 'Do&Arquitect Vert',
            },
        },
        {
            top: '37%',
            left: '75%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Arquitect Graphite',
            },
        },
        {
            top: '54%',
            left: '20%',
            ambiente: {
                imagen: ambientes[8],
                titulo: 'Do&Arquitect Mangue',
            },
        },
        {
            top: '54%',
            left: '75%',
            ambiente: {
                imagen: ambientes[7],
                titulo: 'Do&Arquitect Malva',
            },
        },
        {
            top: '71%',
            left: '20%',
            ambiente: {
                imagen: ambientes[11],
                titulo: 'Do&Arquitect Turquoise',
            },
        },
        {
            top: '71%',
            left: '75%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Arquitect Bleu',
            },
        },
        {
            top: '86%',
            left: '20%',
            ambiente: {
                imagen: ambientes[6],
                titulo: 'Do&Arquitect Gris',
            },
        },
        {
            top: '86%',
            left: '75%',
            ambiente: {
                imagen: ambientes[9],
                titulo: 'Do&Arquitect Noir',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Jaune',
            acabados: muestrasAcabados['AMARILLO'],
        },
        {
            imagen: muestras[1],
            titulo: 'Bleu',
            acabados: muestrasAcabados['AZUL'],
        },
        {
            imagen: muestras[2],
            titulo: 'Blanc',
            acabados: muestrasAcabados['BLANCO'],
        },
        {
            imagen: muestras[3],
            titulo: 'Cendre',
            acabados: muestrasAcabados['CENIZA'],
        },
        {
            imagen: muestras[4],
            titulo: 'Graphite',
            acabados: muestrasAcabados['GRAFITO'],
        },
        {
            imagen: muestras[5],
            titulo: 'Gris',
            acabados: muestrasAcabados['GRIS'],
        },
        {
            imagen: muestras[6],
            titulo: 'Mauve',
            acabados: muestrasAcabados['MALVA'],
        },
        {
            imagen: muestras[7],
            titulo: 'Mangue',
            acabados: muestrasAcabados['MANGO'],
        },
        {
            imagen: muestras[8],
            titulo: 'Noir',
            acabados: muestrasAcabados['NEGRO'],
        },
        {
            imagen: muestras[9],
            titulo: 'Rouge',
            acabados: muestrasAcabados['ROJO'],
        },
        {
            imagen: muestras[10],
            titulo: 'Turquoise',
            acabados: muestrasAcabados['TURQUESA'],
        },
        {
            imagen: muestras[11],
            titulo: 'Vert',
            acabados: muestrasAcabados['VERDE'],
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

export default configArquitect

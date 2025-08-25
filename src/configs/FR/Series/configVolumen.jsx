import getDataFromModules from '../../../helpers/getDataFromModules'

const ambientesImports = import.meta.glob(
    '../../../assets/images/Series/VOLUMEN/AMBIENTES/**', { eager: true }
)

const muestrasImports = import.meta.glob(
    '../../../assets/images/Series/VOLUMEN/DESPIECE/**', { eager: true }
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)

const configVOLUMEN = {
    titulo: 'DO&VOLUMEN',
    descripcion: '',
    imgSeleccionar: '',
    indicadores: [
        {
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP.. Do&Volumen',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Pièce 1',
        },
        {
            imagen: muestras[1],
            titulo: 'Pièce 2',
        },
        {
            imagen: muestras[2],
            titulo: 'Pièce 3',
        },
        {
            imagen: muestras[3],
            titulo: 'Pièce 4',
        },
        {
            imagen: muestras[4],
            titulo: 'Pièce 5',
        },
        {
            imagen: muestras[5],
            titulo: 'Pièce 6',
        },
        {
            imagen: muestras[6],
            titulo: 'Pièce 7',
        },
        {
            imagen: muestras[7],
            titulo: 'Pièce 8',
        },
        {
            imagen: muestras[8],
            titulo: 'Pièce 9 (soulagement de la presse)',
        },
    ],
}

export default configVOLUMEN

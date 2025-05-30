import getDataFromModules from '../../../../helpers/getDataFromModules'

const fondosImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Fondos/H/**'
)
const selectoresImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Iconos/**'
)

const fondos = getDataFromModules(fondosImport)
const selectores = getDataFromModules(selectoresImport)

const configH = {
    coord: {
        x1: '90%',
        y1: '16.615%',
        x2: '100%',
        y2: '33.308%',
    },
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Sans pièces',
                primerPlano: '',
            },
            {
                selectorImg: selectores[1],
                titulo: 'Pièce 1',
                primerPlano: fondos[0],
            },
            {
                selectorImg: selectores[2],
                titulo: 'Pièce 2',
                primerPlano: fondos[1],
            },
            {
                selectorImg: selectores[3],
                titulo: 'Pièce 3',
                primerPlano: fondos[2],
            },
            {
                selectorImg: selectores[4],
                titulo: 'Pièce 4',
                primerPlano: fondos[3],
            },
            {
                selectorImg: selectores[5],
                titulo: 'Pièce 5',
                primerPlano: fondos[4],
            },
            {
                selectorImg: selectores[6],
                titulo: 'Pièce 6',
                primerPlano: fondos[5],
            },
            {
                selectorImg: selectores[7],
                titulo: 'Pièce 7',
                primerPlano: fondos[6],
            },
            {
                selectorImg: selectores[8],
                titulo: 'Pièce 8',
                primerPlano: fondos[7],
            },
            {
                selectorImg: selectores[9],
                titulo: 'Pièce 9',
                primerPlano: fondos[8],
            },
        ],
    },
}

export default configH

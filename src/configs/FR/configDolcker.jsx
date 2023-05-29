import getDataFromModules from '../../helpers/getDataFromModules'

const piezasImport = import.meta.globEager('../../assets/icons/piezas/**')
const piezas = getDataFromModules(piezasImport)

const config = [
    {
        top: '11.3%',
        left: '37.6%',
        content: {
            imgSrc: piezas[6],
            title: 'Clôtures',
        },
    },
    {
        top: '2.8%',
        left: '65%',
        content: {
            imgSrc: piezas[0],
            title: 'Casquette de couronnement',
        },
    },
    {
        top: '24.5%',
        left: '44.5%',
        content: {
            imgSrc: piezas[2],
            title: 'Façade ventilée',
        },
    },
    {
        top: '20%',
        left: '21%',
        content: {
            imgSrc: piezas[1],
            title: 'Coin du corps entier',
        },
    },
    {
        top: '31.3%',
        left: '51%',
        content: {
            imgSrc: piezas[7],
            title: 'Grille de plafond',
        },
    },
    {
        top: '53.3%',
        left: '83.3%',
        content: {
            imgSrc: piezas[8],
            title: 'Plancher surélevé',
        },
    },
    {
        top: '60%',
        left: '34%',
        content: {
            imgSrc: piezas[7],
            title: 'Grille de la piscine',
        },
    },
    {
        top: '70%',
        left: '66%',
        content: {
            imgSrc: piezas[4],
            title: 'Marche',
        },
    },
]

export default config

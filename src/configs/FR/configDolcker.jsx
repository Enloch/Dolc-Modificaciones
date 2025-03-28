import getDataFromModules from '../../helpers/getDataFromModules'

const piezasImport = import.meta.globEager('../../assets/icons/piezas/**')
const piezas = getDataFromModules(piezasImport)

const config = [
    {
		top: "50%",
		left: "18%",
        content: {
            imgSrc: piezas[6],
            title: 'Clôtures',
        },
    },
    {
		top: "26%",
		left: "65%",
        content: {
            imgSrc: piezas[0],
            title: 'Casquette de couronnement',
        },
    },
    {
		top: "40%",
		left: "35%",
        content: {
            imgSrc: piezas[2],
            title: 'Façade ventilée',
        },
    },
    {
		top: "51%",
		left: "60%",
        content: {
            imgSrc: piezas[1],
            title: 'Coin du corps entier',
        },
    },
    {
		top: "60%",
		left: "34%",
        content: {
            imgSrc: piezas[7],
            title: 'Grille de plafond',
        },
    },
    {
		top: "72%",
		left: "39%",
        content: {
            imgSrc: piezas[8],
            title: 'Plancher surélevé',
        },
    },
	{
		top: "73%",
		left: "14%",
        content: {
            imgSrc: piezas[7],
            title: 'Grille de la piscine',
        },
    },
    {
		top: "73%",
		left: "66%",
        content: {
            imgSrc: piezas[4],
            title: 'Marche',
        },
    },
]

export default config

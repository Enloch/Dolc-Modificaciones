import getDataFromModules from '../../helpers/getDataFromModules'

const piezasImport = import.meta.globEager('../../assets/icons/piezas/**')
const piezas = getDataFromModules(piezasImport)

const config = [
    {
		top: "50%",
		left: "18%",
        content: {
            imgSrc: piezas[6],
            title: 'Fences',
        },
    },
    {
		top: "26%",
		left: "65%",
        content: {
            imgSrc: piezas[0],
            title: 'Coronation cap',
        },
    },
    {
		top: "40%",
		left: "35%",
        content: {
            imgSrc: piezas[2],
            title: 'Ventilated facade',
        },
    },
    {
        top: "51%",
		left: "60%",
        content: {
            imgSrc: piezas[1],
            title: 'Full body corner',
        },
    },
    {
		top: "60%",
		left: "34%",
        content: {
            imgSrc: piezas[7],
            title: 'Ceiling grid',
        },
    },
    {
		top: "72%",
		left: "39%",
        content: {
            imgSrc: piezas[8],
            title: 'Raised floor',
        },
    },
    {
		top: "73%",
		left: "14%",
        content: {
            imgSrc: piezas[7],
            title: 'Pool grid',
        },
    },
    {
		top: "73%",
		left: "66%",
        content: {
            imgSrc: piezas[4],
            title: 'Step',
        },
    },
]

export default config

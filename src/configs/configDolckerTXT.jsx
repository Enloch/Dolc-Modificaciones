import getDataFromModules from '../helpers/getDataFromModules'
const piezasImport = import.meta.globEager('../assets/icons/Tline/piezas/**')
const piezas = getDataFromModules(piezasImport)

const config = [
    {
        top: '35.3%',
        left: '59%',
        content: {
            imgSrc: piezas[4],
            title: 'Recercos',
        },
    },
    {
        top: '15%',
        left: '22%',
        content: {
            imgSrc: piezas[6],
            title: 'Tapa coronación',
        },
    },
    {
        top: '70.3%',
        left: '79.5%',
        content: {
            imgSrc: piezas[3],
            title: 'Fachada ventilada',
        },
    },
    {
        top: '66%',
        left: '64.5%',
        content: {
            imgSrc: piezas[2],
            title: 'Esquina',
        },
    },
    {
        top: '94%',
        left: '43%',
        content: {
            imgSrc: piezas[5],
            title: 'Rejilla techo',
        },
    },
    {
        top: '89%',
        left: '88%',
        content: {
            imgSrc: piezas[0],
            title: 'Arranque',
        },
    },
    {
        top: '68%',
        left: '52%',
        content: {
            imgSrc: piezas[1],
            title: 'Perfil',
        },
    },
]

export default config

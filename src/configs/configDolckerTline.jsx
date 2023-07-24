import getDataFromModules from '../helpers/getDataFromModules'
const piezasImport = import.meta.globEager('../assets/icons/Tline/piezas/**')
const piezas = getDataFromModules(piezasImport)

const config = [
    {
        top: '31.3%',
        left: '64%',
        content: {
            imgSrc: piezas[4],
            title: 'Recercos',
        },
    },
    {
        top: '23%',
        left: '18%',
        content: {
            imgSrc: piezas[6],
            title: 'Tapa coronación',
        },
    },
    {
        top: '70.3%',
        left: '77.3%',
        content: {
            imgSrc: piezas[3],
            title: 'Fachada ventilada',
        },
    },
    {
        top: '40%',
        left: '37.5%',
        content: {
            imgSrc: piezas[2],
            title: 'Esquina cerámica',
        },
    },
    {
        top: '64%',
        left: '29%',
        content: {
            imgSrc: piezas[5],
            title: 'Rejilla techo',
        },
    },
    {
        top: '84%',
        left: '17%',
        content: {
            imgSrc: piezas[0],
            title: 'Arranque',
        },
    },
    {
        top: '46%',
        left: '17%',
        content: {
            imgSrc: piezas[1],
            title: 'Cenefa',
        },
    },
]

export default config

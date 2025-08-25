import { Children } from 'react'
import SvgComponent from '../../assets/images/Diseno/Formato/ColorSVG'
import getDataFromModules from '../../helpers/getDataFromModules'

const backgroundImports = import.meta.glob(
    '../../assets/images/Diseno/Formato/backgrounds/**', { eager: true }
)
const selectImports = import.meta.glob(
    '../../assets/icons/SelectoresFormato/**', { eager: true }
)

const backgrounds = getDataFromModules(backgroundImports)
const selects = getDataFromModules(selectImports)

const config = {
    fachada: [
        {
            top: '50%',
            left: '45%',
            menu: {
                seleccionado: 0,
                selectores: [
                    {
                        selectorImg: selects[21],
                        titulo: 'Longueurs libres',
                        menu: {
                            seleccionado: 0,
                            selectores: [
                                {
                                    selectorImg: selects[21],
                                    titulo: 'Longueurs libres 1',
                                    primerPlano: backgrounds[16],
                                },
                                {
                                    selectorImg: selects[28],
                                    titulo: 'Longueurs libres 2',
                                    primerPlano: backgrounds[26],
                                },
                            ],
                        },
                    },
                    {
                        selectorImg: selects[25],
                        titulo: 'Couleurs des lignes',
                        primerPlano: {
                            bg: backgrounds[1],
                            another: Children.toArray([
                                <SvgComponent className='plano' />,
                                <SvgComponent className='fondo' />,
                            ]),
                        },
                        colorPicker: true,
                    },
                    {
                        selectorImg: selects[19],
                        titulo: 'Formats',
                        menu: {
                            seleccionado: -1,
                            selectores: [
                                {
                                    selectorImg: selects[1],
                                    titulo: '20x120',
                                    primerPlano: backgrounds[0],
                                },
                                {
                                    selectorImg: selects[6],
                                    titulo: '30x60',
                                    primerPlano: backgrounds[5],
                                },
                                {
                                    selectorImg: selects[10],
                                    titulo: '30x90',
                                    primerPlano: backgrounds[6],
                                },
                                {
                                    selectorImg: selects[2],
                                    titulo: '30x120',
                                    primerPlano: backgrounds[4],
                                },
                                {
                                    selectorImg: selects[8],
                                    titulo: '40x80',
                                    primerPlano: backgrounds[8],
                                },
                                {
                                    selectorImg: selects[3],
                                    titulo: '40x120',
                                    primerPlano: backgrounds[7],
                                },
                                {
                                    selectorImg: selects[11],
                                    titulo: '45x90',
                                    primerPlano: backgrounds[9],
                                },
                                {
                                    selectorImg: selects[0],
                                    titulo: '50x100',
                                    primerPlano: backgrounds[10],
                                },
                                {
                                    selectorImg: selects[4],
                                    titulo: '50x120',
                                    primerPlano: backgrounds[11],
                                },
                                {
                                    selectorImg: selects[7],
                                    titulo: '60x60',
                                    primerPlano: backgrounds[13],
                                },
                                {
                                    selectorImg: selects[12],
                                    titulo: '60x90',
                                    primerPlano: backgrounds[14],
                                },
                                {
                                    selectorImg: selects[5],
                                    titulo: '60x120',
                                    primerPlano: backgrounds[12],
                                },
                                {
                                    selectorImg: selects[9],
                                    titulo: '80x80',
                                    primerPlano: backgrounds[15],
                                },
                            ],
                        },
                    },
                    {
                        selectorImg: selects[13],
                        titulo: 'Multiformats',
                        menu: {
                            selectores: [
                                {
                                    selectorImg: selects[13],
                                    titulo: 'Modulaire 1',
                                    primerPlano: backgrounds[17],
                                },
                                {
                                    selectorImg: selects[14],
                                    titulo: 'Modulaire 2',
                                    primerPlano: backgrounds[18],
                                },
                                {
                                    selectorImg: selects[15],
                                    titulo: 'Modulaire 3',
                                    primerPlano: backgrounds[19],
                                },
                                {
                                    selectorImg: selects[16],
                                    titulo: 'Modulaire 4',
                                    primerPlano: backgrounds[20],
                                },
                                {
                                    selectorImg: selects[17],
                                    titulo: 'Modulaire 5',
                                    primerPlano: backgrounds[21],
                                },
                                {
                                    selectorImg: selects[18],
                                    titulo: 'Modulaire 6',
                                    primerPlano: backgrounds[22],
                                },
                                {
                                    selectorImg: selects[20],
                                    titulo: 'Modulaire 7',
                                    primerPlano: backgrounds[23],
                                },
                                {
                                    selectorImg: selects[22],
                                    titulo: 'Modulaire 8',
                                    primerPlano: backgrounds[24],
                                },
                                {
                                    selectorImg: selects[23],
                                    titulo: 'Modulaire 9',
                                    primerPlano: backgrounds[25],
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
}

export default config

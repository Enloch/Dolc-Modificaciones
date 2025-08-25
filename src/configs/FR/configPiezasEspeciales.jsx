import getDataFromModules from '../../helpers/getDataFromModules'

const selectoresImports = import.meta.glob('../../assets/icons/piezas/**', { eager: true })
const selectores = getDataFromModules(selectoresImports)

const albardilla = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/ALBARDILLA/*.webp', { eager: true }
    ),
    peldano1 = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/PELDANO 1/*.webp', { eager: true }
    ),
    peldano2 = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/PELDANO 2/*.webp', { eager: true }
    ),
    peldano3 = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/PELDANO 3/*.webp', { eager: true }
    ),
    rejilla = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/REJILLA/*.webp', { eager: true }
    ),
    sueloElevado = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/SUELO ELEVADO/*.webp', { eager: true }
    ),
    techo = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/TECHO/*.webp', { eager: true }
    ),
    vierteaguas = import.meta.glob(
        '../../assets/images/Diseno/Piezas especiales/VIERTEAGUAS/*.webp', { eager: true }
    )

const albardillaImports = getDataFromModules(albardilla),
    peldano1Imports = getDataFromModules(peldano1),
    peldano2Imports = getDataFromModules(peldano2),
    peldano3Imports = getDataFromModules(peldano3),
    rejillaImports = getDataFromModules(rejilla),
    sueloElevadoImports = getDataFromModules(sueloElevado),
    techoImports = getDataFromModules(techo),
    vierteaguasImports = getDataFromModules(vierteaguas)

const config = {
    bottom: '10%',
    left: '4%',
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Chapes',
                rotador: albardillaImports,
            },
            {
                selectorImg: selectores[3],
                titulo: 'Marches',
                menu: {
                    selectores: [
                        {
                            selectorImg: selectores[3],
                            titulo: 'Type 1',
                            rotador: peldano1Imports,
                        },
                        {
                            selectorImg: selectores[4],
                            titulo: 'Type 2',
                            rotador: peldano2Imports,
                        },
                        {
                            selectorImg: selectores[5],
                            titulo: 'Type 3',
                            rotador: peldano3Imports,
                        },
                    ],
                },
            },
            {
                selectorImg: selectores[7],
                titulo: 'Grille',
                rotador: rejillaImports,
            },
            {
                selectorImg: selectores[8],
                titulo: 'Plancher surélevé',
                rotador: sueloElevadoImports,
            },
            {
                selectorImg: selectores[9],
                titulo: 'Toit',
                rotador: techoImports,
            },
            {
                selectorImg: selectores[10],
                titulo: 'Gouttière',
                rotador: vierteaguasImports,
            },
        ],
    },
}

export default config

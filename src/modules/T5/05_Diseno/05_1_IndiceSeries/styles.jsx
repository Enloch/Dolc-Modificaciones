import styled, { css } from 'styled-components'
import Seccion from '../../../../components/Seccion'
import { Titulo2 } from '../../../../components/Titulos'
import { column_5_span7, column_total } from '../../../../styles/grid'
import { mediaQueryTablet } from '../../../../styles/sizes'
import Enlace from './Enlace'
import { COLORS } from '../../../../global/GlobalStyles'

const SyledIndiceSeries = styled(Seccion)`
    ${Titulo2} {
        ${column_total}
        margin-bottom: 2rem;
    }

    ${Enlace}, > .enlace {
        grid-column-end: span 2;
        ${mediaQueryTablet(css`
            grid-column-start: 1;
            grid-column-end: -1;
        `)}
    }
    
    .series-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2rem;
        width: 100%;
        ${column_5_span7}
        
        ${mediaQueryTablet(css`
            grid-template-columns: repeat(4, 1fr);
        `)}
        
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    .carousel-container {
        width: 100%;
        ${column_5_span7}
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 40px;
        margin-bottom: 2rem;
        
        .carousel-items {
            display: flex;
            gap: 2rem;
            width: 100%;
            overflow: hidden;
            justify-content: space-between;
            
            ${mediaQueryTablet(css`
                gap: 1.5rem;
            `)}
            
            @media (max-width: 768px) {
                gap: 1rem;
                justify-content: space-around;
            }
        }
        
        .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: ${COLORS.gray03};
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: background-color 0.2s;
            
            &:hover {
                background: ${COLORS.gray04};
            }
            
            &.prev {
                left: 0;
            }
            
            &.next {
                right: 0;
            }
            
            ${mediaQueryTablet(css`
                width: 35px;
                height: 35px;
                font-size: 18px;
            `)}
            
            @media (max-width: 768px) {
                width: 30px;
                height: 30px;
                font-size: 16px;
            }
        }
        
        @media (max-width: 768px) {
            padding: 0 30px;
        }
    }
`

export default SyledIndiceSeries

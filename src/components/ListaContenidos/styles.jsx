import styled, { css } from 'styled-components'; // Importar styled-components para el estilo
import { GRID, TextMedium, COLORS } from '../../global/GlobalStyles'; // Importar estilos y constantes globales
import { column_5_span6 } from '../../styles/grid'; // Importar estilos de diseño de cuadrícula
import { mediaQueryTablet } from '../../styles/sizes'; // Importar media query para diseño responsivo
import StyledSublista from './Sublista/styles'; // Importar el componente estilizado para sublistas

// Definir el componente estilizado para la lista de contenidos
const StyledListaContenidos = styled.nav`
    ${column_5_span6} // Aplicar el diseño de cuadrícula para la lista principal

    counter-reset: counter -1; // Inicializar un contador para los elementos de la lista

    > ul > * { // Seleccionar hijos directos de la lista desordenada
        position: relative; // Establecer la posición como relativa para el posicionamiento de pseudo-elementos

        &::before { // Usar un pseudo-elemento para mostrar el contador
            content: counter(counter, decimal-leading-zero); // Mostrar el contador con ceros a la izquierda
            counter-increment: counter; // Incrementar el contador para cada elemento de la lista

            position: absolute; // Posicionar el contador de forma absoluta
            right: calc(100% + ${GRID.columnGap}); // Posicionarlo a la derecha del elemento de la lista

            border-top: 1px solid transparent; // Agregar un borde transparente para un tamaño consistente
            padding: 0.625rem 0; // Agregar padding para el espaciado

            color: ${COLORS.gray01}; // Establecer el color del contador
            ${TextMedium} // Aplicar estilos de texto medio de los estilos globales
        }

        // Media query para tabletas y pantallas más grandes
        ${mediaQueryTablet(css` 
            ::before { // Ocultar el contador en pantallas más grandes
                content: ''; // Establecer el contenido como vacío
                display: none; // Ocultar el elemento
            }
        `)}
    }

    // Estilos para sublistas
    > ul > ${StyledSublista} { // Seleccionar hijos directos que son StyledSublista
        grid-template-columns: repeat(6, 1fr); // Definir un diseño de cuadrícula con 6 columnas iguales

        > ul > ${StyledSublista} { // Seleccionar sublistas anidadas
            grid-template-columns: repeat(5, 1fr); // Definir un diseño de cuadrícula con 5 columnas iguales

            > ul > ${StyledSublista} { // Seleccionar sublistas aún más anidadas
                grid-template-columns: repeat(4, 1fr); // Definir un diseño de cuadrícula con 4 columnas iguales
            }
        }
    }
`;

export default StyledListaContenidos; // Exportar el componente estilizado para su uso en otros archivos
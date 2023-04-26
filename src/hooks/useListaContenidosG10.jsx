// Importar el hook useRef desde la biblioteca React.
import { useRef } from 'react'

// Importar los componentes ElementoLista y Sublista.
import ElementoLista from '../components/ListaContenidosG10/ElementoLista'
import Sublista from '../components/ListaContenidosG10/Sublista'

// Definir la función useListaContenidos, que toma los siguientes argumentos:
// - elementosJSON: un array de elementos JSON que representan los elementos de la lista.
// - parentRefs: un array de referencias a los elementos primarios de la lista.
// - isReactRouter: un booleano que indica si se está utilizando React Router o no.
const useListaContenidos = (
    elementosJSON,
    parentRefs = [],
    isReactRouter = false
) => {
    // Crear un array vacío para almacenar los elementos de la lista.
    let elementos = []

    // Iterar a través de cada elemento JSON en el array elementosJSON.
    elementosJSON.map(elemento => {
        // Si el elemento no tiene una sublista, crear un componente ElementoLista y agregarlo al array elementos.
        if (elemento.subList === undefined) {
            elementos.push(
                <ElementoLista
                    link={elemento.link}
                    title={elemento.title}
                    key={elemento.title}
                    isReactRouter={isReactRouter}
                    target={elemento.target}
                />
            )

            // Si el elemento tiene una sublista, crear un componente Sublista y agregarlo al array elementos.
        } else {
            // Crear una referencia al componente Sublista actual.
            const sublistaRef = useRef()

            // Llamar a la función useListaContenidos de forma recursiva para crear los elementos de la sublista.
            const sublistaContenidos = useListaContenidos(
                elemento.subList,
                [...parentRefs, sublistaRef],
                isReactRouter
            )

            // Agregar el componente Sublista actual al array elementos.
            elementos.push(
                <Sublista
                    title={elemento.title}
                    key={elemento.title}
                    ref={sublistaRef}
                    parents={parentRefs}
                >
                    {sublistaContenidos}
                </Sublista>
            )
        }
    })

    // Devolver el array de elementos de la lista.
    return elementos
}

// Exportar la función useListaContenidos por defecto.
export default useListaContenidos

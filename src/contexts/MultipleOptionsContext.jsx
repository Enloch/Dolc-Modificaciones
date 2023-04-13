import { createContext, useContext, useState } from 'react'

// Crea un nuevo contexto
const MultipleOptionsContext = createContext()

// Define un componente proveedor que envuelve a otros componentes y proporciona el contexto a los componentes descendientes
const MultipleOptionsProvider = ({ children }) => {
    // Define dos estados locales: uno para almacenar una lista de cambios y otro para almacenar información sobre los menús seleccionados
    const [listaCambios, setListaCambios] = useState([])
    const [idsMenu, setIdsMenu] = useState({})

    // Define una función para agregar información sobre un menú seleccionado a la lista de menús
    const addIdsMenu = (idMenu, selectorImg, plano) => {
        // Actualiza el estado de 'idsMenu'
        setIdsMenu(prev => {
            // Si el menú ya está en la lista, actualiza su información
            if (prev[idMenu]) {
                return {
                    ...prev,
                    [idMenu]: {
                        ...prev[idMenu],
                        listaSelector: [
                            ...prev[idMenu].listaSelector,
                            selectorImg,
                        ],
                    },
                }
            }

            // Si el menú no está en la lista, agrega una nueva entrada para él
            const newObj = {
                ...prev,
                [idMenu]: {
                    listaSelector: [selectorImg],
                    plano,
                },
            }

            return newObj
        })
    }

    // Define una función para agregar un cambio a la lista de cambios
    const pushCambio = cambio => setListaCambios(prev => [...prev, cambio])

    // Define una función para eliminar un cambio de la lista de cambios
    const removeCambio = cambio =>
        setListaCambios(prev => prev.filter(id => id !== cambio))

    // Define una función para limpiar la lista de cambios
    const cleanListaCambios = () => setListaCambios([])

    // Define el objeto que se proporcionará a los componentes descendientes a través del contexto
    const value = {
        listaCambios,
        pushCambio,
        cleanListaCambios,
        removeCambio,
        addIdsMenu,
        idsMenu,
    }

    // Renderiza el proveedor con el contexto y los componentes descendientes
    return (
        <MultipleOptionsContext.Provider value={value}>
            {children}
        </MultipleOptionsContext.Provider>
    )
}

// Define un hook personalizado que permite a los componentes consumir el contexto y acceder a los datos compartidos y los métodos definidos
const useListaCambios = () => useContext(MultipleOptionsContext)

// Exporta el hook personalizado y el componente proveedor como valores predeterminados
export { useListaCambios }
export default MultipleOptionsProvider

import { useRef } from 'react'
import MultipleOptionsProvider from '../../contexts/MultipleOptionsContext'
import {
    Final,
    DescargasEsc,
    SistemasEsc,
    CaracteristicasEsc,
    DisenoEscamas,
    AplicacionesEsc,
    VentajasEsc,
    DolckerEsc,
    IndiceEsc,
    InicioEsc,
} from '../../modules'

const Escamas = () => {
    const indiceRef = useRef()

    return (
        <MultipleOptionsProvider>
            <InicioEsc indiceRef={indiceRef} />
            <IndiceEsc indiceRef={indiceRef} />
            <DolckerEsc />
            <VentajasEsc />
            <AplicacionesEsc />
            <DisenoEscamas />
            <CaracteristicasEsc />
            <SistemasEsc />
            <DescargasEsc />
            <Final />
        </MultipleOptionsProvider>
    )
}

export default Escamas

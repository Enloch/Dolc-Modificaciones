import { useRef } from 'react'
import MultipleOptionsProvider from '../../contexts/MultipleOptionsContext'
import {
    Final,
    AplicacionesStep,
    VentajasStep,
    Dolcker_Step,
    IndiceStep,
    Inicio,
} from '../../modules'

const DolckerStep = () => {
    const indiceRef = useRef()

    return (
        <MultipleOptionsProvider>
            <Inicio indiceRef={indiceRef} />
            <IndiceStep id='indice' indiceRef={indiceRef} />
            <Dolcker_Step id='dolcker-step' />
            <VentajasStep id='ventajas-step' />
            <AplicacionesStep id='aplicaciones-step' />
            <Final />
        </MultipleOptionsProvider>
    )
}

export default DolckerStep

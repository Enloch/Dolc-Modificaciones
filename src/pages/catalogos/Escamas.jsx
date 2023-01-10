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
            <IndiceEsc id='indice' indiceRef={indiceRef} />
            <DolckerEsc id='dolcker-escamas' />
            <VentajasEsc id='ventajas-escamas' />
            <AplicacionesEsc
                id={[
                    'aplicaciones-escamas',
                    'rehabilitacion',
                    'obra-nueva',
                    'fachadas',
                    'terrazas',
                ]}
            />
            <DisenoEscamas
                id={[
                    'diseno',
                    'formatos',
                    'despiece',
                    'acabados',
                    'espesores',
                    'piezas',
                    'series',
                ]}
            />
            <CaracteristicasEsc
                id={['caracteristicas-especiales', 'datos-tecnicos']}
            />
            <SistemasEsc
                id={[
                    'sistemas',
                    'dolcker-and-clip',
                    'dol-tc11',
                    'dol-tc14',
                    'dol-hc20',
                ]}
            />
            <DescargasEsc id='descargas' />
            <Final />
        </MultipleOptionsProvider>
    )
}

export default Escamas

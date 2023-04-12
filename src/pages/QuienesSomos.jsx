import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/Seccion'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'

import img1 from '../assets/images/QuienesSomos/DSC_6195.jpg'
import img2 from '../assets/images/QuienesSomos/DSC_6221.jpg'
import img3 from '../assets/images/QuienesSomos/DSC_6303.jpg'
import ImageWithCaption from '../components/ImageWithCaption'

const QuienesSomos = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to='/'>Dolcker</Link>
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion style={{ minHeight: '100vh' }}>
                <Titulo2>QUIÉNES SOMOS</Titulo2>
                <Text>
                    En Dolcker, nos enfocamos en fachadas ventiladas innovadoras
                    y de alto rendimiento para la construcción sostenible.
                    <br />
                    <br />
                    Desde nuestros laboratorios de investigación y desarrollo,
                    nos encontramos en una constante experimentación y
                    desarrollo de nuevos materiales, técnicas de cocción y
                    procesos de producción. Todo para garantizar que nuestro
                    productos cumplen los requisitos más estrictos tanto en
                    diseño como en calidad.
                    <br />
                    <br />
                    Nuestra apuesta decidida por la calidad de nuestros
                    productos nos hace merecedores de la confianza de un gran
                    número de arquitectos, colocadores y clientes.
                </Text>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Aplicaciones 1'
                    columnSpan='6'
                />
                <ImageWithCaption
                    src={img2}
                    alt='Imagen de Aplicaciones 1'
                    columnSpan='3'
                />
                <ImageWithCaption
                    src={img3}
                    alt='Imagen de Aplicaciones 1'
                    style={{
                        gridColumn: 'span 3',
                    }}
                />
            </Seccion>
            <Final />
        </>
    )
}

export default QuienesSomos

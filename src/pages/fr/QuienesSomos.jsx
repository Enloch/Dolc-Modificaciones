import { Link } from 'react-router-dom'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegable from '../../hooks/useMenuDesplegable'
import ImageSlider from '../../components/slider/slider'
import Final from '../modules/10_Final'
import Logo from '../../assets/images/Inicio/logo.png'
import img1 from '../../assets/images/QuienesSomos/DSC_6195.jpg'
import img2 from '../../assets/images/QuienesSomos/DSC_6221.jpg'
import img3 from '../../assets/images/QuienesSomos/DSC_6303.jpg'
import ImageWithCaption from '../components/ImageWithCaption'
const Slider1 = [img1, img2, img3]
const QuienesSomos = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to='/'>
            <img src={Logo} style={{ scale: '0.5', filter: 'invert(1)' }} />
        </Link>
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion style={{ minHeight: '100vh' }}>
                <Titulo2>QUI SOMMES-NOUS</Titulo2>
                <Text>
                    Chez Dolcker, nous nous concentrons sur les façades
                    ventilées innovantes et performantes pour la construction
                    durable. et performantes pour une construction durable.
                    <br />
                    <br />
                    Depuis nos laboratoires de recherche et de développement,
                    nous expérimentons et développons en permanence de nouveaux
                    matériaux de nouveaux matériaux, de nouvelles techniques de
                    cuisson et de nouveaux procédés de production. de
                    production. Tout cela pour garantir que nos produits
                    produits répondent aux exigences les plus strictes en termes
                    de conception et de qualité. de conception et de qualité.
                    <br />
                    <br />
                    Notre engagement ferme pour la qualité de nos produits de
                    nos produits nous a valu la confiance d'un grand nombre
                    d'architectes, d'installateurs et de clients. d'architectes,
                    d'installateurs et de clients.
                </Text>
                <ImageSlider images={Slider1} />
            </Seccion>
        </>
    )
}

export default QuienesSomos

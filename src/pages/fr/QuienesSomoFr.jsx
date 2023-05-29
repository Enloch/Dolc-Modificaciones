import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegableFr from '../../hooks/useMenuDesplegableFr'
import Final from '../../modules/EN/10_Final'
import ImageSlider from '../../components/slider/slider'
import img1 from '../../assets/images/QuienesSomos/DSC_6195.jpg'
import img2 from '../../assets/images/QuienesSomos/DSC_6221.jpg'
import img3 from '../../assets/images/QuienesSomos/DSC_6303.jpg'
import ImageWithCaption from '../../components/ImageWithCaption'
const Slider1 = [img1, img2, img3]
const QuienesSomos = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegableFr(
        MenuLanzadera,
        'Dolcker'
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion style={{ minHeight: '100vh' }}>
                <Titulo2>Qui sommes-nous ?</Titulo2>
                <Text>
                    Collaborer directement avec les architectes et les designers
                    afin qu'ils de leurs projets à l'avant-garde de la
                    construction durable. de la construction durable fait partie
                    de l'ADN de Dolcker.
                    <br />
                    <br />
                    Notre stratégie est de développer des façades ventilées
                    innovantes et performantes. innovantes et performantes. Ces
                    façades se retrouvent dans dans certains des bâtiments les
                    plus suggestifs du monde.
                    <br />
                    <br />
                    Dans nos laboratoires de recherche et de développement, nous
                    expérimentons et développons en permanence de nouveaux
                    matériaux et processus de production. Nous mettons tout en
                    œuvre pour garantir que nos produits répondent aux exigences
                    les plus strictes en matière de conception et de qualité.
                    qualité.
                    <br />
                    <br />
                    Notre engagement ferme à l'égard de la qualité de nos
                    produits nous permet de mériter la confiance d'un grand
                    nombre d'architectes, d'entreprises et de particuliers. la
                    confiance d'un grand nombre d'architectes, d'installateurs
                    et de clients, installateurs et clients.
                </Text>
                <ImageSlider images={Slider1} />
            </Seccion>
            {/* <Final /> */}
        </>
    )
}

export default QuienesSomos

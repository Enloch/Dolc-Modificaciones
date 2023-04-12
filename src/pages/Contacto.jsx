import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/SeccionContacto'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'
import styled from 'styled-components'

const IframeMapa = styled.iframe`
    grid-column: 8 / span 4;
    min-width: 100%;
    max-height: 600px;
    height: 100%;
    border: 0;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
        grid-column: 1 / -1;
    }
`

const Contacto = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )
    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion fullScreen>
                <Titulo2>CONTACTO</Titulo2>
                <Text>
                    DOLCKER SISTEMAS, S.L.
                    <br />
                    Calle Talamanca del Jarama, 19
                    <br />
                    28051 Madrid (España)
                    <br />
                    (+34) 902 363 725
                    <br />
                    <br />
                    <a href='mailto:administracion@dolcker.es'>
                        administracion@dolcker.es
                    </a>
                    <br />
                    <a href='mailto:comercial@dolcker.es'>
                        comercial@dolcker.es
                    </a>
                    <br />
                    <a href='mailto:dolcker@dolcker.es'>dolcker@dolcker.es</a>
                    <br />
                    <a href='mailto:sistemas@dolcker.es'>sistemas@dolcker.es</a>
                    <br />
                </Text>
                <IframeMapa
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d537.3864748354805!2d-3.6200241495279646!3d40.36637107658232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4224f8568ecd7f%3A0x5d29c4b1f0727c28!2sC.%20Talamanca%20del%20Jarama%2C%2019%2C%2028031%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1681208288558!5m2!1ses!2sus'
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></IframeMapa>
            </Seccion>

            <Final />
        </>
    )
}

export default Contacto

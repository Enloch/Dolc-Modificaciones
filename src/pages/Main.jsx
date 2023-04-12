import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import { StyledIndice } from '../modules/02_Indice/styleslanding'
import Final from '../modules/10_Final'
import Loading from '../components/Loading'
import Logo from '../assets/images/Inicio/logo.png'

const Main = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4500) // Cambiar a la cantidad de tiempo que desee esperar antes de desaparecer la página de carga
    }, [])

    return (
        <>
            {isLoading && <Loading />}
            <StyledIndice>
                {/* <Titulo color={COLORS.gray01}>DOLCKER</Titulo> */}
                <img src={Logo} style={{ scale: '1.1', filter: 'invert(1)' }} />
                <MenuLanzadera />
                <div className='idiomas'>
                    <Link to='/' className='seleccionado'>
                        ES
                    </Link>
                    <Link to='/en'>EN</Link>
                </div>
            </StyledIndice>
            <Final invert />
        </>
    )
}

export default Main

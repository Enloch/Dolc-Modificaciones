import StyledIntroduccion from './styles'
import { COLORS } from '../../../global/GlobalStyles'
import Cita from '../../../components/Cita'
import { useEffect } from 'react'
import { totalDuration } from './animationsConfig'
import scrollTo from '../../../helpers/scrollTo'
import Logo from '../../../components/Logo'
import getCookie from '../../../utils/getCookie'

const Inicio = ({ indiceRef }) => {
    useEffect(() => {
        if (getCookie('animacion')) {
            document.body.parentElement.style.scrollBehavior = 'smooth'
            document.body.style.overflow = 'auto'
            return
        } else {
            document.cookie = 'animacion=true'
            window.scrollTo(0, 0)

            if (window.scrollY === 0) {
                document.body.style.overflow = 'hidden'

                setTimeout(() => {
                    scrollTo(indiceRef.current.offsetTop, 2000)
                    document.body.style.overflow = 'auto'
                }, (totalDuration + 1.5) * 1000)
            } else {
                document.body.parentElement.style.scrollBehavior = 'smooth'
            }
        }
    }, [])

    return (
        <StyledIntroduccion backgroundColor={COLORS.gray01}>
            <Logo />
            <Cita
                cita='En cualquier arquitectura hay una igualdad entre la función pragmática y la función simbólica'
                author='Michael Graves'
                big
                colorAutor={COLORS.gray04}
            />
        </StyledIntroduccion>
    )
}

export default Inicio

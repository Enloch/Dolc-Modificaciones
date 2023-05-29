import Logo from '../../../components/Logo'
import Text from '../../../components/Text'
import { COLORS } from '../../../global/GlobalStyles'
import StyledFinal from './styles'

const Final = ({ invert = false }) => {
    const bgColor = invert ? COLORS.gray01 : COLORS.gray08
    const textColor = invert ? COLORS.gray08 : COLORS.gray01

    return (
        <StyledFinal backgroundColor={bgColor} fullScreen>
            <Logo />
            <Text color={textColor}>
                Le contenu de ce catalogue est protégé par la loi sur la
                propriété par la loi sur la propriété intellectuelle, décret
                législatif royal 1/1996. Toute reproduction partielle ou totale,
                sans l'autorisation expresse de DOLCKER, peut être
                l'autorisation expresse de DOLCKER peut être sanctionnée
                conformément au au code pénal.
                <br />
                <br />
                DOLCKER se réserve le droit de modifier et/ou de supprimer
                certains certains modèles, caractéristiques ou présentations des
                modèles dans ce catalogue, sans avis préalable, pour des raisons
                de production production, sans que cela n'entraîne de droit ou
                de préjudice.
                <br />
                <br />
                Toutes nos mesures standard sont sujettes à des variations
                possibles dues à des circonstances de production. Les
                environnements présentés dans ce sont des suggestions
                décoratives à des fins publicitaires. Les couleurs Les couleurs
                et/ou les tons des pièces peuvent présenter de légères
                différences par rapport aux pièces réelles. Il est important
                avant la pose de vérifier que les pièces correspondent aux
                modèles et aux caractéristiques de qualité, de tonalité et de
                calibre demandés. caractéristiques de qualité, de tonalité et de
                calibre. Les instructions de pose DOLCKER doivent être utilisées
                pour la pose effective. l'installation.
            </Text>
        </StyledFinal>
    )
}

export default Final

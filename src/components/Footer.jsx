import styled from 'styled-components'

const ButtonContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
`

const Button = styled.a`
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 10px;
    text-decoration: none;
`

const Footer = () => {
    return (
        <footer>
            <ButtonContainer>
                <Button href='/aviso-legal'>Legal</Button>
                <Button href='/politica-privacidad'>Privacidad</Button>
                <Button href='/'>ES</Button>
                <Button href='/en'>EN</Button>
            </ButtonContainer>
        </footer>
    )
}
export default Footer

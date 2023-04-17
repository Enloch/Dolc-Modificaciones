import styled from 'styled-components'
import fondo from '../../assets/images/Inicio/landing2.jpg'

const DolkSystem = () => {
    return (
        <Container>
            <MainTitle>Ventilated facades</MainTitle>
            <Wrapper>
                <ImageContainer>
                    <Image src={fondo} />
                </ImageContainer>
                <Content>
                    <Title>Dolcker System</Title>
                    {/* <Subtitle>DOL -TC11. Do&Dolm Nacar</Subtitle> */}
                    <Text>
                        The DOLCKER system allows the design of facades, with
                        technical solutions for the development of raised
                        floors, roofs, as well as window frames and crown caps,
                        always using the same material.
                    </Text>
                    <Button href={'en/fachadas-ventiladas/dolcker-system'}>
                        Know More
                    </Button>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default DolkSystem

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`

const Wrapper = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

const Image = styled.img`
    height: 100%;
    border-radius: 5px;
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const MainTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 70px 0;
    color: #333;
    text-align: center;
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    color: #333;
    text-align: center;
`

const Subtitle = styled.p`
    font-size: 1rem;
    margin-top: 10px;
    color: #333;
    text-align: center;
`

const Text = styled.p`
    font-size: calc(15px + 0.390625vw);
    line-height: 1.5;
    margin-top: 20px;
    color: #333;
    text-align: center;
`

const Button = styled.a`
    display: inline-block;
    color: #333;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #ffffff00;
    border: 2px solid #333;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #333;
        color: white;
    }
`

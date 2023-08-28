import styled from "styled-components";
import fondo from "../../assets/images/Inicio/landing2.jpg";

const DolckertTline = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Dolcker TLine</Title>
          <Text>
            El sistema DOLCKER TLINE permite diseñar fachadas, con soluciones
            técnicas para el desarrollo de suelos elevados, techos, así como
            recercados de ventanas, tapas de coronación, siempre utilizando el
            mismo material.
          </Text>
          <Button href={"/dolcker-tline"}>Saber Más</Button>
        </Content>
        <ImageContainer>
          <Image src={fondo} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default DolckertTline;

const Container = styled.div`
  /* min-height: 100vh; */
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  border-radius: 5px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 70px 0;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #333;
  text-align: center;
`;

const Text = styled.p`
  font-size: calc(15px + 0.390625vw);
  line-height: 1.5;
  margin-top: 20px;
  color: #333;
  text-align: center;
`;

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
`;

import styled from 'styled-components'

const Miniatura = ({ miniatura }) => {
    const { imagen, texto, enlace } = miniatura

    return (
        <StyledMiniatura href={enlace}>
            <Imagen src={imagen} alt={texto} />
            <p>{texto}</p>
        </StyledMiniatura>
    )
}
const Imagen = styled.img`
    width: 136px;
    height: 136px;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    @media (max-width: 1024) {
        width: 120px;
        height: 120px;
    }
`
const StyledMiniatura = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: auto;
    text-decoration: none;
    padding: 0.5rem;
    cursor: pointer;

    p {
        font-size: 1rem;
        color: #ffffff;
    }
`
export default Miniatura

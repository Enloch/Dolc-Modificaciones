import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    min-width: 160px;
    max-width: 165px;
    height: 280px;
    object-fit: cover;
    margin-bottom: 8px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`

const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0 4px;
  text-transform: lowercase;
  
  &::first-letter {
    text-transform: uppercase;
  }
`

const CardInfo = styled.p`
  font-size: 10px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`

const SeriesCard = ({ name, size, image, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <img src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardInfo>{size}</CardInfo>
    </CardContainer>
  )
}

export default SeriesCard

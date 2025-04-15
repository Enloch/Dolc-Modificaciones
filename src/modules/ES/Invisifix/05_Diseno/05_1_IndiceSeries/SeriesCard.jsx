import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease;
  height: 100%;
  width: 100%;

  &:hover {
    transform: translateY(5px);
  }

  img {
    width: 100%;
    max-width: 165px;
    height: 280px;
    object-fit: cover;
    margin-bottom: 8px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    @media (max-width: 480px) {
      height: 220px;
      max-width: 165px;
    }
    @media (max-width: 1400px) {
      height: 250px;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0 4px;
  text-transform: lowercase;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin: 4px 0 2px;
  }
`;

const CardInfo = styled.p`
  font-size: 10px;
  color: #666;
  margin: 0;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const SeriesCard = ({ name, size, image, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <img src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardInfo>{size}</CardInfo>
    </CardContainer>
  );
};

export default SeriesCard;

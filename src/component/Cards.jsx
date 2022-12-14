import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fondo from "../assets/images/fondo.jpg";

const Cards = ({
  logo,
  selectedCard,
  setSelectedCard,
  foundCards,
  cardList,
  setGameTries,
  gameTries,
}) => {
  const [flipCard, setFlipCard] = useState(false);
  useEffect(() => {
    setFlipCard(false);
  }, [cardList]);

  useEffect(() => {
    if (!selectedCard.length) {
      const found = foundCards.includes(logo.name);
      setGameTries(gameTries + 1);

      if (!found) {
        setTimeout(() => {
          setFlipCard(false);
        }, 900);
      }
    } else return;
  }, [selectedCard]);

  const handleFlipCard = (name) => {
    if (flipCard) return;
    setFlipCard(true);
    setSelectedCard([...selectedCard, name]);
  };

  return (
    <StyleCardImage
      flipCard={flipCard}
      onClick={() => handleFlipCard(logo.name)}
    >
      <div></div>
      <img src={logo.img} alt={logo.name} />
    </StyleCardImage>
  );
};

export default Cards;

const StyleCardImage = styled.div`
  padding: 0.5rem;
  position: relative;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.4s;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${fondo});
    background-position: center;
    background-size: cover;
    opacity: ${({ flipCard }) => (!flipCard ? 0.5 : 0)};
    transition: all linear 0.3s;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

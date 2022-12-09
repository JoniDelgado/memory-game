import { useState } from "react";
import styled from "styled-components";
import { logos } from "./assets/logos.js";
import Cards from "./component/Cards.jsx";

const logosList = [...logos, ...logos].sort((a) => {
  a = Math.random() - 0.5;
  return a;
});

console.log(logosList);

const cardToFind = "";

function App() {
  const [selectedCard, setSelectedCard] = useState(cardToFind);
  const [foundCards, setFoundCards] = useState([]);

  const handleCard = (name, id) => {
    if (foundCards.includes(name) || selectedCard.id === id) return;

    if (selectedCard) {
      if (selectedCard.name === name) {
        setFoundCards([...foundCards, name]);
      }
      return setSelectedCard(cardToFind);
    }
    setSelectedCard({ name, id });
  };

  return (
    <StyleGameContainer>
      <StyleCardsContainer>
        {logosList.map((logo, ind) => {
          return (
            <Cards key={ind} logo={logo} ind={ind} handleCard={handleCard} />
          );
        })}
      </StyleCardsContainer>
    </StyleGameContainer>
  );
}

export default App;

const StyleGameContainer = styled.main`
  margin: auto;
  width: 40%;
  display: flex;
  place-content: center;
`;

const StyleCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

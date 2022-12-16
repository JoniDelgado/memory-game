import { useEffect, useState } from "react";
import styled from "styled-components";
import { logos } from "./assets/logos.js";
import BestTimes from "./component/BestTimes.jsx";
import Cards from "./component/Cards.jsx";
import MainMenu from "./component/MainMenu.jsx";
import useLocalStorage from "./hooks/useLocalStorage.jsx";

const shuffleList = () => {
  const logosList = [...logos, ...logos].sort(() => Math.random() - 0.5);
  return logosList;
};

const initialFoundCards = [];

function App() {
  const [newGame, setNewGame] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [foundCards, setFoundCards] = useState(initialFoundCards);
  const [gameTime, setGameTime] = useState(0);
  const [gameTries, setGameTries] = useState(0);
  const [fromLocal, setFromLocal] = useLocalStorage("score");

  useEffect(() => {
    if (newGame) {
      setCardList(shuffleList());
      const timeCounter = setInterval(() => {
        setGameTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timeCounter);
    } else {
      setCardList([]);
      setSelectedCard([]);
      setFoundCards(initialFoundCards);
      setGameTime(0);
      setGameTries(0);
    }
  }, [newGame]);

  useEffect(() => {
    if (selectedCard.length === 2) {
      if (selectedCard[0] === selectedCard[1]) {
        setFoundCards([...foundCards, selectedCard[0]]);
      }
      setTimeout(() => {
        setGameTries(gameTries + 1);
        setSelectedCard([]);
      }, 1000);
    }
  }, [selectedCard]);

  useEffect(() => {
    if (foundCards.length && foundCards.length === cardList.length / 2) {
      alert(
        `Has completado el juego en ${gameTime} segundos y con ${gameTries} intentos.`
      );
      setFromLocal([...fromLocal, { time: gameTime, tries: gameTries }]);
      setNewGame(false);
    }
  }, [foundCards]);

  return (
    <StyleGameContainer>
      <MainMenu
        gameTime={gameTime}
        gameTries={gameTries}
        newGame={newGame}
        setNewGame={setNewGame}
      />
      {newGame ? (
        <StyleCardsContainer>
          {cardList.map((logo, ind) => {
            return (
              <Cards
                key={ind}
                logo={logo}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                foundCards={foundCards}
                setFoundCards={setFoundCards}
                cardList={cardList}
                setGameTries={setGameTries}
                gameTries={gameTries}
              />
            );
          })}
        </StyleCardsContainer>
      ) : (
        <BestTimes fromLocal={fromLocal} />
      )}
    </StyleGameContainer>
  );
}

export default App;

const StyleGameContainer = styled.main`
  margin: auto;
  padding: 2rem;
  width: 100vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const StyleCardsContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media screen and (max-width: 900px) {
    justify-content: space-around;
    gap: 0.5rem;
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

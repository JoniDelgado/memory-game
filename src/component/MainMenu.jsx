import React from "react";
import styled from "styled-components";

const MainMenu = ({ gameTries, gameTime, newGame, setNewGame }) => {
  const handleNewGame = () => {
    if (newGame) {
      const confirmExit = confirm(
        "¿Estas seguro que deseas reiniciar el juego?"
      );
      if (!confirmExit) return;
    }
    setNewGame(!newGame);
  };

  return (
    <StyleMainMenuContainer>
      <p>
        Tiempo: <strong>{gameTime}</strong>
      </p>
      <p>
        Jugadas: <strong>{gameTries}</strong>
      </p>
      <button onClick={handleNewGame}>
        {!newGame ? "New Game" : "Exit Game"}
      </button>
    </StyleMainMenuContainer>
  );
};

export default MainMenu;

const StyleMainMenuContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    padding: 0.3rem;
    border: none;
    background-color: transparent;
    font-family: "Freckle Face", cursive;
    font-size: 1.5rem;
    color: #fd841f;
    cursor: pointer;
  }

  strong {
    font-size: 1.5rem;
    color: #38e54d;
  }
`;

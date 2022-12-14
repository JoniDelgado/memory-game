import React from "react";
import styled from "styled-components";

const BestTimes = ({ fromLocal }) => {
  const lastBestTimes = () => {
    if (fromLocal.length > 3) {
      const lastFour = [...fromLocal].splice([...fromLocal].length - 4);
      return lastFour;
    } else return fromLocal;
  };

  return (
    <StyleScoreContainer>
      <h1>ULTIMOS RESULTADOS</h1>
      {lastBestTimes().length ? (
        lastBestTimes().map((score, index) => {
          return (
            <div key={index}>
              <p>
                Tiempo total: <strong>{score.time} seg</strong>.
              </p>
              <p>
                Intentos: <strong>{score.tries}</strong>
              </p>
            </div>
          );
        })
      ) : (
        <p>Aún no tenemos resultados</p>
      )}
    </StyleScoreContainer>
  );
};

export default BestTimes;

const StyleScoreContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 15px;
  text-align: center;
  background-color: #453c67cc;

  p {
    font-size: 1.4rem;
  }

  strong {
    color: #38e54d;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

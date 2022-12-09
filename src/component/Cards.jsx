import React from "react";
import styled from "styled-components";
import fondo from "../assets/images/fondo.jpg";

const Cards = ({ logo, ind, handleCard }) => {
  return (
    <StyleCardImage onClick={() => handleCard(logo.name, ind)}>
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

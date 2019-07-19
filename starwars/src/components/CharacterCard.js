import React from "react";
import styled from "styled-components";

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   background: white;
//   color: violet;
//   width: 30%;
//   margin-bottom: 50px;
// `;

// const Heading = styled.h3`
//   color: blue;
//   font-size: 1.2rem;
//   display: flex;
//   justify-content: center;
//   padding: 15px;
// `;

const Wrapper = styled.div`
  display: flex;
  background-color: #62cdfd;
  color: #f2f7ff;
  margin: 20px;
  width: 400px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    margin-top: 6%;
  }
`;

const CharacterCard = props => {
  return (
    <Wrapper>
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Skin color: {props.character.skin_color}</p>
      <p>Eye color: {props.character.eye_color}</p>
      <p>Birth year: {props.character.birth_year}</p>
    </Wrapper>
  );
};

export default CharacterCard;

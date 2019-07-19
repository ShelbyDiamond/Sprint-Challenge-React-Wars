import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  color: violet;
  width: 30%;
  margin-bottom: 50px;
`;

const Heading = styled.h3`
  color: blue;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const CharacterCard = props => {
  return (
    <Wrapper>
      <Heading>{props.character.name}</Heading>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Skin color: {props.character.skin_color}</p>
      <p>Eye color: {props.character.eye_color}</p>
      <p>Birth year: {props.character.birth_year}</p>
    </Wrapper>
  );
};

export default CharacterCard;

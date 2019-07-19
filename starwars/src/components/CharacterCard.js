import React from "react";

const CharacterCard = props => {
  return (
    <div>
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Skin color: {props.character.skin_color}</p>
      <p>Eye color: {props.character.eye_color}</p>
      <p>Birth year: {props.character.birth_year}</p>
    </div>
  );
};

export default CharacterCard;
